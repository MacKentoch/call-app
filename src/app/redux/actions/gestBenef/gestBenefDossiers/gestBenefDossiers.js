import moment         from 'moment';
import { appConfig }  from '../../../../config';
import {
  // API:
  getGestBenefDossiers,
  addGestBenefNewDossier,
  // fecth mocks:
  fetchMockGetGestBenefDossiers,
  fetchMockAddBenefNewDossier
}                     from '../../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

// all dossiers:
export const REQUEST_GET_GEST_BENEF_ALL_DOSSIERS    = 'REQUEST_GET_GEST_BENEF_ALL_DOSSIERS';
export const RECEIVED_GET_GEST_BENEF_ALL_DOSSIERS   = 'RECEIVED_GET_GEST_BENEF_ALL_DOSSIERS';
export const ERROR_GET_GEST_BENEF_ALL_DOSSIERS      = 'ERROR_GET_GEST_BENEF_ALL_DOSSIERS';

// /////////////////////////////////////
// manual create dossier (post backend):
export const REQUEST_ADD_GEST_BENEF_NEW_DOSSIER     = 'REQUEST_ADD_GEST_BENEF_NEW_DOSSIER';
export const RECEIVED_ADD_GEST_BENEF_NEW_DOSSIER    = 'RECEIVED_ADD_GEST_BENEF_NEW_DOSSIER';
export const ERROR_ADD_GEST_BENEF_NEW_DOSSIER       = 'ERROR_ADD_GEST_BENEF_NEW_DOSSIER';
// for UI (set a flag): to get informed when saving a new dossier to backend
export const SET_IS_SAVING_NEW_DOSSIER             = 'SET_IS_SAVING_NEW_DOSSIER';
export const UNSET_IS_SAVING_NEW_DOSSIER           = 'UNSET_IS_SAVING_NEW_DOSSIER';
// /////////////////////////////////////

// ui dossier collpased
export const SET_IS_COLLAPSED_DOSSIERS          = 'SET_IS_COLLAPSED_DOSSIERS';
export const UNSET_IS_COLLAPSED_DOSSIERS        = 'UNSET_IS_COLLAPSED_DOSSIERS';

//  -----------------------------------------------------------------
//    GET benef all dossiers
//  -----------------------------------------------------------------
const requestGetGestBenefAllDossiers = (benefId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_BENEF_ALL_DOSSIERS,
    isFetchingDossiers : true,
    benefId,
    time
  };
};

const receivedGetGestBenefAllDossiers = (dossiers = [], time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_BENEF_ALL_DOSSIERS,
    isFetchingDossiers : false,
    dossiers,
    time
  };
};

const errorGetGestBenefAllDossiers = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_BENEF_ALL_DOSSIERS,
    isFetchingDossiers : false,
    error,
    time
  };
};

const getQueryGestBenefAllDossiers = (benefId) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestBenefAllDossiers('getQueryGestBenefAllDossiers API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Dossiers" du bénéficiaire en erreur (identifiant non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestBenefAllDossiers(benefId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestBenefDossiers(benefId)
            .then(
              data => {
                dispatch(receivedGetGestBenefAllDossiers(data));
                return Promise.resolve({
                  message: 'Données "Dossiers" du bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestBenefAllDossiers(err));
                return Promise.reject({
                  message: 'Données "Dossiers" du bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestBenefDossiers(benefId)
            .then(
              response => {
                dispatch(receivedGetGestBenefAllDossiers(response));
                return Promise.resolve({
                  message: 'Données "Dossiers" du bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestBenefAllDossiers(error));
                return Promise.reject({
                  message: 'Données "Dossiers" du bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestBenefAllDossiersIfNeeded = benefId => (dispatch, getState) => {
  if (shouldGetGestBenefAllDossiers(getState())) {
    return dispatch(getQueryGestBenefAllDossiers(benefId));
  }
  return Promise.resolve({
    message: 'fetch des modifications des informations "Dossiers" déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestBenefAllDossiers(state) {
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
export const setIsCollapsedDossiers = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_DOSSIERS,
    isCollapsedDossiers: true,
    time
  };
};
export const unsetIsCollapsedDossiers = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_DOSSIERS,
    isCollapsedDossiers: false,
    time
  };
};

//  -----------------------------------------------------------------
//    set / unset benef isSaving a new dossier flag (NOT USED)
//  -----------------------------------------------------------------
export const setIsSavingNewDossier = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_SAVING_NEW_DOSSIER,
    isSavingDossiers: true,
    time
  };
};
export const unsetIsSavingNewDossier = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_SAVING_NEW_DOSSIER,
    isSavingDossiers: false,
    time
  };
};

//  -----------------------------------------------------------------
//    add new dossier to benef
//  -----------------------------------------------------------------
const requestAddGestBenefNewDossier = (benefId = 0, dossier = {}, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_ADD_GEST_BENEF_NEW_DOSSIER,
    isFetchingDossiers: true,
    isSavingDossiers: true,
    benefId,
    dossier,
    time
  };
};
const receivedAddGestBenefNewDossier = (dossiers = [], time = moment().format(formatDate)) => {
  if (Array.isArray(dossiers) && dossiers.length > 0) {
    return {
      type: RECEIVED_ADD_GEST_BENEF_NEW_DOSSIER,
      isFetchingDossiers : false,
      isSavingDossiers: false,
      dossiers,
      time
    };
  }
  return;
};
const errorAddGestBenefNewDossier = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_ADD_GEST_BENEF_NEW_DOSSIER,
    isFetchingDossiers : false,
    isSavingDossiers: false,
    error,
    time
  };
};

const addQueryGestBenefNewDossier = (benefId, newDossier) => (dispatch, getState) => {
  if (!parseInt(benefId, 10)) {
    dispatch(errorAddGestBenefNewDossier('addQueryGestBenefNewDossier API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Ajout d\'un nouveau "Dossier" en erreur (id non valide)',
      level: 'error',
      showNotification: true
    });
  }

  if (!newDossier) {
    dispatch(errorAddGestBenefNewDossier('addQueryGestBenefNewDossier API error: newDossier is not defined or not valid'));
    return Promise.reject({
      message: 'Ajout d\'un nouveau "Dossier" en erreur (payload non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestAddGestBenefNewDossier(benefId, newDossier));
  // les dossiers du state avant insertion:
  const previousDossiersList = [...getState().gestBenef.dossiers];
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockAddBenefNewDossier(benefId, newDossier)
            .then(
              data => {
                if (!data || !data.id) { // ATTENTION: doit retourner l'id du dossier
                  dispatch(errorAddGestBenefNewDossier({'error': 'add benef new dossier unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Ajout d\'un nouveau "Dossier" en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                const allDossiers = [ ...previousDossiersList, {...data} ];
                dispatch(receivedAddGestBenefNewDossier(allDossiers));

                return Promise.resolve({
                  id: data.id,
                  message: 'Ajout d\'un nouveau "Dossier" terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorAddGestBenefNewDossier(err));
                return Promise.reject({
                  message: 'Ajout d\'un nouveau "Dossier" en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return addGestBenefNewDossier(benefId, newDossier)
            .then(
              response => {
                if (!response || !response.id) { // ATTENTION: doit retourner l'id du dossier
                  dispatch(errorAddGestBenefNewDossier({'error': 'post benef identite unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Ajout d\'un nouveau "Dossier" en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                const allDossiers = [ ...previousDossiersList, {...response} ];
                dispatch(receivedAddGestBenefNewDossier(allDossiers));

                return Promise.resolve({
                  id: response.id,
                  message: 'Ajout d\'un nouveau "Dossier" terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorAddGestBenefNewDossier(error));
                return Promise.reject({
                  message: 'Ajout d\'un nouveau "Dossier" en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const addGestBenefNewDossierIfNeeded = (benefId, newDossier) => (dispatch, getState) => {
  if (shouldAddGestBenefNewDossier(getState())) {
    return dispatch(addQueryGestBenefNewDossier(benefId, newDossier));
  }
  return Promise.resolve({
    message: 'Un ajout de "Dossier" est déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldAddGestBenefNewDossier(state) {
  const gestBenef = state.gestBenef;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestBenef.isFetchingDossiers ||
      gestBenef.isSavingDossiers) {
    return false;
  } else {
    return true;
  }
}
