import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin
}                     from '../../utils/fetchTools';
import { appConfig }  from '../../../config';

export const getInboxContent = (mailBoxId) => {
  if (!parseInt(mailBoxId, 10)) {
    return Promise.reject('error: getInboxContent need a valid mailBoxId');
  }

  const api = appConfig.inbox.data.API;
  const url = `${getLocationOrigin()}/${api}`;
  const options = {...defaultOptions};

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};
