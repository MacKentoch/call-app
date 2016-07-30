import {
  REQUEST_MAIL_CONTENT,
  RECEIVED_MAIL_CONTENT,
  ERROR_MAIL_CONTENT
}                                 from '../../actions/mailbox/consult';

const initialState = {
  isFetching:   false,
  mailId:       0,
  boiteMailId:  0,
  mail:         {},
  time:         ''
};

const mailContent = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_MAIL_CONTENT:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };
  case RECEIVED_MAIL_CONTENT:
    return {
      ...state,
      isFetching:   action.isFetching,
      boiteMailId:  action.boiteMailId,
      mailBoxName:  action.mailBoxName,
      mail:         {...action.mail},
      nbUnRead:     action.nbUnRead,
      time:         action.time
    };
  case ERROR_MAIL_CONTENT:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };
  default:
    return state;
  }
};

export default mailContent;
