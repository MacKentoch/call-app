import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  searchBenef,
  fetchMockSearchBenef
}                     from '../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const REQUEST_SEARCH_BENEF = 'REQUEST_SEARCH_BENEF';
export const RECEIVED_SEARCH_BENEF = 'RECEIVED_SEARCH_BENEF';
export const ERROR_SEARCH_BENEF = 'ERROR_SEARCH_BENEF';

const requestSearchBenef = (payload = {}, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_SEARCH_BENEF,
    isFetching : true,
    searchParam: payload,
    time
  };
};

const receivedSearchBenef = (data, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_SEARCH_BENEF,
    isFetching : false,
    searchresult: Array.isArray(data) ? data : [],
    time
  };
};

const errorSearchBenef = (time = moment().format(formatDate)) => {
  return {
    type: ERROR_SEARCH_BENEF,
    isFetching : false,
    time
  };
};

const postSearchBenef = (payload) => dispatch => {
  dispatch(requestSearchBenef());
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockUserInfosData()
      .then(
        data => dispatch(receivedUserInfosData(data))
      );
  } else {
    const url = `${getLocationOrigin()}/${appConfig.userInfos.data.API}`;
    const options = {...defaultOptions};

    return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(
      data => dispatch(receivedUserInfosData(data)))
    .catch(
      err => {
        dispatch(errorUserInfosData());
        if (appConfig.DEBUG_ENABLED) {
          /* eslint-disable no-console */
          console.warn('fetchUserInfosData error: ', err);
          /* eslint-enable no-console */
        }
      }
    );
  }
};

const postSearchIfNeeded = (payload) => (dispatch, getState) => {
  if (shouldPostSearchBenef(getState())) {
    return dispatch(postSearchBenef(payload));
  }
  return Promise.resolve();
};

function shouldPostSearchBenef(state) {
  const search = state.search;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (search.isFetching) {
    return false;
  } else {
    return true;
  }
}
