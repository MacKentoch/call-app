import {
  REQUEST_INBOX_CONTENT,
  RECEIVED_INBOX_CONTENT,
  ERROR_INBOX_CONTENT
}                                 from '../../actions/stats/fichesParCanal';

const initialState = {
  isFetching:   false,
  boiteMailId:  0,
  data:         [],
  time:         ''
};

const inboxContent = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_INBOX_CONTENT:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  case RECEIVED_INBOX_CONTENT:
    return {
      ...state,
      isFetching:   action.isFetching,
      boiteMailId:  action.boiteMailId,
      data:         [...action.data],
      time:         action.time
    };

  case ERROR_INBOX_CONTENT:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  default:
    return state;
  }
};

export default inboxContent;
