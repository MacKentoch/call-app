import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  fetchMockGetGestContactsFicheContact,
  getGestContactsFicheContactInit
}                           from '../../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

const formatDateCreation  = 'DD/MM/YYYY';
const formatDateReception = 'DD/MM/YYYY';
const formatDateCloture   = 'DD/MM/YYYY';

export const REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT    = 'REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT';
export const RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT   = 'RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT';
export const ERROR_GET_GEST_CONTACTS_FICHE_CONTACT      = 'ERROR_GET_GEST_CONTACTS_FICHE_CONTACT';

export const SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT    = 'SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT';
export const UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT  = 'UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT';

export const UPDATE_GEST_CONTACTS_DATE_CREATION         = 'UPDATE_GEST_CONTACTS_DATE_CREATION';
export const UPDATE_GEST_CONTACTS_DATE_RECEPTION        = 'UPDATE_GEST_CONTACTS_DATE_RECEPTION';
export const UPDATE_GEST_CONTACTS_STATUT_FICHE          = 'UPDATE_GEST_CONTACTS_STATUT_FICHE';
export const UPDATE_GEST_CONTACTS_DATE_CLOTURE          = 'UPDATE_GEST_CONTACTS_DATE_CLOTURE';
export const UPDATE_GEST_CONTACTS_TYPE_INDEX            = 'UPDATE_GEST_CONTACTS_TYPE_INDEX';
export const UPDATE_GEST_CONTACTS_NUM_DOSSIER_INDEX     = 'UPDATE_GEST_CONTACTS_NUM_DOSSIER_INDEX';

//  -----------------------------------------------------------------
//    update dateCreationFicheContact value
//  -----------------------------------------------------------------
export const updateDateCreationFicheContact = (dateCreation = '', time = moment().format(formatDate)) => {
  if (dateCreation) {
    const dateCreationStr = moment(dateCreation, formatDateCreation).format(formatDateCreation);
    return {
      type: UPDATE_GEST_CONTACTS_DATE_CREATION,
      dateCreationFicheContact: dateCreationStr,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateDateReceptionFicheContact value
//  -----------------------------------------------------------------
export const updateDateReceptionFicheContact = (dateReception = '', time = moment().format(formatDate)) => {
  if (dateReception) {
    const dateReceptionStr = moment(dateReception, formatDateReception).format(formatDateReception);
    return {
      type: UPDATE_GEST_CONTACTS_DATE_RECEPTION,
      dateReceptionFicheContact: dateReceptionStr,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateStatutIndexFicheContact value
//  -----------------------------------------------------------------
export const updateStatutIndexFicheContact = (statutIndex = null, time = moment().format(formatDate)) => {
  if (statutIndex) {
    return {
      type: UPDATE_GEST_CONTACTS_STATUT_FICHE,
      statutIndexFicheContact: statutIndex,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateDateClotureFicheContact value
//  -----------------------------------------------------------------
export const updateDateClotureFicheContact = (dateCloture = null, time = moment().format(formatDate)) => {
  if (dateCloture) {
    const dateClotureStr = moment(dateCloture, formatDateCloture).format(formatDateCloture);
    return {
      type: UPDATE_GEST_CONTACTS_DATE_CLOTURE,
      dateClotureFicheContact: dateClotureStr,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateTypeIndexFicheContact value
//  -----------------------------------------------------------------
export const updateTypeIndexFicheContact = (typeIndex = null, time = moment().format(formatDate)) => {
  if (typeIndex) {
    return {
      type: UPDATE_GEST_CONTACTS_TYPE_INDEX,
      typeIndexFicheContact: typeIndex,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateNumDossierIndexSelected value
//  -----------------------------------------------------------------
export const updateNumDossierIndexSelected = (numDossierIndex = null, time = moment().format(formatDate)) => {
  if (parseInt(numDossierIndex, 10) >= 0) {
    return {
      type: UPDATE_GEST_CONTACTS_NUM_DOSSIER_INDEX,
      numDossierIndexSelected: numDossierIndex,
      time
    };
  }
  return false;
};

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

const receivedGetGestContactsFicheContact = (ficheContact, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT,
    isFetchingFicheContact : false,
    ficheContact,
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

const getQueryGestContactsFicheContact = (contactId) => dispatch => {
  if (!contactId) {
    dispatch(errorGetGestContactsFicheContact('getGestContactsFicheContact API error: contactId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Contact" de la fiche de contact en erreur (identifiant de contact non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestContactsFicheContact(contactId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestContactsFicheContact(contactId) // mock is the as all gestBenef object
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
    return getGestContactsFicheContactInit(contactId)
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

export const getGestContactsFicheContactIfNeeded = (contactId) => (dispatch, getState) => {
  if (shouldGetGestContactsFicheContact(getState())) {
    return dispatch(getQueryGestContactsFicheContact(contactId));
  }
  return Promise.resolve({
    message: 'fetch des modifications des informations "Contact" de la fiche de contact déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestContactsFicheContact(state) {
  const gestContact = state.gestContacts;
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
export const setIsCollapsedContactsFicheContact = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT,
    isCollapsedFicheContact: true,
    time
  };
};
export const unsetIsCollapsedContactsFicheContact = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT,
    isCollapsedFicheContact: false,
    time
  };
};
