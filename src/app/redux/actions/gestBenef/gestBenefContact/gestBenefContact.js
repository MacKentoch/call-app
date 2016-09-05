import moment         from 'moment';
import { appConfig }  from '../../../../config';
import {
  getGestBenefContactData,
  postGestBenefContactData,
  fetchMockGetGestBenef,
  fetchMockPostBenefContactData
}                     from '../../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_GET_GEST_BENEF_CONTACT    = 'REQUEST_GET_GEST_BENEF_CONTACT';
export const RECEIVED_GET_GEST_BENEF_CONTACT   = 'RECEIVED_GET_GEST_BENEF_CONTACT';
export const ERROR_GET_GEST_BENEF_CONTACT      = 'ERROR_GET_GEST_BENEF_CONTACT';

export const REQUEST_POST_GEST_BENEF_CONTACT   = 'REQUEST_POST_GEST_BENEF_CONTACT';
export const RECEIVED_POST_GEST_BENEF_CONTACT  = 'RECEIVED_POST_GEST_BENEF_CONTACT';
export const ERROR_POST_GEST_BENEF_CONTACT     = 'ERROR_POST_GEST_BENEF_CONTACT';

export const SET_IS_EDITING_CONTACT            = 'SET_IS_EDITING_CONTACT';
export const UNSET_IS_EDITING_CONTACT          = 'UNSET_IS_EDITING_CONTACT';

export const SET_IS_SAVING_CONTACT             = 'SET_IS_SAVING_CONTACT';
export const UNSET_IS_SAVING_CONTACT           = 'UNSET_IS_SAVING_CONTACT';

export const SET_IS_COLLAPSED_CONTACT          = 'SET_IS_COLLAPSED_CONTACT';
export const UNSET_IS_COLLAPSED_CONTACT        = 'UNSET_IS_COLLAPSED_CONTACT';

export const UPDATE_TELEPHONE_FIX_CONTACT      = 'UPDATE_TELEPHONE_FIX_CONTACT';
export const UPDATE_TELEPHONE_MOBILE_CONTACT   = 'UPDATE_TELEPHONE_MOBILE_CONTACT';
export const UPDATE_EMAIL_CONTACT              = 'UPDATE_EMAIL_CONTACT';
export const UPDATE_NUM_ADRESS_CONTACT         = 'UPDATE_NUM_ADRESS_CONTACT';
export const UPDATE_VOIE_ADRESS_CONTACT        = 'UPDATE_VOIE_ADRESS_CONTACT';
export const UPDATE_COMPLEMENT_ADRESS_CONTACT  = 'UPDATE_COMPLEMENT_ADRESS_CONTACT';
export const UPDATE_CODE_POSTAL_CONTACT        = 'UPDATE_CODE_POSTAL_CONTACT';
export const UPDATE_VILLE_CONTACT              = 'UPDATE_VILLE_CONTACT';
export const UPDATE_PAYS_CONTACT               = 'UPDATE_PAYS_CONTACT';

//  -----------------------------------------------------------------
//    GET benef identite
//  -----------------------------------------------------------------
const requestGetGestBenefContact = (benefId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_BENEF_CONTACT,
    isFetchingContact : true,
    benefId,
    time
  };
};

const receivedGetGestBenefContact = (gestBenef, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_BENEF_CONTACT,
    isFetchingContact : false,
    gestBenef,
    time
  };
};

const errorGetGestBenefContact = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_BENEF_CONTACT,
    isFetchingContact : false,
    data: [],
    error,
    time
  };
};

const getQueryGestBenefContact = (benefId) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestBenefContact('getQueryGestBenefContact API error: benefId is not defined or not valid'));
  }

  dispatch(requestGetGestBenefContact(benefId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestBenef(benefId) // mock is the as all gestBenef object
            .then(
              data => dispatch(receivedGetGestBenefContact(data))
            )
            .catch(
              err => dispatch(errorGetGestBenefContact(err))
            );
  } else {
    return getGestBenefContactData(benefId)
            .then(
              response => dispatch(receivedGetGestBenefContact(response))
            )
            .catch(
              error => dispatch(errorGetGestBenefContact(error))
            );
  }
};

export const getGestBenefContactIfNeeded = benefId => (dispatch, getState) => {
  if (shouldGetGestBenefContact(getState())) {
    return dispatch(getQueryGestBenefContact(benefId));
  }
  return Promise.resolve();
};

function shouldGetGestBenefContact(state) {
  const gestBenef = state.gestBenef;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestBenef.isFetchingContact) {
    return false;
  } else {
    return true;
  }
}

//  -----------------------------------------------------------------
//    set / unset isEditing flag
//  -----------------------------------------------------------------
export const setIsEditingContact = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_EDITING_CONTACT,
    isEditingContact: true,
    time
  };
};
export const unsetIsEditingContact = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_EDITING_CONTACT,
    isEditingContact: false,
    time
  };
};

//  -----------------------------------------------------------------
//    set / unset isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedContact = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_CONTACT,
    isCollapsedContact: true,
    time
  };
};
export const unsetIsCollapsedContact = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACT,
    isCollapsedContact: false,
    time
  };
};

//  -----------------------------------------------------------------
//    set / unset isSaving flag (NOT USED)
//  -----------------------------------------------------------------
export const setIsSavingContact = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_SAVING_CONTACT,
    isSavingContact: true,
    time
  };
};
export const unsetIsSavingContact = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_SAVING_CONTACT,
    isSavingContact: false,
    time
  };
};

//  -----------------------------------------------------------------
//    update telephone fixe value
//  -----------------------------------------------------------------
export const updateTelephoneFixeContact = (fixedPhone = '', time = moment().format(formatDate)) => {
  if (fixedPhone.trim().length > 0) {
    return {
      type: UPDATE_TELEPHONE_FIX_CONTACT,
      fixedPhone,
      time
    };
  }
  return false;
};

//  -----------------------------------------------------------------
//    update telephone mobile value
//  -----------------------------------------------------------------
export const updateTelephoneMobileContact = (mobilePhone = '', time = moment().format(formatDate)) => {
  if (mobilePhone.trim().length > 0) {
    return {
      type: UPDATE_TELEPHONE_MOBILE_CONTACT,
      mobilePhone,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update email value
//  -----------------------------------------------------------------
export const updateEmailContact = (email = '', time = moment().format(formatDate)) => {
  if (email.trim().length > 0) {
    return {
      type: UPDATE_EMAIL_CONTACT,
      email,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update adress number value
//  -----------------------------------------------------------------
export const updateNumAdressNumber = (numAdress = '', time = moment().format(formatDate)) => {
  if (numAdress.trim().length > 0) {
    return {
      type: UPDATE_NUM_ADRESS_CONTACT,
      numAdress,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update way adress value
//  -----------------------------------------------------------------
export const updateVoieAdressContact = (voie = '', time = moment().format(formatDate)) => {
  if (voie.trim().length > 0) {
    return {
      type: UPDATE_VOIE_ADRESS_CONTACT,
      voie,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update complement Adress value
//  -----------------------------------------------------------------
export const updateComplementAdressContact = (complementAdr = '', time = moment().format(formatDate)) => {
  if (complementAdr.trim().length > 0) {
    return {
      type: UPDATE_COMPLEMENT_ADRESS_CONTACT,
      complementAdr,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update code postal value
//  -----------------------------------------------------------------
export const updateCodePostalContact = (codePostal = '', time = moment().format(formatDate)) => {
  if (codePostal.trim().length > 0) {
    return {
      type: UPDATE_CODE_POSTAL_CONTACT,
      dateDeces: codePostal,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update ville value
//  -----------------------------------------------------------------
export const updateVilleContact = (ville = '', time = moment().format(formatDate)) => {
  if (ville.trim().length > 0) {
    return {
      type: UPDATE_VILLE_CONTACT,
      ville,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update pays value
//  -----------------------------------------------------------------
export const updatePaysContact = (pays = '', time = moment().format(formatDate)) => {
  if (pays.trim().length > 0) {
    return {
      type: UPDATE_PAYS_CONTACT,
      pays,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    POST benef contact
//  -----------------------------------------------------------------
const requestPostGestBenefContact = (payload = {}, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_POST_GEST_BENEF_CONTACT,
    isFetchingContact: true,
    isSavingContact: true,
    payload,
    time
  };
};
const receivedPostGestBenefContact = (response = {}, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_POST_GEST_BENEF_CONTACT,
    isFetchingContact : false,
    isSavingContact: false,
    response,
    time
  };
};
const errorPostGestBenefContact = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_POST_GEST_BENEF_CONTACT,
    isFetchingContact : false,
    isSavingContact: false,
    error,
    time
  };
};

const postQueryGestBenefContact = payload => dispatch => {
  if (!payload) {
    dispatch(errorPostGestBenefContact('postQueryGestBenefContact API error: benefId is not defined or not valid'));
  }

  dispatch(requestPostGestBenefContact(payload));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockPostBenefContactData(payload) // mock is the same all gestBenef object
            .then(
              data => {
                if (!data || !data.success) {
                  dispatch(errorPostGestBenefContact({'error': 'post benef contact unsuccessfull with no server error'}));
                }
                dispatch(receivedPostGestBenefContact(data));
              }
            )
            .catch(
              err => dispatch(errorPostGestBenefContact(err))
            );
  } else {
    return postGestBenefContactData(payload)
            .then(
              response => {
                if (!response || !response.success) {
                  dispatch(errorPostGestBenefContact({'error': 'post benef contact unsuccessfull with no server error'}));
                }
                dispatch(receivedPostGestBenefContact(response));
              }
            )
            .catch(
              error => dispatch(errorPostGestBenefContact(error))
            );
  }
};

export const postGestBenefContactIfNeeded = payload => (dispatch, getState) => {
  if (shouldPostGestBenefContact(getState())) {
    return dispatch(postQueryGestBenefContact(payload));
  }
  return Promise.resolve();
};

function shouldPostGestBenefContact(state) {
  const gestBenef = state.gestBenef;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestBenef.isFetchingContact ||
      gestBenef.isSavingContact) {
    return false;
  } else {
    return true;
  }
}
