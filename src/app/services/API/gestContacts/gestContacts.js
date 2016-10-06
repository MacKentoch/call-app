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

  if (!contactId) {
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
//
//
// // get "benef identite only" related to benefId
// export const getGestBenefIdentite = benefId => {
//   const api = appConfig.gestBenef.getIdentite.API;
//   const url = `${getLocationOrigin()}/${api}/${benefId}`;
//   const options = {...defaultOptions};
//
//   if (!benefId) {
//     return Promise.reject({error: 'getGestBenefIdentite API: benefId is not valid'});
//   }
//
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => data)
//     .catch(error => Promise.reject(error));
// };
//
// export const postGestBenefIdentite = benefIdentite => {
//   if (!benefIdentite) {
//     return Promise.reject({error: 'postGestBenefIdentite API: benefIdentite is not valid '});
//   }
//
//   if (!benefIdentite.id) {
//     return Promise.reject({error: 'postGestBenefIdentite API: benefIdentite should have an id property'});
//   }
//
//   const api = appConfig.gestBenef.postIdentite.API;
//   const url = `${getLocationOrigin()}/${api}/${benefIdentite.id}`;
//   const body = { ...benefIdentite };
//
//   const options = {
//     ...defaultOptions,
//     ...postMethod,
//     ...jsonHeader,
//     ...body
//   };
//
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => data)
//     .catch(error => Promise.reject(error));
// };
//
// // get "benef contact data only" related to benefId
// export const getGestBenefContactData = benefId => {
//   const api = appConfig.gestBenef.getContactData.API;
//   const url = `${getLocationOrigin()}/${api}/${benefId}`;
//   const options = {...defaultOptions};
//
//   if (!benefId) {
//     return Promise.reject({error: 'getGestBenefContactData API: benefId is not valid'});
//   }
//
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => data)
//     .catch(error => Promise.reject(error));
// };
//
//
// export const postGestBenefContactData = benefContact => {
//   if (!benefContact) {
//     return Promise.reject({error: 'postGestBenefContactData API: benefContact is not valid '});
//   }
//
//   if (!benefContact.id) {
//     return Promise.reject({error: 'postGestBenefContactData API: benefContact should have an id property'});
//   }
//
//   const api = appConfig.gestBenef.postContactData.API;
//   const url = `${getLocationOrigin()}/${api}/${benefContact.id}`;
//   const body = { ...benefContact };
//
//   const options = {
//     ...defaultOptions,
//     ...postMethod,
//     ...jsonHeader,
//     ...body
//   };
//
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => data)
//     .catch(error => Promise.reject(error));
// };
//
// // get "benef Dossiers only" related to benefId
// export const getGestBenefDossiers = benefId => {
//   const api = appConfig.gestBenef.getDossiers.API;
//   const url = `${getLocationOrigin()}/${api}/${benefId}`;
//   const options = {...defaultOptions};
//
//   if (!benefId) {
//     return Promise.reject({error: 'getGestBenefDossiers API: benefId is not valid'});
//   }
//
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => data)
//     .catch(error => Promise.reject(error));
// };
//
// // add a new dossier to benef (identified by benefId)
// // IMPORTANT: response "should return inserted dossier" (so should have an id dossier)
// export const addGestBenefNewDossier = (benefId, payload) => {
//   if (!parseInt(benefId, 10)) {
//     return Promise.reject({error: 'addGestBenefNewDossier API: id is not valid '});
//   }
//
//   if (!payload) {
//     return Promise.reject({error: 'addGestBenefNewDossier API: payload is not valid'});
//   }
//
//   const api = appConfig.gestBenef.addNewDossier.API;
//   const url = `${getLocationOrigin()}/${api}/${benefId}`;
//   const body = { ...payload };
//
//   const options = {
//     ...defaultOptions,
//     ...postMethod,
//     ...jsonHeader,
//     ...body
//   };
//
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => data)
//     .catch(error => Promise.reject(error));
// };
//
// // UPDATE an existing dossier to benef (identified by benefId)
// // IMPORTANT: response "should return inserted dossier" (so should have an id dossier)
// export const updateGestBenefDossier = (payload = {}) => {
//   if (!payload) {
//     return Promise.reject({error: 'updateGestBenefDossier API: payload is not valid'});
//   }
//
//   if (!parseInt(payload.id, 10)) {
//     return Promise.reject({error: 'updateGestBenefDossier API: id is not valid '});
//   }
//
//   const api = appConfig.gestBenef.updateDossier.API;
//   const url = `${getLocationOrigin()}/${api}/${payload.id}`;
//   const body = { ...payload };
//
//   const options = {
//     ...defaultOptions,
//     ...postMethod,
//     ...jsonHeader,
//     ...body
//   };
//
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => data)
//     .catch(error => Promise.reject(error));
// };
//
//
// // get all "benef Contact et activites only" related to benefId (no dossier filter)
// export const getGestBenefAllContactsAndActivites = benefId => {
//   const api = appConfig.gestBenef.getContactEtActivites.API;
//   const url = `${getLocationOrigin()}/${api}/${benefId}`;
//   const options = {...defaultOptions};
//
//   if (!benefId) {
//     return Promise.reject({error: 'getGestBenefAllContactsAndActivites API: benefId is not valid'});
//   }
//
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => data)
//     .catch(error => Promise.reject(error));
// };
//
// // get "benef Contact et activites only" related to benefId + numDossier (dossier FILTERED!!)
// export const getGestBenefContactsAndActivites = (benefId, numDossier) => {
//   const api = appConfig.gestBenef.getContactEtActivites.API;
//   const url = `${getLocationOrigin()}/${api}/${benefId}/${numDossier}`;
//   const options = {...defaultOptions};
//
//   if (!benefId) {
//     return Promise.reject({error: 'getGestBenefAllContactsAndActivites API: benefId is not valid'});
//   }
//
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => data)
//     .catch(error => Promise.reject(error));
// };
