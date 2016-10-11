import {
  defaultOptions,
  // postMethod,
  // jsonHeader,
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
    return Promise.reject({error: 'getGestContactsFicheContact API: benefId is not valid'});
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
