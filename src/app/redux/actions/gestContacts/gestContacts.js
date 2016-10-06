import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  getGestContactsNewContact,
  getGestContactsExistingContact,
  fetchMockGetGestContacts
}                     from '../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_GET_GEST_CONTACTS   = 'REQUEST_GET_GEST_CONTACTS';
export const RECEIVED_GET_GEST_CONTACTS  = 'RECEIVED_GET_GEST_CONTACTS';
export const ERROR_GET_GEST_CONTACTS     = 'ERROR_GET_GEST_CONTACTS';

const requestGetGestContacts = (benefId = 0, contactId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_CONTACTS,
    isFetching : true,
    contactId,
    benefId,
    time
  };
};
const receivedGetGestContacts = (gestBenef, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_CONTACTS,
    isFetching : false,
    gestBenef,
    time
  };
};
const errorGetGestContacts = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_CONTACTS,
    isFetching : false,
    data: [],
    error,
    time
  };
};

const getQueryGestContacts = (benefId, contactId) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestContacts('getQueryGestContacts API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données bénéficiaire (edition de contact) en erreur (identifiant non valide)',
      level: 'error',
      showNotification: true
    });
  }

  if (!contactId) {
    dispatch(errorGetGestContacts('getQueryGestContacts API error: contactId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données bénéficiaire (edition de contact) en erreur (identifiant non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestContacts(benefId, contactId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestContacts(benefId, contactId)
            .then(
              data => {
                dispatch(receivedGetGestContacts(data));
                return Promise.resolve({
                  message: 'Données bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestContacts(err));
                return Promise.reject({
                  message: 'Données bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestContacts(benefId, contactId)
            .then(
              response => {
                dispatch(receivedGetGestContacts(response));
                return Promise.resolve({
                  message: 'Données bénéficiaire raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestContacts(error));
                return Promise.reject({
                  message: 'Données bénéficiaire non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestContactsIfNeeded = (benefId, contactId) => (dispatch, getState) => {
  if (shouldGetGestContacts(getState())) {
    return dispatch(getQueryGestContacts(benefId, contactId));
  }
  return Promise.resolve({
    message: '',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestContacts(state) {
  const gestContacts = state.gestContacts;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestContacts.isFetching) {
    return false;
  } else {
    return true;
  }
}
