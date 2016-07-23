import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  getStatsFichesParCanal,
  fetchMockFichesParCanalData
}                     from '../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_FICHES_PAR_CANAL_DATA   = 'REQUEST_FICHES_PAR_CANAL_DATA';
export const RECEIVED_FICHES_PAR_CANAL_DATA  = 'RECEIVED_FICHES_PAR_CANAL_DATA';
export const ERROR_FICHES_PAR_CANAL_DATA     = 'ERROR_FICHES_PAR_CANAL_DATA';


const requestFichesParCanalData = (time = moment().format(formatDate)) => {
  return {
    type:       REQUEST_FICHES_PAR_CANAL_DATA,
    isFetching: true,
    time
  };
};
const receivedFichesParCanalData = (data, time = moment().format(formatDate)) => {
  const legend = extractLegend(data);

  return {
    type:       RECEIVED_FICHES_PAR_CANAL_DATA,
    isFetching: false,
    data:       data.data,
    legend,
    time
  };
};
const errorFichesParCanalData = (time = moment().format(formatDate)) => {
  return {
    type:       ERROR_FICHES_PAR_CANAL_DATA,
    isFetching: false,
    time
  };
};

const fetchFichesParCanalData = () => dispatch => {
  dispatch(requestFichesParCanalData());

  if (appConfig.DEV_MODE) {
    fetchMockFichesParCanalData()
      .then(
        data => dispatch(receivedFichesParCanalData(data))
      );
  } else {
    getStatsFichesParCanal()
      .then(
        data => dispatch(receivedFichesParCanalData(data)))
      .catch(
        err => {
          dispatch(errorFichesParCanalData());
          if (appConfig.DEBUG_ENABLED) {
            /* eslint-disable no-console */
            console.warn('fetchFichesParCanalData error: ', err);
            /* eslint-enable no-console */
          }
        }
      );
  }
};
/* eslint-disable consistent-return */
export const fetchFichesParCanalDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchFichesParCanalData(getState())) {
    return dispatch(fetchFichesParCanalData());
  }
};
/* eslint-enable consistent-return */

function shouldFetchFichesParCanalData(state) {
  const fichesParCanal = state.fichesParCanal;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (fichesParCanal.isFetching) {
    return false;
  } else {
    return true;
  }
}

function extractLegend(data) {
  if (data && data.data && Array.isArray(data.data)) {
    return extractNeededProperties(data.data);
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
        color: item.color ? item.color : defaultColor
      };
    }
  );
}
