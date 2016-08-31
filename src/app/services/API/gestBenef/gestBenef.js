import {
  defaultOptions,
  postMethod,
  jsonHeader,
  checkStatus,
  parseJSON,
  getLocationOrigin
}                     from '../../utils/fetchTools';
import { appConfig }  from '../../../config';


// get "all benef data" related to benefId (identite + contact + dossiers)
export const getGestBenef = benefId => {
  const api = appConfig.gestBenef.getData.API;
  const url = `${getLocationOrigin()}/${api}/${benefId}`;
  const options = {...defaultOptions};

  if (!benefId) {
    return Promise.reject({error: 'getGestBenef API: benefId is not valid'});
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};


// get "benef identite only" related to benefId
export const getGestBenefIdentite = benefId => {
  const api = appConfig.gestBenef.getIdentite.API;
  const url = `${getLocationOrigin()}/${api}/${benefId}`;
  const options = {...defaultOptions};

  if (!benefId) {
    return Promise.reject({error: 'getGestBenefIdentite API: benefId is not valid'});
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};

export const postGestBenefIdentite = benefIdentite => {
  if (!benefIdentite) {
    return Promise.reject({error: 'postGestBenefIdentite API: benefIdentite is not valid '});
  }

  if (!benefIdentite.id) {
    return Promise.reject({error: 'postGestBenefIdentite API: benefIdentite should have an id property'});
  }

  const api = appConfig.gestBenef.postIdentite.API;
  const url = `${getLocationOrigin()}/${api}/${benefIdentite.id}`;
  const body = { ...benefIdentite };

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

// get "benef contact data only" related to benefId
export const getGestBenefContactData = benefId => {
  const api = appConfig.gestBenef.getContactData.API;
  const url = `${getLocationOrigin()}/${api}/${benefId}`;
  const options = {...defaultOptions};

  if (!benefId) {
    return Promise.reject({error: 'getGestBenefContactData API: benefId is not valid'});
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};


// get "benef Dossiers only" related to benefId
export const getGestBenefDossiers = benefId => {
  const api = appConfig.gestBenef.getDossiers.API;
  const url = `${getLocationOrigin()}/${api}/${benefId}`;
  const options = {...defaultOptions};

  if (!benefId) {
    return Promise.reject({error: 'getGestBenefDossiers API: benefId is not valid'});
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};
