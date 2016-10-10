import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  fetchMockGetGestContacts
}                           from '../../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

const formatDateCreation = 'DD/MM/YYYY';
const formatDateReception = 'DD/MM/YYYY';
const formatDateCloture = 'DD/MM/YYYY';


export const REQUEST_GET_GEST_CONTACTS_CONTACT    = 'REQUEST_GET_GEST_CONTACTS_CONTACT';
export const RECEIVED_GET_GEST_CONTACTS_CONTACT   = 'RECEIVED_GET_GEST_CONTACTS_CONTACT';
export const ERROR_GET_GEST_CONTACTS_CONTACT      = 'ERROR_GET_GEST_CONTACTS_CONTACT';


export const SET_IS_COLLAPSED_CONTACTS_CONTACT    = 'SET_IS_COLLAPSED_CONTACTS_CONTACT';
export const UNSET_IS_COLLAPSED_CONTACTS_CONTACT  = 'UNSET_IS_COLLAPSED_CONTACTS_CONTACT';

//  -----------------------------------------------------------------
//    GET contacts contact
//  -----------------------------------------------------------------
const requestGetGestContactsContact = (benefId = 0, contactId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_CONTACTS_CONTACT,
    isFetchingContact : true,
    benefId,
    contactId,
    time
  };
};
const receivedGetGestContactsContact = (gestContact, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_CONTACTS_CONTACT,
    isFetchingContact : false,
    gestContact,
    time
  };
};
const errorGetGestContactsContact = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_CONTACTS_CONTACT,
    isFetchingContact : false,
    data: [],
    error,
    time
  };
};

const getQueryGestContactsContact = (benefId, contactId) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestContactsContact('getGestContactsContact API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Contact" de la fiche de contact en erreur (identifiant de bénéficaire non valide)',
      level: 'error',
      showNotification: true
    });
  }

  if (!contactId) {
    dispatch(errorGetGestContactsContact('getGestContactsContact API error: contactId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Contact" de la fiche de contact en erreur (identifiant de contact non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestContactsContact(benefId, contactId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestContacts(benefId, contactId) // mock is the as all gestBenef object
            .then(
              data => {
                dispatch(receivedGetGestContactsContact(data));
                return Promise.resolve({
                  message: 'Données "Contact" de la fiche de contact raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestContactsContact(err));
                return Promise.reject({
                  message: 'Données "Contact" de la fiche de contact non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestContactsContact(benefId, contactId)
            .then(
              response => {
                dispatch(receivedGetGestContactsContact(response));
                return Promise.resolve({
                  message: 'Données "Contact" de la fiche de contact raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestContactsContact(error));
                return Promise.reject({
                  message: 'Données "Contact" de la fiche de contact non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestContactsContactIfNeeded = benefId => (dispatch, getState) => {
  if (shouldGetGestContactsContact(getState())) {
    return dispatch(getQueryGestContactsContact(benefId));
  }
  return Promise.resolve({
    message: 'fetch des modifications des informations "Contact" de la fiche de contact déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestContactsContact(state) {
  const gestContact = state.gestContact;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestContact.isFetchingContact) {
    return false;
  } else {
    return true;
  }
}


//  -----------------------------------------------------------------
//    set / unset isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedContactsContact = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_CONTACTS_CONTACT,
    isCollapsedContact: true,
    time
  };
};
export const unsetIsCollapsedContactsContact = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_CONTACT,
    isCollapsedContact: false,
    time
  };
};
