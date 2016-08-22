import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  fetchMockListMails,
  getSentboxContent
}                     from '../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_SENTBOX_CONTENT   = 'REQUEST_SENTBOX_CONTENT';
export const RECEIVED_SENTBOX_CONTENT  = 'RECEIVED_SENTBOX_CONTENT';
export const ERROR_SENTBOX_CONTENT     = 'ERROR_SENTBOX_CONTENT';


const requestSentboxContent = (boiteMailId = 0, time = moment().format(formatDate)) => {
  return {
    type:       REQUEST_SENTBOX_CONTENT,
    isFetching: true,
    boiteMailId,
    time
  };
};
const receivedSentboxContent = (boiteMailId = 0, data, time = moment().format(formatDate)) => {
  const mails = addCheckStatusProperty(data.mails) || [];
  const mailBoxName = data.mailboxName + boiteMailId || '';
  return {
    type:       RECEIVED_SENTBOX_CONTENT,
    isFetching: false,
    boiteMailId,
    mailBoxName,
    mails,
    time
  };
};
const errorSentboxContent = (boiteMailId = 0, time = moment().format(formatDate)) => {
  return {
    type:       ERROR_SENTBOX_CONTENT,
    isFetching: false,
    boiteMailId,
    time
  };
};
const fetchSentboxContent = (boiteMailId) => dispatch => {
  if (parseInt(boiteMailId, 10)) {
    dispatch(requestSentboxContent(boiteMailId));
    const mailId = parseInt(boiteMailId, 10);
    if (appConfig.DEV_MODE) {
      // DEV ONLY
      fetchMockListMails()
        .then(
          data => dispatch(receivedSentboxContent(mailId, data))
        );
    } else {
      getSentboxContent(mailId)
        .then(
          data => dispatch(receivedSentboxContent(mailId, data)))
        .catch(
          err => {
            dispatch(errorSentboxContent(mailId));
            if (appConfig.DEBUG_ENABLED) {
              /* eslint-disable no-console */
              console.warn('fetchSentboxContent error: ', err);
              /* eslint-enable no-console */
            }
          }
        );
    }
  } else {
    /* eslint-disable no-throw-literal */
    throw 'Error: fetchSentboxContent requires a valid boiteMailId';
    /* eslint-enable no-throw-literal */
  }
};
export const fetchSentboxContentIfNeeded = (boiteMailId) => (dispatch, getState) => {
  if (shouldFetchSentboxContent(getState(), boiteMailId)) {
    return dispatch(fetchSentboxContent(boiteMailId));
  }
  return null;
};
/* eslint-disable no-unused-vars */
function shouldFetchSentboxContent(state, mailboxId) {
  const sentboxContent = state.sentboxContent;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (sentboxContent.isFetching) {
    return false;
  } else {
    return true;
  }
}
/* eslint-enable no-unused-vars */

function addCheckStatusProperty(mails) {
  if (Array.isArray(mails)) {
    return mails.map(
      mail => {
        return {...mail,  selected: false};
      }
    );
  }
  return mails;
}
