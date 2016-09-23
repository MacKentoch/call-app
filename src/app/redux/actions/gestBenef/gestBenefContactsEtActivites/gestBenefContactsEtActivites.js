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
//    GET all contacts et activités
//  -----------------------------------------------------------------
const requestGetGestBenefAllContactsEtActivites = (benefId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES,
    isFetchingContactsEtActivites : true,
    benefId,
    time
  };
};

const receivedGetGestBenefAllContactsEtActivites = (dossiers = [], time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES,
    isFetchingContactsEtActivites : false,
    dossiers,
    time
  };
};

const errorGetGestBenefAllContactsEtActivites = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_BENEF_ALL_CONTACTS_ET_ACTIVITES,
    isFetchingContactsEtActivites : false,
    error,
    time
  };
};

const getQueryGestBenefAllContactsEtActivites = (benefId) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestBenefAllContactsEtActivites('getQueryGestBenefAllContactsEtActivites API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Contacts et Activités" du bénéficiaire en erreur (identifiant non valide)',
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
                  message: 'Données "Contacts et Activités" du bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestBenefAllContactsEtActivites(err));
                return Promise.reject({
                  message: 'Données "Contacts et Activités" du bénéficiaire non raffraichies',
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
                  message: 'Données "Contacts et Activités" du bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestBenefAllContactsEtActivites(error));
                return Promise.reject({
                  message: 'Données "Contacts et Activités" du bénéficiaire non raffraichies',
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
    message: 'fetch des modifications des informations "Contacts et Activités" déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestBenefAllContactsEtActivites(state) {
  const gestBenef = state.gestBenef;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestBenef.isFetchingContactsEtActivites) {
    return false;
  } else {
    return true;
  }
}

//  -----------------------------------------------------------------
//    GET contacts et activités
//  -----------------------------------------------------------------
const requestGetGestBenefThisDossierContactsEtActivites = (benefId = 0, numDossier = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_BENEF_THIS_DOSSIER_CONTACTS_ET_ACTIVITES,
    isFetchingContactsEtActivites : true,
    benefId,
    time
  };
};

const receivedGetGestBenefThisDossierContactsEtActivites = (dossiers = [], time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_BENEF_THIS_DOSSIER_CONTACTS_ET_ACTIVITES,
    isFetchingContactsEtActivites : false,
    dossiers,
    time
  };
};

const errorGetGestBenefThisDossierContactsEtActivites = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_BENEF_THIS_DOSSIER_CONTACTS_ET_ACTIVITES,
    isFetchingContactsEtActivites : false,
    error,
    time
  };
};

const getQueryGestBenefThisDossierContactsEtActivites = (benefId, numDossier) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestBenefThisDossierContactsEtActivites('getQueryGestBenefThisDossierContactsEtActivites API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Contacts et Activités" du bénéficiaire en erreur (identifiant non valide)',
      level: 'error',
      showNotification: true
    });
  }

  if (!numDossier) {
    dispatch(errorGetGestBenefThisDossierContactsEtActivites('getQueryGestBenefThisDossierContactsEtActivites API error: numDossier is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Contacts et Activités" du bénéficiaire en erreur (numDossier non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestBenefThisDossierContactsEtActivites(benefId, numDossier));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestBenefContactsAndActivitesForThisNumDossier(benefId, numDossier)
            .then(
              data => {
                dispatch(receivedGetGestBenefThisDossierContactsEtActivites(data));
                return Promise.resolve({
                  message: 'Données "Contacts et Activités" du bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestBenefThisDossierContactsEtActivites(err));
                return Promise.reject({
                  message: 'Données "Contacts et Activités" du bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestBenefContactsAndActivites(benefId, numDossier)
            .then(
              response => {
                dispatch(receivedGetGestBenefThisDossierContactsEtActivites(response));
                return Promise.resolve({
                  message: 'Données "Contacts et Activités" du bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestBenefThisDossierContactsEtActivites(error));
                return Promise.reject({
                  message: 'Données "Contacts et Activités" du bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestBenefThisDossierContactsEtActivitesIfNeeded = (benefId, numDossier) => (dispatch, getState) => {
  if (shouldGetGestBenefThisDossierContactsEtActivites(getState())) {
    return dispatch(getQueryGestBenefThisDossierContactsEtActivites(benefId, numDossier));
  }
  return Promise.resolve({
    message: 'fetch des modifications des informations "Contacts et Activités" déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestBenefThisDossierContactsEtActivites(state) {
  const gestBenef = state.gestBenef;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestBenef.isFetchingContactsEtActivites) {
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
    isCollapsedContactsEtActivites: true,
    time
  };
};
export const unsetIsCollapsedContactsEtActivites = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_ET_ACTIVITES,
    isCollapsedContactsEtActivites: false,
    time
  };
};
