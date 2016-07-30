import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin
}                     from '../../utils/fetchTools';
import { appConfig }  from '../../../config';

export const getMailContent = (mailId = null, mailBoxId = null) => {
  if (!parseInt(mailId, 10)) {
    return Promise.reject('error: getMailcontent need a valid mailId');
  }

  if (!parseInt(mailBoxId, 10)) {
    return Promise.reject('error: getMailcontent need a valid mailBoxId');
  }

  const api = appConfig.consultMail.data.API;
  const url = `${getLocationOrigin()}/${api}`;
  const options = {...defaultOptions};

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};
