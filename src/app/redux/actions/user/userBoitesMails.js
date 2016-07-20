import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  fetchMockUserBoitesMailsData
}                     from '../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_USER_BOITES_MAILS_DATA        = 'REQUEST_USER_BOITES_MAILS_DATA';
export const RECEIVED_USER_USER_BOITES_MAILS_DATA  = 'RECEIVED_USER_USER_BOITES_MAILS_DATA';
export const ERROR_USER_USER_BOITES_MAILS_DATA     = 'ERROR_USER_USER_BOITES_MAILS_DATA';


const requestUserBoitesMailsData = (time = moment().format(formatDate)) => {
  return {
    type:       REQUEST_USER_BOITES_MAILS_DATA,
    isFetching: true,
    time
  };
};
const receivedUserBoitesMailsData = (data, time = moment().format(formatDate)) => {
  return {
    type:       RECEIVED_USER_USER_BOITES_MAILS_DATA,
    isFetching: false,
    data,
    time
  };
};
const errorUserBoitesMailsData = (time = moment().format(formatDate)) => {
  return {
    type:       ERROR_USER_USER_BOITES_MAILS_DATA,
    isFetching: false,
    time
  };
};
const fetchUserBoitesMailsData = () => dispatch => {
  dispatch(requestUserBoitesMailsData());
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    fetchMockUserBoitesMailsData()
      .then(
        data => dispatch(receivedUserBoitesMailsData(data))
      );
  } else {
    const url = `${getLocationOrigin()}/${appConfig.userBoitesMails.data.API}`;
    const options = {...defaultOptions};

    fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(
      data => dispatch(receivedUserBoitesMailsData(data)))
    .catch(
      err => {
        dispatch(errorUserBoitesMailsData());
        if (appConfig.DEBUG_ENABLED) {
          /* eslint-disable no-console */
          console.warn('fetchUserBoitesMailsData error: ', err);
          /* eslint-enable no-console */
        }
      }
    );
  }
};
export const fetchUserBoitesMailsDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchUserBoitesMailsData(getState())) {
    return dispatch(fetchUserBoitesMailsData());
  }
  return null;
};
function shouldFetchUserBoitesMailsData(state) {
  const userBoitesMails = state.userBoitesMails;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (userBoitesMails.isFetching) {
    return false;
  } else {
    return true;
  }
}
