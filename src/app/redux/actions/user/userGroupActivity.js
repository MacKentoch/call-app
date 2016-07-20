import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  fetchMockUserGroupActivityData
}                     from '../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_USER_GROUP_ACTIVITY_DATA        = 'REQUEST_USER_GROUP_ACTIVITY_DATA';
export const RECEIVED_USER_USER_GROUP_ACTIVITY_DATA  = 'RECEIVED_USER_USER_GROUP_ACTIVITY_DATA';
export const ERROR_USER_USER_GROUP_ACTIVITY_DATA     = 'ERROR_USER_USER_GROUP_ACTIVITY_DATA';


const requestUserGroupActivityData = (time = moment().format(formatDate)) => {
  return {
    type:       REQUEST_USER_GROUP_ACTIVITY_DATA,
    isFetching: true,
    time
  };
};
const receivedUserGroupActivityData = (data, time = moment().format(formatDate)) => {
  return {
    type:       RECEIVED_USER_USER_GROUP_ACTIVITY_DATA,
    isFetching: false,
    data: processRatioFichesEnRetard(data),
    time
  };
};
const errorUserGroupActivityData = (time = moment().format(formatDate)) => {
  return {
    type:       ERROR_USER_USER_GROUP_ACTIVITY_DATA,
    isFetching: false,
    time
  };
};
const fetchUserGroupActivityData = () => dispatch => {
  dispatch(requestUserGroupActivityData());
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    fetchMockUserGroupActivityData()
      .then(
        data => dispatch(receivedUserGroupActivityData(data))
      );
  } else {
    const url = `${getLocationOrigin()}/${appConfig.userGroupActivity.data.API}`;
    const options = {...defaultOptions};

    fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(
      data => dispatch(receivedUserGroupActivityData(data)))
    .catch(
      err => {
        dispatch(errorUserGroupActivityData());
        if (appConfig.DEBUG_ENABLED) {
          /* eslint-disable no-console */
          console.warn('fetchUserGroupActivityData error: ', err);
          /* eslint-enable no-console */
        }
      }
    );
  }
};
export const fetchUserGroupActivityDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchUserGroupActivityData(getState())) {
    return dispatch(fetchUserGroupActivityData());
  }
  return null;
};
function shouldFetchUserGroupActivityData(state) {
  const userGroupActivity = state.userGroupActivity;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (userGroupActivity.isFetching) {
    return false;
  } else {
    return true;
  }
}

function processRatioFichesEnRetard(data) {
  if (data && Array.isArray(data)) {
    return data.map(
      group => {
        const nbFichesEncours = parseInt(group.nbFichesEnCours, 10) ? parseInt(group.nbFichesEnCours, 10) : 0;
        const nbFichesEnRetard= parseInt(group.nbFichesEnRetard, 10) ? parseInt(group.nbFichesEnRetard, 10) : 0;
        const ratio = nbFichesEncours > 0 ? nbFichesEnRetard / nbFichesEncours : 0;

        return {
          ...group,
          pourcentageFicheRetard: Math.round(ratio * 100)
        };
      }
    );
  }

  return data.map(
    group => {
      return {
        ...group,
        pourcentageFicheRetard: 0
      };
    }
  );
}
