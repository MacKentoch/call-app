import {
  REQUEST_INBOX_CONTENT,
  RECEIVED_INBOX_CONTENT,
  ERROR_INBOX_CONTENT
}                                 from '../../actions/mailbox/inbox';

const initialState = {
  isFetching:   false,
  boiteMailId:  0,
  mailBoxName:  '',
  mails:        [],
  nbUnRead:     0,
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
      mailBoxName:  action.mailBoxName,
      mails:        [...action.mails],
      nbUnRead:     action.nbUnRead,
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
