import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  fetchMockGetGestContactsAllMotifs,
  getGestContactsAllMotifs
}                           from '../../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_GET_GEST_CONTACTS_ALL_MOTIFS  = 'REQUEST_GET_GEST_CONTACTS_ALL_MOTIFS';
export const RECEIVED_GET_GEST_CONTACTS_ALL_MOTIFS = 'RECEIVED_GET_GEST_CONTACTS_ALL_MOTIFS';
export const ERROR_GET_GEST_CONTACTS_ALL_MOTIFS    = 'ERROR_GET_GEST_CONTACTS_ALL_MOTIFS';

//  -----------------------------------------------------------------
//    GET all list motif levels 2, 3, 4
//  -----------------------------------------------------------------
const requestGetGestContactsAllMotifs = (time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_CONTACTS_ALL_MOTIFS,
    isFetchingAllMotifs : true,
    time
  };
};

const receivedGetGestContactsAllMotifs = (motifs = [], time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_CONTACTS_ALL_MOTIFS,
    isFetchingAllMotifs : false,
    motifs,
    time
  };
};

const errorGetGestContactsAllMotifs = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_CONTACTS_ALL_MOTIFS,
    isFetchingAllMotifs : false,
    data: [],
    error,
    time
  };
};

const getQueryGestContactsAllMotifs = () => dispatch => {
  dispatch(requestGetGestContactsAllMotifs());
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestContactsAllMotifs()
            .then(
              data => {
                dispatch(receivedGetGestContactsAllMotifs(data));
                return Promise.resolve({
                  message: 'Données "Motifs" de référence raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestContactsAllMotifs(err));
                return Promise.reject({
                  message: 'Données "Motifs" de référence raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestContactsAllMotifs()
            .then(
              response => {
                dispatch(receivedGetGestContactsAllMotifs(response));
                return Promise.resolve({
                  message: 'Données "Motifs" de référence raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestContactsAllMotifs(error));
                return Promise.reject({
                  message: 'Données "Motifs" de référence raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestContactsAllMotifsIfNeeded = () => (dispatch, getState) => {
  if (shouldGetGestContactsAllMotifs(getState())) {
    return dispatch(getQueryGestContactsAllMotifs());
  }
  return Promise.resolve({
    message: 'fetch des modifications des motifs de référence déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestContactsAllMotifs(state) {
  const gestContacts = state.gestContacts;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestContacts.isFetchingAllMotifs) {
    return false;
  } else {
    return true;
  }
}
