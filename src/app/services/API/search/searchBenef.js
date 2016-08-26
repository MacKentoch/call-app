import {
  defaultOptions,
  postMethod,
  checkStatus,
  parseJSON,
  getLocationOrigin
}                     from '../../utils/fetchTools';
import { appConfig }  from '../../../config';

const defaultSearchPayload = {
  // identifiant
  identActive: false, // means: to add to where clause if true
  identValue: '',
  identFilter: '', // START_WITH or EQUALS or END_WITH (see appConfig)
  // nom
  nomActive: false, // means: to add to where clause if true
  nomValue: '',
  nomFilter: '', // START_WITH or EQUALS or END_WITH (see appConfig)
  // prenom
  prenomActive: false, // means: to add to where clause if true
  prenomValue: '',
  prenomFilter: '', // START_WITH or EQUALS or END_WITH (see appConfig)
  // numss
  numssActive: false, // means: to add to where clause if true
  numssValue: '',
  numssFilter: '' // START_WITH or EQUALS or END_WITH (see appConfig)
};

export const searchBenef = (payload) => {
  // payload object should contains all defaultSearchPayload object properties
  if (!isValidSearchPayload(payload)) {
    return Promise.reject({'error': 'search requires a valid payload (tips: check missing payload props)'});
  }
  // uses FormData since target is navigator > IE10
  const body = new FormData();
  body.append('searchPayload', payload);

  const api = appConfig.searchBenef.POST.API;
  const url = `${getLocationOrigin()}/${api}`;
  const options = {
    ...defaultOptions,
    ...postMethod,
    body
  };

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};

export function isValidSearchPayload(payload) {
  // get needed keys from default payload as reference
  const arrayNeededKeys = Object.keys(defaultSearchPayload);
  // then return true if payload object contains all reference payload object properties:
  if (payload) {
    return Object
      .keys(payload)
      .map(
        key => {
          // get payload key index in reference payload
          const keyIndex = arrayNeededKeys.findIndex(
            keyRef => keyRef === key
          );
          return keyIndex > -1 ? true : false;
        }
      )
      .reduce(
        (res, next) => {
          return res & next;
        },
        true
      );
  }
  return false;
};
