import {
  NEW_MAIL_INIT,
  CANCEL_NEW_MAIL,
  NEW_MAIL_DESTINATAIRE_CHANGE,
  NEW_MAIL_SUBJECT_CHANGE,
  NEW_MAIL_BODY_CHANGE,
  NEW_MAIL_UPDATE_ATTACHMENT_LIST,
  NEW_MAIL_ADD_ATTACHMENT,
  NEW_MAIL_REMOVE_ATTACHMENT
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
  case NEW_MAIL_INIT:
    return {
      ...state,
      isFetching:   false,
      boiteMailId:  action.boiteMailId,
      time:         action.time,
      // reset mail content:
      subject:      initialMailModel.subject,
      from:         initialMailModel.from,
      to:           [...initialMailModel.to],
      body:         initialMailModel.body,
      hasAttachments: initialMailModel.hasAttachments,
      attachments:  [...initialMailModel.attachments]
    };
  case NEW_MAIL_DESTINATAIRE_CHANGE:
    return {
      ...state,
      isFetching:   false,
      boiteMailId:  action.boiteMailId,
      time:         action.time,
      to:           [...action.destinataires]
    };
  case NEW_MAIL_SUBJECT_CHANGE:
    return {
      ...state,
      isFetching:   false,
      boiteMailId:  action.boiteMailId,
      time:         action.time,
      subject:      action.subject
    };
  case NEW_MAIL_BODY_CHANGE:
    return {
      ...state,
      isFetching:   false,
      boiteMailId:  action.boiteMailId,
      time:         action.time,
      body:         action.body
    };
  case CANCEL_NEW_MAIL:
    return {
      ...state,
      isFetching:   false,
      boiteMailId:  action.boiteMailId,
      time:         action.time,
      // reset mail content:
      subject:      initialMailModel.subject,
      from:         initialMailModel.from,
      to:           [...initialMailModel.to],
      body:         initialMailModel.body,
      hasAttachments: initialMailModel.hasAttachments,
      attachments:  [...initialMailModel.attachments]
    };
  case NEW_MAIL_UPDATE_ATTACHMENT_LIST:
    return {
      ...state,
      isFetching:     false,
      boiteMailId:    action.boiteMailId,
      time:           action.time,
      hasAttachments: action.hasAttachments,
      attachments:    [...action.attachments]
    };
  case NEW_MAIL_ADD_ATTACHMENT:
    return {
      ...state,
      isFetching:     false,
      boiteMailId:    action.boiteMailId,
      time:           action.time
    };
  case NEW_MAIL_REMOVE_ATTACHMENT:
    return {
      ...state,
      isFetching:     false,
      boiteMailId:    action.boiteMailId,
      time:           action.time
    };
  default:
    return state;
  }
};

export default writeNewMailContent;
