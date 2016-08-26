import {
  REQUEST_SEARCH_BENEF,
  RECEIVED_SEARCH_BENEF,
  ERROR_SEARCH_BENEF
}                                     from '../../actions/search/search';

const initialState = {
  isFetching: false,
  searchPayload: {},
  searchResult: [],
  error: null,
  time: ''
};

const search = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_SEARCH_BENEF:
    return {
      ...state,
      isFetching:     action.isFetching,
      searchPayload:  {...action.searchPayload},
      searchResult:   [],
      error:          null,
      time:           action.time
    };

  case RECEIVED_SEARCH_BENEF:
    return {
      ...state,
      isFetching:   action.isFetching,
      searchResult: [...action.searchResult],
      time:         action.time
    };

  case ERROR_SEARCH_BENEF:
    return {
      ...state,
      isFetching:   action.isFetching,
      searchResult: [...action.searchResult],
      error:        {...action.error},
      time:         action.time
    };

  default:
    return state;
  }
};


export default search;
