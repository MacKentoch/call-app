import {
  NEW_MAIL_DESTINATAIRE_CHANGE,
  NEW_MAIL_SUBJECT_CHANGE,
  NEW_MAIL_BODY_CHANGE,
  CANCEL_NEW_MAIL
} from '../../actions/mailbox/writeNew';

const initialMailModel = {
  subject: '',
  from: '',
  to: [],
  body: '',
  hasAttachments: false,
  attachments: []
};

const initialState = {
  isFetching:   false,
  mailId:       0,
  boiteMailId:  0,
  // mail content:
  subject: initialMailModel.subject,
  from: initialMailModel.from,
  to: [...initialMailModel.to],
  body: initialMailModel.body,
  hasAttachments: initialMailModel.hasAttachments,
  attachments: [...initialMailModel.attachments],
  //
  time:         ''
};

const writeNewMailContent = (state = initialState, action) => {
  switch (action.type) {
  case NEW_MAIL_DESTINATAIRE_CHANGE:
    return {
      ...state,
      isFetching: false,
      time:       action.time,
      to:         [...action.destinataires]
    };
  case NEW_MAIL_SUBJECT_CHANGE:
    return {
      ...state,
      isFetching: false,
      time:       action.time,
      subject:    action.subject
    };
  case NEW_MAIL_BODY_CHANGE:
    return {
      ...state,
      isFetching: false,
      time:       action.time,
      body:       action.body
    };
  case CANCEL_NEW_MAIL:
    return {
      ...state,
      isFetching: false,
      time:       action.time,
      // reset mail content:
      subject: initialMailModel.subject,
      from: initialMailModel.from,
      to: [...initialMailModel.to],
      body: initialMailModel.body,
      hasAttachments: initialMailModel.hasAttachments,
      attachments: [...initialMailModel.attachments]
    };
  default:
    return state;
  }
};

export default writeNewMailContent;
