import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  fetchMockListMails,
  getInboxContent
}                     from '../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_INBOX_CONTENT   = 'REQUEST_INBOX_CONTENT';
export const RECEIVED_INBOX_CONTENT  = 'RECEIVED_INBOX_CONTENT';
export const ERROR_INBOX_CONTENT     = 'ERROR_INBOX_CONTENT';


const requestInboxContent = (boiteMailId = 0, time = moment().format(formatDate)) => {
  return {
    type:       REQUEST_INBOX_CONTENT,
    isFetching: true,
    boiteMailId,
    time
  };
};
const receivedInboxContent = (boiteMailId = 0, data, time = moment().format(formatDate)) => {
  const mails = addCheckStatusProperty(data.mails) || [];
  const mailBoxName = data.mailboxName || '';
  return {
    type:       RECEIVED_INBOX_CONTENT,
    isFetching: false,
    boiteMailId,
    mailBoxName,
    mails,
    time
  };
};
const errorInboxContent = (boiteMailId = 0, time = moment().format(formatDate)) => {
  return {
    type:       ERROR_INBOX_CONTENT,
    isFetching: false,
    boiteMailId,
    time
  };
};
const fetchInboxContent = (boiteMailId) => dispatch => {
  if (parseInt(boiteMailId, 10)) {
    dispatch(requestInboxContent(boiteMailId));
    const mailId = parseInt(boiteMailId, 10);
    if (appConfig.DEV_MODE) {
      // DEV ONLY
      fetchMockListMails()
        .then(
          data => dispatch(receivedInboxContent(mailId, data))
        );
    } else {
      getInboxContent(mailId)
        .then(
          data => dispatch(receivedInboxContent(mailId, data)))
        .catch(
          err => {
            dispatch(errorInboxContent(mailId));
            if (appConfig.DEBUG_ENABLED) {
              /* eslint-disable no-console */
              console.warn('fetchListMails error: ', err);
              /* eslint-enable no-console */
            }
          }
        );
    }
  } else {
    /* eslint-disable no-throw-literal */
    throw 'Error: fetchListMails requires a valid boiteMailId';
    /* eslint-enable no-throw-literal */
  }
};
export const fetchInboxContentIfNeeded = (boiteMailId) => (dispatch, getState) => {
  if (shouldFetchInboxContent(getState(), boiteMailId)) {
    return dispatch(fetchInboxContent(boiteMailId));
  }
  return null;
};
/* eslint-disable no-unused-vars */
function shouldFetchInboxContent(state, mailboxId) {
  const inboxContent = state.inboxContent;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (inboxContent.isFetching) {
    return false;
  } else {
    return true;
  }
  //
  // } else if (inboxContent.mailboxId !== mailboxId) {
  //   return true;
  // } else {
  //   return false;
  // }
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
