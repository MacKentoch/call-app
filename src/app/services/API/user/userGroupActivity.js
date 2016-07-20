import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin
}                     from '../fetchTools';
import { appConfig }  from '../../../config';

export const getUserGroupActivity = () => {
  const api = appConfig.userGroupActivity.data.API;
  const url = `${getLocationOrigin()}/${api}`;
  const options = {...defaultOptions};

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};
