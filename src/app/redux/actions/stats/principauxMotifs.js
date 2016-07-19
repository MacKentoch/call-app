/* eslint consistent-return:0 */
import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  fetchMockPrincipauxMotifsData
}                     from '../../../services';

moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const REQUEST_PRINCIPAUX_MOTIFS_DATA   = 'REQUEST_PRINCIPAUX_MOTIFS_DATA';
export const RECEIVED_PRINCIPAUX_MOTIFS_DATA  = 'RECEIVED_PRINCIPAUX_MOTIFS_DATA';
export const ERROR_PRINCIPAUX_MOTIFS_DATA     = 'ERROR_PRINCIPAUX_MOTIFS_DATA';


const requestPrincipauxMotifsData = (time = moment().format(formatDate)) => {
  return {
    type:       REQUEST_PRINCIPAUX_MOTIFS_DATA,
    isFetching: true,
    time
  };
};
const receivedPrincipauxMotifsData = (data, time = moment().format(formatDate)) => {
  const legend = extractLegend(data);

  return {
    type:       RECEIVED_PRINCIPAUX_MOTIFS_DATA,
    isFetching: false,
    labels:     data.labels,
    datasets:   data.datasets,
    legend,
    time
  };
};
const errorPrincipauxMotifsData = (time = moment().format(formatDate)) => {
  return {
    type:       ERROR_PRINCIPAUX_MOTIFS_DATA,
    isFetching: false,
    time
  };
};

const fetchPrincipauxMotifsData = () => dispatch => {
  dispatch(requestPrincipauxMotifsData());

  if (appConfig.DEV_MODE) {
    fetchMockPrincipauxMotifsData()
      .then(
        data => dispatch(receivedPrincipauxMotifsData(data))
      );
  } else {
    const url = `${getLocationOrigin()}/${appConfig.principauxMotifs.data.API}`;
    const options = {...defaultOptions};

    fetch(url, options)
      .then(checkStatus)
      .then(parseJSON)
      .then(
        data => dispatch(receivedPrincipauxMotifsData(data)))
      .catch(
        err => {
          dispatch(errorPrincipauxMotifsData());
          if (appConfig.DEBUG_ENABLED) {
            /* eslint-disable no-console */
            console.warn('fetchPrincipauxMotifsData error: ', err);
            /* eslint-enable no-console */
          }
        }
      );
  }
};

export const fetchPrincipauxMotifsDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPrincipauxMotifsData(getState())) {
    return dispatch(fetchPrincipauxMotifsData());
  }
};
function shouldFetchPrincipauxMotifsData(state) {
  const principauxMotifs = state.principauxMotifs;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (principauxMotifs.isFetching) {
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
