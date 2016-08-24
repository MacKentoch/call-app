import { appConfig }  from '../../../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_MAILBOX_INBOX  = 'ENTER_MAILBOX_INBOX';
export const LEAVE_MAILBOX_INBOX  = 'LEAVE_MAILBOX_INBOX';

export const ENTER_MAILBOX_SENTBOX  = 'ENTER_MAILBOX_SENTBOX';
export const LEAVE_MAILBOX_SENTBOX  = 'LEAVE_MAILBOX_SENTBOX';

export const ENTER_MAILBOX_CONSULT  = 'ENTER_MAILBOX_CONSULT';
export const LEAVE_MAILBOX_CONSULT  = 'LEAVE_MAILBOX_CONSULT';

export const ENTER_MAILBOX_WRITE_NEW  = 'ENTER_MAILBOX_WRITE_NEW';
export const LEAVE_MAILBOX_WRITE_NEW  = 'LEAVE_MAILBOX_WRITE_NEW';

export const ENTER_MAILBOX_REPLY_MAIL  = 'ENTER_MAILBOX_REPLY_MAIL';
export const LEAVE_MAILBOX_REPLY_MAIL  = 'LEAVE_MAILBOX_REPLY_MAIL';


// inbox
export const enterMailboxInbox = (mailboxId = 0, time = moment().format(formatDate)) => {
  if (!parseInt(mailboxId, 10) > 0) {
    return {};
  }
  return {
    type:         ENTER_MAILBOX_INBOX,
    currentView:  `${appConfig.views.mailbox.reception.viewName}#${mailboxId}`,
    viewDetails:  `${appConfig.views.mailbox.reception.viewName}: mailbox#${mailboxId}` || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveMailboxInbox = (mailboxId = 0, time = moment().format(formatDate)) => {
  if (!parseInt(mailboxId, 10) > 0) {
    return {};
  }
  return {
    type:         LEAVE_MAILBOX_INBOX,
    currentView:  `${appConfig.views.mailbox.reception.viewName}#${mailboxId}`,
    viewDetails:  `${appConfig.views.mailbox.reception.viewName}: mailbox#${mailboxId}` || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};

// sentbox
export const enterMailboxSentbox = (mailboxId = 0, time = moment().format(formatDate)) => {
  if (!parseInt(mailboxId, 10) > 0) {
    return {};
  }
  return {
    type:         ENTER_MAILBOX_SENTBOX,
    currentView:  `${appConfig.views.mailbox.envoi.viewName}#${mailboxId}`,
    viewDetails:  `${appConfig.views.mailbox.envoi.viewName}: mailbox#${mailboxId}` || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveMailboxSentbox = (mailboxId = 0, time = moment().format(formatDate)) => {
  if (!parseInt(mailboxId, 10) > 0) {
    return {};
  }
  return {
    type:         LEAVE_MAILBOX_SENTBOX,
    currentView:  `${appConfig.views.mailbox.envoi.viewName}#${mailboxId}`,
    viewDetails:  `${appConfig.views.mailbox.envoi.viewName}: mailbox#${mailboxId}` || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};

// consult
export const enterMailboxConsult = (mailboxId = 0, mailId = 0, time = moment().format(formatDate)) => {
  if (!parseInt(mailboxId, 10) > 0) {
    return {};
  }
  if (!parseInt(mailId, 10) > 0) {
    return {};
  }
  return {
    type:         ENTER_MAILBOX_CONSULT,
    currentView:  `${appConfig.views.mailbox.consult.viewName}#${mailboxId}`,
    viewDetails:  `${appConfig.views.mailbox.consult.viewName}: mailbox#${mailboxId}, consult mail#${mailId}` || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveMailboxConsult = (mailboxId = 0, mailId = 0, time = moment().format(formatDate)) => {
  if (!parseInt(mailboxId, 10) > 0) {
    return {};
  }
  if (!parseInt(mailId, 10) > 0) {
    return {};
  }
  return {
    type:         LEAVE_MAILBOX_CONSULT,
    currentView:  `${appConfig.views.mailbox.consult.viewName}#${mailboxId}`,
    viewDetails:  `${appConfig.views.mailbox.consult.viewName}: mailbox#${mailboxId}, consult mail#${mailId}` || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};

// write new email
export const enterMailboxWriteNew = (mailboxId = 0, time = moment().format(formatDate)) => {
  if (!parseInt(mailboxId, 10) > 0) {
    return {};
  }
  return {
    type:         ENTER_MAILBOX_WRITE_NEW,
    currentView:  `${appConfig.views.mailbox.writeNew.viewName}#${mailboxId}`,
    viewDetails:  `${appConfig.views.mailbox.writeNew.viewName}: mailbox#${mailboxId}` || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveMailboxWriteNew = (mailboxId = 0, time = moment().format(formatDate)) => {
  if (!parseInt(mailboxId, 10) > 0) {
    return {};
  }
  return {
    type:         LEAVE_MAILBOX_WRITE_NEW,
    currentView:  `${appConfig.views.mailbox.writeNew.viewName}#${mailboxId}`,
    viewDetails:  `${appConfig.views.mailbox.writeNew.viewName}: mailbox#${mailboxId}` || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};

// reply email
export const enterMailboxReplyMail = (mailboxId = 0, mailId = 0, time = moment().format(formatDate)) => {
  if (!parseInt(mailboxId, 10) > 0) {
    return {};
  }
  if (!parseInt(mailId, 10) > 0) {
    return {};
  }
  return {
    type:         ENTER_MAILBOX_REPLY_MAIL,
    currentView:  `${appConfig.views.mailbox.reply.viewName}#${mailboxId}`,
    viewDetails:  `${appConfig.views.mailbox.reply.viewName}: mailbox#${mailboxId}, reply to mail#${mailId}` || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveMailboxReplyMail = (mailboxId = 0, mailId = 0, time = moment().format(formatDate)) => {
  if (!parseInt(mailboxId, 10) > 0) {
    return {};
  }
  return {
    type:         LEAVE_MAILBOX_REPLY_MAIL,
    currentView:  `${appConfig.views.mailbox.reply.viewName}#${mailboxId}`,
    viewDetails:  `${appConfig.views.mailbox.reply.viewName}: mailbox#${mailboxId}, reply to mail#${mailId}` || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};
