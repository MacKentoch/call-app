import moment         from 'moment';
import { appConfig }  from '../../../../config';
import {
  // API:
  getGestBenefAllContactsAndActivites,
  getGestBenefContactsAndActivites,

  // fecth mocks:
  fetchMockGetGestBenefAllContactsAndActivites,
  fetchMockGetGestBenefContactsAndActivitesForThisNumDossier
}                     from '../../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

// all contacts et activités:
export const REQUEST_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES   = 'REQUEST_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES';
export const RECEIVED_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES  = 'RECEIVED_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES';
export const ERROR_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES     = 'ERROR_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES';

// contact et activités specific 1 numDossier
export const REQUEST_GET_GEST_BENEF_THIS_DOSSIER_CONTACTS_ET_ACTIVITES    = 'REQUEST_GET_GEST_BENEF_THIS_DOSSIER_CONTACTS_ET_ACTIVITES';
export const RECEIVED_GET_GEST_BENEF_THIS_DOSSIER_CONTACTS_ET_ACTIVITES   = 'RECEIVED_GET_GEST_BENEF_THIS_DOSSIER_CONTACTS_ET_ACTIVITES';
export const ERROR_GET_GEST_BENEF_THIS_DOSSIER_CONTACTS_ET_ACTIVITES      = 'ERROR_GET_GEST_BENEF_THIS_DOSSIER_CONTACTS_ET_ACTIVITES';

// ui dossier collpased
export const SET_IS_COLLAPSED_CONTACTS_ET_ACTIVITES   = 'SET_IS_COLLAPSED_CONTACTS_ET_ACTIVITES';
export const UNSET_IS_COLLAPSED_CONTACTS_ET_ACTIVITES = 'UNSET_IS_COLLAPSED_CONTACTS_ET_ACTIVITES';

//  -----------------------------------------------------------------
//    GET contacts et activités
//  -----------------------------------------------------------------
const requestGetGestBenefAllContactsEtActivites = (benefId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES,
    isFetchingDossiers : true,
    benefId,
    time
  };
};

const receivedGetGestBenefAllContactsEtActivites = (dossiers = [], time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES,
    isFetchingDossiers : false,
    dossiers,
    time
  };
};

const errorGetGestBenefAllContactsEtActivites = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES,
    isFetchingDossiers : false,
    error,
    time
  };
};

const getQueryGestBenefAllContactsEtActivites = (benefId) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestBenefAllContactsEtActivites('getQueryGestBenefAllDossiers API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Dossiers" du bénéficiaire en erreur (identifiant non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestBenefAllContactsEtActivites(benefId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestBenefAllContactsAndActivites(benefId)
            .then(
              data => {
                dispatch(receivedGetGestBenefAllContactsEtActivites(data));
                return Promise.resolve({
                  message: 'Données "Dossiers" du bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestBenefAllContactsEtActivites(err));
                return Promise.reject({
                  message: 'Données "Dossiers" du bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestBenefAllContactsAndActivites(benefId)
            .then(
              response => {
                dispatch(receivedGetGestBenefAllContactsEtActivites(response));
                return Promise.resolve({
                  message: 'Données "Dossiers" du bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestBenefAllContactsEtActivites(error));
                return Promise.reject({
                  message: 'Données "Dossiers" du bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestBenefAllContactsEtActivitesIfNeeded = benefId => (dispatch, getState) => {
  if (shouldGetGestBenefAllContactsEtActivites(getState())) {
    return dispatch(getQueryGestBenefAllContactsEtActivites(benefId));
  }
  return Promise.resolve({
    message: 'fetch des modifications des informations "Dossiers" déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestBenefAllContactsEtActivites(state) {
  const gestBenef = state.gestBenef;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestBenef.isFetchingDossiers) {
    return false;
  } else {
    return true;
  }
}

//  -----------------------------------------------------------------
//    set / unset benef isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedContactsEtActivites = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_CONTACTS_ET_ACTIVITES,
    isCollapsedDossiers: true,
    time
  };
};
export const unsetIsCollapsedContactsEtActivites = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_ET_ACTIVITES,
    isCollapsedDossiers: false,
    time
  };
};
