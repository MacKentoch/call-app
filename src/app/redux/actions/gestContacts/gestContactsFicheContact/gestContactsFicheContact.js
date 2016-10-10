import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  fetchMockGetGestContacts,
  getGestContactsExistingContact
}                           from '../../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

const formatDateCreation = 'DD/MM/YYYY';
const formatDateReception = 'DD/MM/YYYY';
const formatDateCloture = 'DD/MM/YYYY';


export const REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT    = 'REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT';
export const RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT   = 'RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT';
export const ERROR_GET_GEST_CONTACTS_FICHE_CONTACT      = 'ERROR_GET_GEST_CONTACTS_FICHE_CONTACT';

export const SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT    = 'SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT';
export const UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT  = 'UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT';

//  -----------------------------------------------------------------
//    GET contacts contact
//  -----------------------------------------------------------------
const requestGetGestContactsFicheContact = (benefId = 0, contactId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT,
    isFetchingFicheContact : true,
    benefId,
    contactId,
    time
  };
};

const receivedGetGestContactsFicheContact = (gestContact, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT,
    isFetchingFicheContact : false,
    gestContact,
    time
  };
};

const errorGetGestContactsFicheContact = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_CONTACTS_FICHE_CONTACT,
    isFetchingFicheContact : false,
    data: [],
    error,
    time
  };
};

const getQueryGestContactsFicheContact = (benefId, contactId) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestContactsFicheContact('getGestContactsFicheContact API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Contact" de la fiche de contact en erreur (identifiant de bénéficaire non valide)',
      level: 'error',
      showNotification: true
    });
  }
  if (!contactId) {
    dispatch(errorGetGestContactsFicheContact('getGestContactsFicheContact API error: contactId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Contact" de la fiche de contact en erreur (identifiant de contact non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestContactsFicheContact(benefId, contactId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestContacts(benefId, contactId) // mock is the as all gestBenef object
            .then(
              data => {
                dispatch(receivedGetGestContactsFicheContact(data));
                return Promise.resolve({
                  message: 'Données "Contact" de la fiche de contact raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestContactsFicheContact(err));
                return Promise.reject({
                  message: 'Données "Contact" de la fiche de contact non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestContactsExistingContact(benefId, contactId)
            .then(
              response => {
                dispatch(receivedGetGestContactsFicheContact(response));
                return Promise.resolve({
                  message: 'Données "Contact" de la fiche de contact raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestContactsFicheContact(error));
                return Promise.reject({
                  message: 'Données "Contact" de la fiche de contact non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestContactsFicheContactIfNeeded = (benefId, contactId) => (dispatch, getState) => {
  if (shouldGetGestContactsFicheContact(getState())) {
    return dispatch(getQueryGestContactsFicheContact(benefId, contactId));
  }
  return Promise.resolve({
    message: 'fetch des modifications des informations "Contact" de la fiche de contact déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestContactsFicheContact(state) {
  const gestContact = state.gestContact;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestContact.isFetchingFicheContact) {
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
    type: SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT,
    isCollapsedFicheContact: true,
    time
  };
};
export const unsetIsCollapsedContactsContact = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT,
    isCollapsedFicheContact: false,
    time
  };
};
