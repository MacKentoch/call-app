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
export const getGestContactsAllMotifs = () => {
  const api = appConfig.listMotifs.getData.API;
  const url = `${getLocationOrigin()}/${api}`;
  const options = {...defaultOptions};

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};
