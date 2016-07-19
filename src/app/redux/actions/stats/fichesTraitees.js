/* eslint consistent-return:0 */
import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  fetchMockFichesTraiteesData
}                     from '../../../services';

moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const REQUEST_FICHES_TRAITEES_DATA   = 'REQUEST_FICHES_TRAITEES_DATA';
export const RECEIVED_FICHES_TRAITEES_DATA  = 'RECEIVED_FICHES_TRAITEES_DATA';
export const ERROR_FICHES_TRAITEES_DATA     = 'ERROR_FICHES_TRAITEES_DATA';


const requestFichesTraiteesData = (time = moment().format(formatDate)) => {
  return {
    type:       REQUEST_FICHES_TRAITEES_DATA,
    isFetching: true,
    time
  };
};
const receivedFichesTraiteesData = (data, time = moment().format(formatDate)) => {
  const legend = extractLegend(data);

  return {
    type:       RECEIVED_FICHES_TRAITEES_DATA,
    isFetching: false,
    labels:     data.labels,
    datasets:   data.datasets,
    legend,
    time
  };
};
const errorFichesTraiteesData = (time = moment().format(formatDate)) => {
  return {
    type:       ERROR_FICHES_TRAITEES_DATA,
    isFetching: false,
    time
  };
};

const fetchFichesTraiteeData = () => dispatch => {
  dispatch(requestFichesTraiteesData());

  if (appConfig.DEV_MODE) {
    fetchMockFichesTraiteesData()
      .then(
        data => dispatch(receivedFichesTraiteesData(data))
      );
  } else {
    const url = `${getLocationOrigin()}/${appConfig.fichesTraitees.data.API}`;
    const options = {...defaultOptions};

    fetch(url, options)
      .then(checkStatus)
      .then(parseJSON)
      .then(
        data => dispatch(receivedFichesTraiteesData(data)))
      .catch(
        err => {
          dispatch(errorFichesTraiteesData());
          if (appConfig.DEBUG_ENABLED) {
            /* eslint-disable no-console */
            console.warn('fetchFichesTraiteeData error: ', err);
            /* eslint-enable no-console */
          }
        }
      );
  }
};

export const fetchFichesTraiteeDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchFichesTraiteeData(getState())) {
    return dispatch(fetchFichesTraiteeData());
  }
};
function shouldFetchFichesTraiteeData(state) {
  const fichesTraitees = state.fichesTraitees;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (fichesTraitees.isFetching) {
    return false;
  } else {
    return true;
  }
}

function extractLegend(data) {
  if (data && data.datasets && Array.isArray(data.datasets)) {
    return extractNeededProperties(data.datasets);
  }

  return [...appConfig.stats.legendeInit];
}

function extractNeededProperties(data) {
  return data.map(
    item => {
      const defaultColor = appConfig.stats.colorNonDef;
      const defaultLabel = appConfig.stats.labelNonDef;

      return {
        label: item.label ? item.label : defaultLabel,
        color: item.strokeColor ? item.strokeColor : defaultColor
      };
    }
  );
}
