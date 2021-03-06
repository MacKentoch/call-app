import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  postGestContactsSaveFicheActiviteNewComment,
  fetchMockPostGestContactsFicheActiviteNewComment
}                           from '../../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE   = 'SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE';
export const UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE = 'UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE';

export const REQUEST_SAVE_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT  = 'REQUEST_SAVE_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT';
export const RECEIVED_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT  = 'RECEIVED_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT';
export const ERROR_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT     = 'ERROR_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT';

export const UPDATE_GEST_CONTACTS_FICHE_ACTIVITE_CANAL  = 'UPDATE_GEST_CONTACTS_FICHE_ACTIVITE_CANAL';
export const UPDATE_GEST_CONTACTS_FICHE_ACTIVITE_STATUT = 'UPDATE_GEST_CONTACTS_FICHE_ACTIVITE_STATUT';


//  -----------------------------------------------------------------
//    update statut fiche activite
//  -----------------------------------------------------------------
export const onGestContactsFicheActiviteStatutChange = (activiteId = 0, statutId = '', time = moment().format(formatDate)) => {
  return function (dispatch, getState) {
    if (!(parseInt(activiteId, 10) > 0)) {
      return false;
    }
    if (!(parseInt(statutId, 10) >= 0)) {
      return false;
    }

    const previousActivites = [...getState().gestContacts.activites];
    const newActivites = previousActivites
                          .map(
                            (activite) => {
                              if (activite.activiteId === activiteId) {
                                return {
                                  ...activite,
                                  statutIndex: statutId
                                };
                              } else {
                                return {...activite};
                              }
                            }
                          );

    dispatch({
      type : UPDATE_GEST_CONTACTS_FICHE_ACTIVITE_STATUT,
      time,
      activites: [...newActivites]
    });

    return true;
  };
};

//  -----------------------------------------------------------------
//    update canal fiche activite
//  -----------------------------------------------------------------
export const onGestContactsFicheActiviteCanalChange = (activiteId = 0, canalId = '', time = moment().format(formatDate)) => {
  return function (dispatch, getState) {
    if (!(parseInt(activiteId, 10) > 0)) {
      return false;
    }
    if (!(parseInt(canalId, 10) >= 0)) {
      return false;
    }

    const previousActivites = [...getState().gestContacts.activites];
    const newActivites = previousActivites
                          .map(
                            (activite) => {
                              if (activite.activiteId === activiteId) {
                                return {
                                  ...activite,
                                  canalIndexFicheActivite: canalId
                                };
                              } else {
                                return {...activite};
                              }
                            }
                          );

    dispatch({
      type : UPDATE_GEST_CONTACTS_FICHE_ACTIVITE_CANAL,
      time,
      activites: [...newActivites]
    });

    return true;
  };
};

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
const requestSaveGestContactsFicheActiviteNewComment = (activiteId = 0, comment = '', time = moment().format(formatDate)) => {
  return {
    type: REQUEST_SAVE_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT,
    isSavingFicheNewActiviteNewComment: true,
    activiteId,
    comment,
    time
  };
};
const receivedPostGestContactsFicheActiviteNewComment = (activites = [], time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT,
    isSavingFicheNewActiviteNewComment: true,
    activites,
    time
  };
};
const errorPostGestContactsFicheActiviteNewComment = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT,
    isSavingFicheNewActiviteNewComment: true,
    error,
    time
  };
};

const postQueryGestContactsFicheActiviteNewComment = (activiteId, comment) => (dispatch, getState) => {
  if (!(parseInt(activiteId, 10) > 0)) {
    dispatch(errorPostGestContactsFicheActiviteNewComment('postQueryGestContactsFicheActiviteNewComment API error: activiteId is not defined or not valid'));
    return Promise.reject({
      message: 'Enregistrement du nouveau commentaire de fiche d\'activité en erreur (activiteId non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestSaveGestContactsFicheActiviteNewComment(activiteId, comment));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockPostGestContactsFicheActiviteNewComment(activiteId, comment)
            .then(
              data => {
                if (!data) {
                  dispatch(errorPostGestContactsFicheActiviteNewComment({'error': 'post fiche activite new comment unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Enregistrement du nouveau commentaire de fiche d\'activité en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                const newComment = {...data.commentSaved};
                // update activites array
                const previousActivites = [...getState().gestContacts.activites];
                const previousActivite = {...previousActivites.find(activ => activ.activiteId === activiteId)};

                const newActiviteListCommentaire = previousActivite
                                        .listCommentaire
                                        .concat(newComment);

                const newActivites = previousActivites
                                      .map(
                                        (activite) => {
                                          if (activite.activiteId === activiteId) {
                                            return {
                                              ...activite,
                                              listCommentaire: [...newActiviteListCommentaire]
                                            };
                                          } else {
                                            return activite;
                                          }
                                        }
                                      );

                dispatch(receivedPostGestContactsFicheActiviteNewComment(newActivites));
                return Promise.resolve({
                  message: 'Enregistrement du nouveau commentaire de fiche d\'activité terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorPostGestContactsFicheActiviteNewComment(err));
                return Promise.reject({
                  message: 'Enregistrement du nouveau commentaire de fiche d\'activité en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return postGestContactsSaveFicheActiviteNewComment(activiteId, comment)
            .then(
              response => {
                if (!response) {
                  dispatch(errorPostGestContactsFicheActiviteNewComment({'error': 'post benef identite unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Enregistrement du nouveau commentaire de fiche d\'activité en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                const newComment = {...response.commentSaved};
                // update activites array
                const previousActivites = [...getState().gestContacts.activites];
                const previousActivite = {...previousActivites.find(activ => activ.activiteId === activiteId)};

                const newActiviteListCommentaire = previousActivite
                                        .listCommentaire
                                        .concat(newComment);

                const newActivites = previousActivites
                                      .map(
                                        (activite) => {
                                          if (activite.activiteId === activiteId) {
                                            return {
                                              ...activite,
                                              listCommentaire: [...newActiviteListCommentaire]
                                            };
                                          } else {
                                            return activite;
                                          }
                                        }
                                      );

                dispatch(receivedPostGestContactsFicheActiviteNewComment(newActivites));
                return Promise.resolve({
                  message: 'Enregistrement du nouveau commentaire de fiche d\'activité en erreur (erreur serveur)',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorPostGestContactsFicheActiviteNewComment(error));
                return Promise.reject({
                  message: 'Enregistrement du nouveau commentaire de fiche d\'activité en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const saveNewCommentFicheActivite = (activiteId, comment) => (dispatch, getState) => {
  if (shouldPostGestContactsFicheActiviteNewComment(getState())) {
    return dispatch(postQueryGestContactsFicheActiviteNewComment(activiteId, comment));
  }
  return Promise.resolve({
    message: 'post du nouveau commentaire de fiche d\'activité déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldPostGestContactsFicheActiviteNewComment(state) {
  const gestContacts = state.gestContacts;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestContacts.isFetchingFicheContact ||
      gestContacts.isSavingFicheNewActiviteNewComment) {
    return false;
  } else {
    return true;
  }
}
