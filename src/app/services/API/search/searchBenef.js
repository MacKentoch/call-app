import {
  defaultOptions,
  postMethod,
  checkStatus,
  parseJSON,
  getLocationOrigin
}                     from '../../utils/fetchTools';
import { appConfig }  from '../../../config';

const defaultSearchParam = {
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

export const searchBenef = (searchParam = defaultSearchParam) => {
  // uses FormData since target is navigator > IE10
  const body = new FormData();
  body.append('search', searchParam);

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
