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
    searchPayload: payload,
    time
  };
};

const receivedSearchBenef = (data, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_SEARCH_BENEF,
    isFetching : false,
    searchResult: Array.isArray(data) ? data : [],
    time
  };
};

const errorSearchBenef = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_SEARCH_BENEF,
    isFetching : false,
    searchResult: [],
    error,
    time
  };
};

const postSearchBenef = (payload) => dispatch => {
  dispatch(requestSearchBenef());
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockSearchBenef(payload)
            .then(
              data => dispatch(receivedSearchBenef(data))
            )
            .catch(
              err => dispatch(errorSearchBenef(err))
            );
  } else {
    return searchBenef(payload)
            .then(
              response => dispatch(receivedSearchBenef(response))
            )
            .catch(
              error => dispatch(errorSearchBenef(error))
            );
  }
};

export const postSearchIfNeeded = (payload) => (dispatch, getState) => {
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
