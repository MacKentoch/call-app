import {
  defaultOptions,
  postMethod,
  jsonHeader,
  checkStatus,
  parseJSON,
  getLocationOrigin
}                     from '../../utils/fetchTools';
import { appConfig }  from '../../../config';

// get all gestContact data when creating new contact
export const getGestContactsNewContact = benefId => {
  if (!benefId) {
    return Promise.reject({error: 'getGestContactsNewContact API: benefId is not valid'});
  }
  const api = appConfig.gestContacts.getData.API;
  const url = `${getLocationOrigin()}/${api}/${benefId}`;
  const options = {...defaultOptions};

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};

// get all gestContact data when updating existing contact
export const getGestContactsExistingContact = (benefId, contactId) => {
  if (!benefId) {
    return Promise.reject({error: 'getGestContactsExistingContact API: benefId is not valid'});
  }
  if (!(parseInt(contactId, 10) > 0)) {
    return Promise.reject({error: 'getGestContactsExistingContact API: contactId is not valid'});
  }
  const api = appConfig.gestContacts.getData.API;
  const url = `${getLocationOrigin()}/${api}/${benefId}/${contactId}`;
  const options = {...defaultOptions};

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};

export const getGestContactsFicheContactInit = contactId => {
  if (!contactId) {
    return Promise.reject({error: 'getGestContactsFicheContact API: contactId is not valid'});
  }
  const api = appConfig.gestFicheContact.getData.API;
  const url = `${getLocationOrigin()}/${api}/${contactId}`;
  const options = {...defaultOptions};

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};

export const getGestContactsFicheContactDomaineStatutfFromNumDossier = (benefId = 0, numDossier = null) => {
  if (!benefId) {
    return Promise.reject({error: 'getGestContactsFicheContactDomaineStatutfFromNumDossier API: benefId is not valid'});
  }
  if (!numDossier) {
    return Promise.reject({error: 'getGestContactsFicheContactDomaineStatutfFromNumDossier API: numDossier is not valid'});
  }
  const api = appConfig.gestFicheContactBenefInfoFromNumDossier.getData.API;
  const url = `${getLocationOrigin()}/${api}/${numDossier}`;
  const options = {...defaultOptions};

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};


/*
    POST fiche contact
 */
export const postGestContactsSaveFicheContact = payload => {
  if (!payload) {
    return Promise.reject({error: 'postGestContactsSaveFicheContact API: payload is not valid '});
  }

  const api = appConfig.gestFicheContact.postFicheContact.API;
  const url = `${getLocationOrigin()}/${api}/${payload.id}`;
  const body = { ...payload };

  const options = {
    ...defaultOptions,
    ...postMethod,
    ...jsonHeader,
    ...body
  };

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};

/*
    POST fiche contact
 */
export const postGestContactsSaveFicheActiviteNewComment = (activiteId = 0, comment = '') => {
  if (!(parseInt(activiteId, 10) > 0)) {
    return Promise.reject({error: 'postGestContactsSaveFicheActiviteNewComment API: activiteId is not valid '});
  }

  const api = appConfig.gestFicheContact.postFicheActiviteNewComment.API;
  const url = `${getLocationOrigin()}/${api}/${activiteId}/${comment}`;

  const options = {
    ...defaultOptions,
    ...postMethod,
    ...jsonHeader
  };

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};
