import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin
}                     from '../../utils/fetchTools';
import { appConfig }  from '../../../config';

export const sendNewMail = (mailBoxId, userLogin = null, newMailContent = null) => {
  if (!parseInt(mailBoxId, 10)) {
    return Promise.reject('error: sendNewMail need a valid mailBoxId');
  }
  if (!userLogin) {
    return Promise.reject('error: sendNewMail need a valid user login');
  }
  if (!newMailContent) {
    return Promise.reject('error: sendNewMail need a valid new mail content');
  }

  // data to post (basic props)
  const numberFiles = newMailContent.attachments ? newMailContent.attachments.length : 0;
  let body = {
    mailBoxId,
    userLogin,
    nbFiles: numberFiles
  };
  // data to post (add attachments files)
  newMailContent.attachments.forEach(
    (file, idx) => {
      body[`file${idx + 1}`] = file;
    }
  );

  const api = appConfig.sendNewMail.POST.API;
  const url = `${getLocationOrigin()}/${api}`;
  const options = {
    ...defaultOptions,
    method: 'POST',
    body
  };

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => Promise.reject(error));
};
