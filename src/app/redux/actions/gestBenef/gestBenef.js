import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  getGestBenef,
  fetchMockGetGestBenef
}                     from '../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_GET_GEST_BENEF   = 'REQUEST_GET_GEST_BENEF';
export const RECEIVED_GET_GEST_BENEF  = 'RECEIVED_GET_GEST_BENEF';
export const ERROR_GET_GEST_BENEF     = 'ERROR_GET_GEST_BENEF';
export const RESET_GEST_BENEF         = 'RESET_GEST_BENEF';

export const resetGestBenef = (time = moment().format(formatDate)) => {
  return {
    type: RESET_GEST_BENEF,
    time
  };
};

const requestGetGestBenef = (benefId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_BENEF,
    isFetching : true,
    benefId,
    time
  };
};

const receivedGetGestBenef = (gestBenef, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_BENEF,
    isFetching : false,
    gestBenef,
    time
  };
};

const errorGetGestBenef = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_BENEF,
    isFetching : false,
    data: [],
    error,
    time
  };
};

const getQueryGestBenef = (benefId) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestBenef('getGestBenef API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données bénéficiaire en erreur (identifiant non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestBenef(benefId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestBenef(benefId)
            .then(
              data => {
                dispatch(receivedGetGestBenef(data));
                return Promise.resolve({
                  message: 'Données bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestBenef(err));
                return Promise.reject({
                  message: 'Données bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestBenef(benefId)
            .then(
              response => {
                dispatch(receivedGetGestBenef(response));
                return Promise.resolve({
                  message: 'Données bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestBenef(error));
                return Promise.reject({
                  message: 'Données bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestBenefIfNeeded = benefId => (dispatch, getState) => {
  if (shouldGetGestBenef(getState())) {
    return dispatch(getQueryGestBenef(benefId));
  }
  return Promise.resolve({
    message: '',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestBenef(state) {
  const gestBenef = state.gestBenef;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestBenef.isFetching) {
    return false;
  } else {
    return true;
  }
}
