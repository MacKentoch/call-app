import moment               from 'moment';
import { appConfig }        from '../../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE   = 'SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE';
export const UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE = 'UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE';

export const REQUEST_SAVE_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT  = 'REQUEST_SAVE_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT';
export const RECEIVED_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT  = 'RECEIVED_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT';
export const ERROR_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT     = 'ERROR_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT';

//  -----------------------------------------------------------------
//    set / unset isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedContactsFicheActivite = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE,
    isCollapsedFicheActivite: true,
    time
  };
};
export const unsetIsCollapsedContactsFicheActivite = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE,
    isCollapsedFicheActivite: false,
    time
  };
};

//  -----------------------------------------------------------------
//    POST fiche activite new comment
//  -----------------------------------------------------------------
const requestPostGestContactsSaveFicheContact = (payload = {}, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_SAVE_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT,
    isSavingFicheNewActiviteNewComment: true
    payload,
    time
  };
};
const receivedPostGestContactsSaveFicheContact = (response = {}, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT,
    isSavingFicheNewActiviteNewComment: true
    response,
    time
  };
};
const errorPostGestContactsSaveFicheContact = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT,
    isSavingFicheNewActiviteNewComment: true
    error,
    time
  };
};

const postQueryGestContactsSaveFicheContact = payload => dispatch => {
  if (!payload) {
    dispatch(errorPostGestContactsSaveFicheContact('postQueryGestContactsSaveFicheContact API error: payload is not defined or not valid'));
    return Promise.reject({
      message: 'Enregistrement de la fiche contact en erreur (payload non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestPostGestContactsSaveFicheContact(payload));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockPostGestContactsSaveFicheContact(payload) // mock is the same all gestBenef object
            .then(
              data => {
                if (!data || !data.id) { // ATTENTION: doit retourner l'id de la fiche contact en update ou insert
                  dispatch(errorPostGestContactsSaveFicheContact({'error': 'post fiche contact unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Enregistrement de la fiche contact en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                dispatch(receivedPostGestContactsSaveFicheContact(data));
                return Promise.resolve({
                  id: data.id,
                  message: 'Enregistrement de la fiche contact terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorPostGestContactsSaveFicheContact(err));
                return Promise.reject({
                  message: 'Enregistrement de la fiche contact en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return postGestContactsSaveFicheContact(payload)
            .then(
              response => {
                if (!response || !response.id) {
                  dispatch(errorPostGestContactsSaveFicheContact({'error': 'post benef identite unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Enregistrement de la fiche contact en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                dispatch(receivedPostGestContactsSaveFicheContact(response));
                return Promise.resolve({
                  id: response.id,
                  message: 'Enregistrement de la fiche contact terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorPostGestContactsSaveFicheContact(error));
                return Promise.reject({
                  message: 'Enregistrement de la fiche contact en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const saveNewCommentFicheActivite = (activiteId, comment) => (dispatch, getState) => {
  if (shouldPostGestContactsSaveFicheContact(getState())) {
    return dispatch(postQueryGestContactsSaveFicheContact(payload));
  }
  return Promise.resolve({
    message: 'post des modifications de la fiche contact déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldPostGestContactsSaveFicheContact(state) {
  const gestContacts = state.gestContacts;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestContacts.isFetchingFicheContact ||
      gestContacts.isSavingFicheContact) {
    return false;
  } else {
    return true;
  }
}
