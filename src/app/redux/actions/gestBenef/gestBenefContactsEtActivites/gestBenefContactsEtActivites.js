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

// RESET dossiers
export const RESET_GEST_BENEF_UNSET_IS_COLLAPSED_CONTACTS_ET_ACTIVITES = 'RESET_GEST_BENEF_UNSET_IS_COLLAPSED_CONTACTS_ET_ACTIVITES';

//  -----------------------------------------------------------------
//    GET contacts et activités
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
//    set / unset isEditing flag
//  -----------------------------------------------------------------
export const setIsEditingDossier = (dossierId = 0, time = moment().format(formatDate)) => {
  return {
    type: SET_IS_EDITING_DOSSIER,
    isEditingDossiers: true,
    editDossierId: dossierId,
    time
  };
};
export const unsetIsEditingDossier = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_EDITING_DOSSIER,
    isEditingDossiers: false,
    editDossierId: 0, // dossier Id = 0 means no dossier
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
  return false;
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

//  -----------------------------------------------------------------
//    update a dossier to benef
//  -----------------------------------------------------------------
const requestUpdateGestBenefDossier = (dossier = {}, time = moment().format(formatDate)) => {
  if (dossier && parseInt(dossier.id, 10)) {
    return {
      type: REQUEST_UPDATE_GEST_BENEF_DOSSIER,
      isFetchingDossiers: true,
      isSavingDossiers: true,
      dossier,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'requestUpdateGestBenefDossier'
  };
};
const receivedUpdateGestBenefDossier = (dossiers = [], time = moment().format(formatDate)) => {
  if (Array.isArray(dossiers) && dossiers.length > 0) {
    return {
      type: RECEIVED_UPDATE_GEST_BENEF_DOSSIER,
      isFetchingDossiers : false,
      isSavingDossiers: false,
      dossiers,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'receivedUpdateGestBenefDossier'
  };
};
const errorUpdateGestBenefDossier = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_UPDATE_GEST_BENEF_DOSSIER,
    isFetchingDossiers : false,
    isSavingDossiers: false,
    error,
    time
  };
};

const updateQueryGestBenefDossier = updatedDossier => (dispatch, getState) => {
  if (!updatedDossier) {
    dispatch(errorUpdateGestBenefDossier('updateQueryGestBenefDossier API error: newDossier is not defined or not valid'));
    return Promise.reject({
      message: 'Modification du "Dossier" interrompue (données invalides)',
      level: 'error',
      showNotification: true
    });
  }

  if (!parseInt(updatedDossier.id, 10)) {
    dispatch(errorUpdateGestBenefDossier('updateQueryGestBenefDossier API error: dossier id is not defined or not valid'));
    return Promise.reject({
      message: 'Modification du "Dossier" interrompue (id non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestUpdateGestBenefDossier(updatedDossier));
  // les dossiers du state avant insertion:
  const previousDossiersList = [...getState().gestBenef.dossiers];
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockUpdateBenefDossier(updatedDossier) // NOTE: update mock same as add dossier since it is just a timeout
            .then(
              data => {
                if (!data || !data.id) { // ATTENTION: doit retourner l'id du dossier
                  dispatch(errorUpdateGestBenefDossier({'error': 'update benef dossier unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Modification du "Dossier" en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }

                // updated all dossier: remove -> add new one -> then sort by id ASC
                const allDossiers = previousDossiersList
                                      .filter(dossier => dossier.id !== updatedDossier.id)
                                      .concat({...updatedDossier})
                                      .sort((a, b) => sortByIdPropertyAsc(a, b));
                dispatch(receivedUpdateGestBenefDossier(allDossiers));

                return Promise.resolve({
                  id: data.id,
                  message: 'Modification du "Dossier" terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorUpdateGestBenefDossier(err));
                return Promise.reject({
                  message: 'Modification du "Dossier" en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return updateGestBenefDossier(updatedDossier)
            .then(
              response => {
                if (!response || !response.id) { // ATTENTION: doit retourner l'id du dossier
                  dispatch(errorUpdateGestBenefDossier({'error': 'update benef identite unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Modification du "Dossier" en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                // const allDossiers = [ ...previousDossiersList, {...response} ];
                const allDossiers = previousDossiersList
                                      .filter(dossier => dossier.id !== response.id)
                                      .concat({...response})
                                      .sort((a, b) => sortByIdPropertyAsc(a, b));
                dispatch(receivedUpdateGestBenefDossier(allDossiers));

                return Promise.resolve({
                  id: response.id,
                  message: 'Modification du "Dossier" terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorUpdateGestBenefDossier(error));
                return Promise.reject({
                  message: 'Modification du "Dossier" en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const updateGestBenefDossierIfNeeded = updatedDossier => (dispatch, getState) => {
  if (shouldUpdateGestBenefDossier(getState())) {
    return dispatch(updateQueryGestBenefDossier(updatedDossier));
  }
  return Promise.resolve({
    message: 'Une modification de "Dossier" est déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldUpdateGestBenefDossier(state) {
  const gestBenef = state.gestBenef;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestBenef.isFetchingDossiers ||
      gestBenef.isSavingDossiers) {
    return false;
  } else {
    return true;
  }
}

function sortByIdPropertyAsc(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}
