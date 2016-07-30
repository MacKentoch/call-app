import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  fetchMockMailContent,
  getMailContent
}                     from '../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_MAIL_CONTENT   = 'REQUEST_MAIL_CONTENT';
export const RECEIVED_MAIL_CONTENT  = 'RECEIVED_MAIL_CONTENT';
export const ERROR_MAIL_CONTENT     = 'ERROR_MAIL_CONTENT';


const requestMailContent = (mailId = 0, boiteMailId = 0, time = moment().format(formatDate)) => {
  return {
    type:       REQUEST_MAIL_CONTENT,
    isFetching: true,
    mailId,
    boiteMailId,
    time
  };
};
const receivedMailContent = (mailId = 0, boiteMailId = 0, data, time = moment().format(formatDate)) => {
  const mail = data.mail || {};
  return {
    type:       RECEIVED_MAIL_CONTENT,
    isFetching: false,
    mailId,
    boiteMailId,
    mail,
    time
  };
};
const errorMailContent = (mailId = 0, boiteMailId = 0, time = moment().format(formatDate)) => {
  return {
    type:       ERROR_MAIL_CONTENT,
    isFetching: false,
    mailId,
    boiteMailId,
    time
  };
};
const fetchMailContent = (mailId, boiteMailId) => dispatch => {
  if (!parseInt(mailId, 10)) {
    dispatch(errorMailContent(mailId, boiteMailId));
    /* eslint-disable no-throw-literal */
    throw 'Error: fetchMailContent requires a valid mailId';
    /* eslint-enable no-throw-literal */
  }

  if (!parseInt(boiteMailId, 10)) {
    dispatch(errorMailContent(mailId, boiteMailId));
    /* eslint-disable no-throw-literal */
    throw 'Error: fetchMailContent requires a valid boiteMailId';
    /* eslint-enable no-throw-literal */
  }

  dispatch(requestMailContent(mailId, boiteMailId));

  const mailIdNum = parseInt(mailId, 10);
  const boiteMailIdNum = parseInt(boiteMailId, 10);

  if (appConfig.DEV_MODE) {
    // DEV ONLY
    fetchMockMailContent(mailIdNum, boiteMailIdNum)
      .then(
        data => dispatch(receivedMailContent(mailIdNum, boiteMailIdNum, data))
      );
  } else {
    getMailContent(mailId, boiteMailIdNum)
      .then(
        data => dispatch(receivedMailContent(mailIdNum, boiteMailIdNum, data)))
      .catch(
        err => {
          dispatch(errorMailContent(mailIdNum, boiteMailIdNum));
          if (appConfig.DEBUG_ENABLED) {
            /* eslint-disable no-console */
            console.warn('fetchMailContent error: ', err);
            /* eslint-enable no-console */
          }
        }
      );
  }
};
export const fetchMailContentIfNeeded = (mailId, boiteMailId) => (dispatch, getState) => {
  if (shouldFetchMailContent(getState(), mailId, boiteMailId)) {
    return dispatch(fetchMailContent(mailId, boiteMailId));
  }
  return null;
};
/* eslint-disable no-unused-vars */
function shouldFetchMailContent(state, mailId, mailboxId) {
  const mailContent = state.mailContent;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (mailContent.isFetching) {
    return false;
  } else {
    return true;
  }
}
/* eslint-enable no-unused-vars */
