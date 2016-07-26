import {
  REQUEST_SENTBOX_CONTENT,
  RECEIVED_SENTBOX_CONTENT,
  ERROR_SENTBOX_CONTENT
}                                 from '../../actions/mailbox/sentbox';

const initialState = {
  isFetching:   false,
  boiteMailId:  0,
  mailBoxName:  '',
  mails:        [],
  time:         ''
};

const sentboxContent = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_SENTBOX_CONTENT:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  case RECEIVED_SENTBOX_CONTENT:
    return {
      ...state,
      isFetching:   action.isFetching,
      boiteMailId:  action.boiteMailId,
      mailBoxName:  action.mailBoxName,
      mails:        [...action.mails],
      time:         action.time
    };

  case ERROR_SENTBOX_CONTENT:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  default:
    return state;
  }
};

export default sentboxContent;
