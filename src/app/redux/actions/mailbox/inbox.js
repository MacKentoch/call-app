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
  return {
    type:       RECEIVED_INBOX_CONTENT,
    isFetching: false,
    boiteMailId,
    data,
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
    if (appConfig.DEV_MODE) {
      // DEV ONLY
      fetchMockListMails()
        .then(
          data => dispatch(receivedInboxContent(boiteMailId, data))
        );
    } else {
      getInboxContent(boiteMailId)
        .then(
          data => dispatch(receivedInboxContent(boiteMailId, data)))
        .catch(
          err => {
            dispatch(errorInboxContent(boiteMailId));
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
export const fetchInboxContentIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchInboxContent(getState())) {
    return dispatch(fetchInboxContent());
  }
  return null;
};
function shouldFetchInboxContent(state) {
  const inboxContent = state.inboxContent;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (inboxContent.isFetching) {
    return false;
  } else {
    return true;
  }
}
