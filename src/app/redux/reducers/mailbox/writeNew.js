import {
  NEW_MAIL_DESTINATAIRE_CHANGE,
  NEW_MAIL_SUBJECT_CHANGE,
  NEW_MAIL_BODY_CHANGE
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
  default:
    return state;
  }
};

export default writeNewMailContent;
