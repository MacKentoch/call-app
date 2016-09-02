import moment         from 'moment';
import { appConfig }  from '../../../../config';
import {
  getGestBenefIdentite,
  postGestBenefIdentite,
  fetchMockGetGestBenef,
  fetchMockPostBenefIdentite
}                     from '../../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_GET_GEST_BENEF_IDENTITE   = 'REQUEST_GET_GEST_BENEF_IDENTITE';
export const RECEIVED_GET_GEST_BENEF_IDENTITE  = 'RECEIVED_GET_GEST_BENEF_IDENTITE';
export const ERROR_GET_GEST_BENEF_IDENTITE     = 'ERROR_GET_GEST_BENEF_IDENTITE';

export const REQUEST_POST_GEST_BENEF_IDENTITE  = 'REQUEST_POST_GEST_BENEF_IDENTITE';
export const RECEIVED_POST_GEST_BENEF_IDENTITE = 'RECEIVED_POST_GEST_BENEF_IDENTITE';
export const ERROR_POST_GEST_BENEF_IDENTITE    = 'ERROR_POST_GEST_BENEF_IDENTITE';

export const SET_IS_EDITING_IDENTITE           = 'SET_IS_EDITING_IDENTITE';
export const UNSET_IS_EDITING_IDENTITE         = 'UNSET_IS_EDITING_IDENTITE';

export const SET_IS_SAVING_IDENTITE            = 'SET_IS_SAVING_IDENTITE';
export const UNSET_IS_SAVING_IDENTITE          = 'UNSET_IS_SAVING_IDENTITE';

export const SET_IS_COLLAPSED_IDENTITE         = 'SET_IS_COLLAPSED_IDENTITE';
export const UNSET_IS_COLLAPSED_IDENTITE       = 'UNSET_IS_COLLAPSED_IDENTITE';

export const UPDATE_CIVILITE_IDENTITE           = 'UPDATE_CIVILITE_IDENTITE';


//  -----------------------------------------------------------------
//    GET benef identite
//  -----------------------------------------------------------------
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

//  -----------------------------------------------------------------
//    set / unset benef isEditing flag
//  -----------------------------------------------------------------
export const setIsEditingIdentite = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_EDITING_IDENTITE,
    isEditingIdentite: true,
    time
  };
};
export const unsetIsEditingIdentite = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_EDITING_IDENTITE,
    isEditingIdentite: false,
    time
  };
};

//  -----------------------------------------------------------------
//    set / unset benef isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedIdentite = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_IDENTITE,
    isCollapsedIdentite: true,
    time
  };
};
export const unsetIsCollapsedIdentite = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_IDENTITE,
    isCollapsedIdentite: false,
    time
  };
};

//  -----------------------------------------------------------------
//    set / unset benef isSaving flag (NOT USED)
//  -----------------------------------------------------------------
export const setIsSavingIdentite = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_SAVING_IDENTITE,
    isSavingIdentite: true,
    time
  };
};
export const unsetIsSavingIdentite = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_SAVING_IDENTITE,
    isSavingIdentite: false,
    time
  };
};

//  -----------------------------------------------------------------
//    update civilite value
//  -----------------------------------------------------------------
export const updateCiviliteIdentite = (civilite = '', time = moment().format(formatDate)) => {
  if (civilite.trim().length > 0) {
    return {
      type: UPDATE_CIVILITE_IDENTITE,
      civilite,
      time
    };
  }
  return false;
};

//  -----------------------------------------------------------------
//    POST benef identite
//  -----------------------------------------------------------------
const requestPostGestBenefIdentite = (payload = {}, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_POST_GEST_BENEF_IDENTITE,
    isFetchingIdentite: true,
    isSavingIdentite: true,
    payload,
    time
  };
};
const receivedPostGestBenefIdentite = (response = {}, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_POST_GEST_BENEF_IDENTITE,
    isFetchingIdentite : false,
    isSavingIdentite: false,
    response,
    time
  };
};
const errorPostGestBenefIdentite = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_POST_GEST_BENEF_IDENTITE,
    isFetchingIdentite : false,
    isSavingIdentite: false,
    error,
    time
  };
};

const postQueryGestBenefIdentite = payload => dispatch => {
  if (!payload) {
    dispatch(errorPostGestBenefIdentite('postQueryGestBenefIdentite API error: benefId is not defined or not valid'));
  }

  dispatch(requestPostGestBenefIdentite(payload));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockPostBenefIdentite(payload) // mock is the same all gestBenef object
            .then(
              data => {
                if (!data || !data.success) {
                  dispatch(errorPostGestBenefIdentite({'error': 'post benef identite unsuccessfull with no server error'}));
                }
                dispatch(receivedPostGestBenefIdentite(data));
              }
            )
            .catch(
              err => dispatch(errorPostGestBenefIdentite(err))
            );
  } else {
    return postGestBenefIdentite(payload)
            .then(
              response => {
                if (!response || !response.success) {
                  dispatch(errorPostGestBenefIdentite({'error': 'post benef identite unsuccessfull with no server error'}));
                }
                dispatch(receivedPostGestBenefIdentite(response));
              }
            )
            .catch(
              error => dispatch(errorPostGestBenefIdentite(error))
            );
  }
};

export const postGestBenefIdentiteIfNeeded = payload => (dispatch, getState) => {
  if (shouldPostGestBenefIdentite(getState())) {
    return dispatch(postQueryGestBenefIdentite(payload));
  }
  return Promise.resolve();
};

function shouldPostGestBenefIdentite(state) {
  const gestBenef = state.gestBenef;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestBenef.isFetchingIdentite ||
      gestBenef.isSavingIdentite) {
    return false;
  } else {
    return true;
  }
}
