import moment         from 'moment';
import { appConfig }  from '../../../../config';
import {
  getGestBenefDossiers,
  fetchMockGetGestBenefDossiers
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
    isFetchingIdentite : true,
    benefId,
    time
  };
};

const receivedGetGestBenefAllDossiers = (dossiers = [], time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_BENEF_ALL_DOSSIERS,
    isFetchingIdentite : false,
    dossiers,
    time
  };
};

const errorGetGestBenefAllDossiers = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_BENEF_ALL_DOSSIERS,
    isFetchingIdentite : false,
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
//    set / unset benef isEditing flag
//  -----------------------------------------------------------------
export const setIsEditingIdentite = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_EDITING_DOSSIERS,
    isEditingIdentite: true,
    time
  };
};
export const unsetIsEditingIdentite = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_EDITING_DOSSIERS,
    isEditingIdentite: false,
    time
  };
};

//  -----------------------------------------------------------------
//    set / unset benef isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedIdentite = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_DOSSIERS,
    isCollapsedIdentite: true,
    time
  };
};
export const unsetIsCollapsedIdentite = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_DOSSIERS,
    isCollapsedIdentite: false,
    time
  };
};

//  -----------------------------------------------------------------
//    set / unset benef isSaving flag (NOT USED)
//  -----------------------------------------------------------------
export const setIsSavingIdentite = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_SAVING_DOSSIERS,
    isSavingIdentite: true,
    time
  };
};
export const unsetIsSavingIdentite = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_SAVING_DOSSIERS,
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
      type: UPDATE_CIVILITE_DOSSIERS,
      civilite,
      time
    };
  }
  return false;
};

//  -----------------------------------------------------------------
//    update nom value
//  -----------------------------------------------------------------
export const updateNomIdentite = (nom = '', time = moment().format(formatDate)) => {
  if (nom.trim().length > 0) {
    return {
      type: UPDATE_NOM_DOSSIERS,
      nom,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update nom de jeune fille value
//  -----------------------------------------------------------------
export const updateNomDeJeuneFilleIdentite = (nomDeJeuneFille = '', time = moment().format(formatDate)) => {
  if (nomDeJeuneFille.trim().length > 0) {
    return {
      type: UPDATE_NOM_DE_JEUNE_FILLE_DOSSIERS,
      nomDeJeuneFille,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update prénom value
//  -----------------------------------------------------------------
export const updatePrenomIdentite = (prenom = '', time = moment().format(formatDate)) => {
  if (prenom.trim().length > 0) {
    return {
      type: UPDATE_PRENOM_DOSSIERS,
      prenom,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update dateNaissance value
//  -----------------------------------------------------------------
export const updateDateNaissanceIdentite = (dateNaissance = '', time = moment().format(formatDate)) => {
  if (dateNaissance) {
    const dateNaissanceStr = moment(dateNaissance, formatDateNaissance).format(formatDateNaissance);
    return {
      type: UPDATE_DATE_DE_NAISSANCE_DOSSIERS,
      dateNaissance: dateNaissanceStr,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update numss value
//  -----------------------------------------------------------------
export const updateNumssIdentite = (numss = '', time = moment().format(formatDate)) => {
  if (numss.trim().length > 0) {
    return {
      type: UPDATE_NUMSS_DOSSIERS,
      numss,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update dateDeces value
//  -----------------------------------------------------------------
export const updateDateDecesIdentite = (dateDeces = '', time = moment().format(formatDate)) => {
  if (dateDeces) {
    const dateDecesStr = moment(dateDeces, formatDateDeces).format(formatDateDeces);
    return {
      type: UPDATE_DATE_DECES_DOSSIERS,
      dateDeces: dateDecesStr,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update numss value
//  -----------------------------------------------------------------
export const updateMaritalStatusIdentite = (maritalStatus = '', time = moment().format(formatDate)) => {
  if (maritalStatus.trim().length > 0) {
    return {
      type: UPDATE_MARITAL_STATUS_DOSSIERS,
      maritalStatus,
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
    type: REQUEST_POST_GEST_BENEF_DOSSIERS,
    isFetchingIdentite: true,
    isSavingIdentite: true,
    payload,
    time
  };
};
const receivedPostGestBenefIdentite = (response = {}, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_POST_GEST_BENEF_DOSSIERS,
    isFetchingIdentite : false,
    isSavingIdentite: false,
    response,
    time
  };
};
const errorPostGestBenefIdentite = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_POST_GEST_BENEF_DOSSIERS,
    isFetchingIdentite : false,
    isSavingIdentite: false,
    error,
    time
  };
};

const postQueryGestBenefIdentite = payload => dispatch => {
  if (!payload) {
    dispatch(errorPostGestBenefIdentite('postQueryGestBenefIdentite API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Enregistrement des modifications des informations "Identité" du bénéficiaire en erreur (payload non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestPostGestBenefIdentite(payload));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockPostBenefIdentite(payload) // mock is the same all gestBenef object
            .then(
              data => {
                if (!data || !data.id) { // ATTENTION: doit retourner l'id du benef update ou insert
                  dispatch(errorPostGestBenefIdentite({'error': 'post benef identite unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Enregistrement des modifications des informations "Identité" du bénéficiaire en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                dispatch(receivedPostGestBenefIdentite(data));
                return Promise.resolve({
                  id: data.id,
                  message: 'Enregistrement des modifications des informations "Identité" du bénéficiaire terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorPostGestBenefIdentite(err));
                return Promise.reject({
                  message: 'Enregistrement des modifications des informations "Identité" du bénéficiaire en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return postGestBenefIdentite(payload)
            .then(
              response => {
                if (!response || !response.id) {
                  dispatch(errorPostGestBenefIdentite({'error': 'post benef identite unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Enregistrement des modifications des informations "Identité" du bénéficiaire en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                dispatch(receivedPostGestBenefIdentite(response));
                return Promise.resolve({
                  id: response.id,
                  message: 'Enregistrement des modifications des informations "Identité" du bénéficiaire terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorPostGestBenefIdentite(error));
                return Promise.reject({
                  message: 'Enregistrement des modifications des informations "Identité" du bénéficiaire en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const postGestBenefIdentiteIfNeeded = payload => (dispatch, getState) => {
  if (shouldPostGestBenefIdentite(getState())) {
    return dispatch(postQueryGestBenefIdentite(payload));
  }
  return Promise.resolve({
    message: 'post des modifications des informations "Identité" déjà en cours',
    level: 'info',
    showNotification: false
  });
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
