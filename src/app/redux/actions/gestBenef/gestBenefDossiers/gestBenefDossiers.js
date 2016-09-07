import moment         from 'moment';
import { appConfig }  from '../../../../config';
import {
  getGestBenefDossiers,
  // postGestBenefIdentite,
  fetchMockGetGestBenefDossiers,
  // fetchMockPostBenefIdentite
}                     from '../../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_GET_GEST_BENEF_DOSSIERS    = 'REQUEST_GET_GEST_BENEF_DOSSIERS';
export const RECEIVED_GET_GEST_BENEF_DOSSIERS   = 'RECEIVED_GET_GEST_BENEF_DOSSIERS';
export const ERROR_GET_GEST_BENEF_DOSSIERS      = 'ERROR_GET_GEST_BENEF_DOSSIERS';

// export const REQUEST_POST_GEST_BENEF_DOSSIERS   = 'REQUEST_POST_GEST_BENEF_DOSSIERS';
// export const RECEIVED_POST_GEST_BENEF_DOSSIERS  = 'RECEIVED_POST_GEST_BENEF_DOSSIERS';
// export const ERROR_POST_GEST_BENEF_DOSSIERS     = 'ERROR_POST_GEST_BENEF_DOSSIERS';

// export const SET_IS_EDITING_DOSSIERS            = 'SET_IS_EDITING_DOSSIERS';
// export const UNSET_IS_EDITING_DOSSIERS          = 'UNSET_IS_EDITING_DOSSIERS';

export const SET_IS_SAVING_DOSSIERS             = 'SET_IS_SAVING_DOSSIERS';
export const UNSET_IS_SAVING_DOSSIERS           = 'UNSET_IS_SAVING_DOSSIERS';

export const SET_IS_COLLAPSED_DOSSIERS          = 'SET_IS_COLLAPSED_DOSSIERS';
export const UNSET_IS_COLLAPSED_DOSSIERS        = 'UNSET_IS_COLLAPSED_DOSSIERS';

export const UPDATE_ONE_GEST_BENEF_DOSSIERS     = 'UPDATE_ONE_GEST_BENEF_DOSSIERS';
export const ADD_ONE_GEST_BENEF_DOSSIERS        = 'ADD_ONE_GEST_BENEF_DOSSIERS';
export const DELETE_ONE_GEST_BENEF_DOSSIERS     = 'DELETE_ONE_GEST_BENEF_DOSSIERS';

//  -----------------------------------------------------------------
//    GET benef dossiers
//  -----------------------------------------------------------------
const requestGetGestBenefIdentite = (benefId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_BENEF_DOSSIERS,
    isFetchingIdentite : true,
    benefId,
    time
  };
};

const receivedGetGestBenefIdentite = (gestBenef, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_BENEF_DOSSIERS,
    isFetchingIdentite : false,
    gestBenef,
    time
  };
};

const errorGetGestBenefIdentite = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_BENEF_DOSSIERS,
    isFetchingIdentite : false,
    data: [],
    error,
    time
  };
};

const getQueryGestBenefIdentite = (benefId) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestBenefIdentite('getGestBenefIdentite API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Identité" du bénéficiaire en erreur (identifiant non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestBenefIdentite(benefId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestBenef(benefId) // mock is the as all gestBenef object
            .then(
              data => {
                dispatch(receivedGetGestBenefIdentite(data));
                return Promise.resolve({
                  message: 'Données "Identité" du bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestBenefIdentite(err));
                return Promise.reject({
                  message: 'Données "Identité" du bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestBenefIdentite(benefId)
            .then(
              response => {
                dispatch(receivedGetGestBenefIdentite(response));
                return Promise.resolve({
                  message: 'Données "Identité" du bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestBenefIdentite(error));
                return Promise.reject({
                  message: 'Données "Identité" du bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestBenefIdentiteIfNeeded = benefId => (dispatch, getState) => {
  if (shouldGetGestBenefIdentite(getState())) {
    return dispatch(getQueryGestBenefIdentite(benefId));
  }
  return Promise.resolve({
    message: 'fetch des modifications des informations "Identité" déjà en cours',
    level: 'info',
    showNotification: false
  });
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
