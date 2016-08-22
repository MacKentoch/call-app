import {
  REPLY_MAIL_INIT,
  REPLY_MAIL_CANCEL,
  REPLY_MAIL_DESTINATAIRE_CHANGE,
  REPLY_MAIL_SUBJECT_CHANGE,
  REPLY_MAIL_BODY_CHANGE,
  REPLY_MAIL_UPDATE_ATTACHMENT_LIST,
  REPLY_MAIL_ADD_ATTACHMENT,
  REPLY_MAIL_REMOVE_ATTACHMENT
} from '../../actions/mailbox/reply';

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

const replyMailContent = (state = initialState, action) => {
  switch (action.type) {
  case REPLY_MAIL_INIT:
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
  case REPLY_MAIL_DESTINATAIRE_CHANGE:
    return {
      ...state,
      isFetching:   false,
      boiteMailId:  action.boiteMailId,
      time:         action.time,
      to:           [...action.destinataires]
    };
  case REPLY_MAIL_SUBJECT_CHANGE:
    return {
      ...state,
      isFetching:   false,
      boiteMailId:  action.boiteMailId,
      time:         action.time,
      subject:      action.subject
    };
  case REPLY_MAIL_BODY_CHANGE:
    return {
      ...state,
      isFetching:   false,
      boiteMailId:  action.boiteMailId,
      time:         action.time,
      body:         action.body
    };
  case REPLY_MAIL_CANCEL:
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
  case REPLY_MAIL_UPDATE_ATTACHMENT_LIST:
    return {
      ...state,
      isFetching:     false,
      boiteMailId:    action.boiteMailId,
      time:           action.time,
      hasAttachments: action.hasAttachments,
      attachments:    [...action.attachments]
    };
  case REPLY_MAIL_ADD_ATTACHMENT:
    return {
      ...state,
      isFetching:     false,
      boiteMailId:    action.boiteMailId,
      time:           action.time
    };
  case REPLY_MAIL_REMOVE_ATTACHMENT:
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

export default replyMailContent;
