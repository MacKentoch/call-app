import moment         from 'moment';
import { appConfig }  from '../../../../config';
import {
  getGestBenefIdentite,
  fetchMockGetGestBenef
}                     from '../../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_GET_GEST_BENEF_IDENTITE   = 'REQUEST_GET_GEST_BENEF_IDENTITE';
export const RECEIVED_GET_GEST_BENEF_IDENTITE  = 'RECEIVED_GET_GEST_BENEF_IDENTITE';
export const ERROR_GET_GEST_BENEF_IDENTITE     = 'ERROR_GET_GEST_BENEF_IDENTITE';

const requestGetGestBenefIdentite = (benefId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_BENEF_IDENTITE,
    isFetchingIdentite : true,
    benefId,
    time
  };
};

const receivedGetGestBenefIdentite = (gestBenef, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_BENEF_IDENTITE,
    isFetchingIdentite : false,
    gestBenef,
    time
  };
};

const errorGetGestBenefIdentite = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_BENEF_IDENTITE,
    isFetchingIdentite : false,
    data: [],
    error,
    time
  };
};

const getQueryGestBenefIdentite = (benefId) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestBenefIdentite('getGestBenefIdentite API error: benefId is not defined or not valid'));
  }

  dispatch(requestGetGestBenefIdentite(benefId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestBenef(benefId) // mock is the as all gestBenef object
            .then(
              data => dispatch(receivedGetGestBenefIdentite(data))
            )
            .catch(
              err => dispatch(errorGetGestBenefIdentite(err))
            );
  } else {
    return getGestBenefIdentite(benefId)
            .then(
              response => dispatch(receivedGetGestBenefIdentite(response))
            )
            .catch(
              error => dispatch(errorGetGestBenefIdentite(error))
            );
  }
};

export const getGestBenefIdentiteIfNeeded = benefId => (dispatch, getState) => {
  if (shouldGetGestBenefIdentite(getState())) {
    return dispatch(getQueryGestBenefIdentite(benefId));
  }
  return Promise.resolve();
};

function shouldGetGestBenefIdentite(state) {
  const gestBenef = state.gestBenef;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestBenef.isFetchingIdentite) {
    return false;
  } else {
    return true;
  }
}
