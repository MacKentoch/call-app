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


// inbox
export const enterMailboxInbox = (mailboxName= ' ---', time = moment().format(formatDate)) => {
  return {
    type:         ENTER_MAILBOX_INBOX,
    currentView:  `${appConfig.views.mailbox.reception.viewName}: ${mailboxName}` || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveMailboxInbox = (mailboxName= ' ---', time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_MAILBOX_INBOX,
    currentView:  `${appConfig.views.mailbox.reception.viewName}: ${mailboxName}` || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};

// sentbox
export const enterMailboxSentbox = (mailboxName= ' ---', time = moment().format(formatDate)) => {
  return {
    type:         ENTER_MAILBOX_SENTBOX,
    currentView:  `${appConfig.views.mailbox.envoi.viewName}: ${mailboxName}` || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveMailboxSentbox = (mailboxName= ' ---', time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_MAILBOX_SENTBOX,
    currentView:  `${appConfig.views.mailbox.envoi.viewName}: ${mailboxName}` || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};

// consult
export const enterMailboxConsult = (mailboxName= ' ---', mailId = 0, time = moment().format(formatDate)) => {
  return {
    type:         ENTER_MAILBOX_CONSULT,
    currentView:  `${appConfig.views.mailbox.consult.viewName}: ${mailboxName}, mailId: ${mailId}` || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveMailboxConsult = (mailboxName= ' ---', mailId = 0, time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_MAILBOX_CONSULT,
    currentView:  `${appConfig.views.mailbox.consult.viewName}: ${mailboxName}, mailId: ${mailId}` || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};

// write new email
export const enterMailboxWriteNew = (mailboxName= ' ---', time = moment().format(formatDate)) => {
  return {
    type:         ENTER_MAILBOX_WRITE_NEW,
    currentView:  `${appConfig.views.mailbox.writeNew.viewName}: ${mailboxName}` || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveMailboxWriteNew = (mailboxName= ' ---', time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_MAILBOX_WRITE_NEW,
    currentView:  `${appConfig.views.mailbox.writeNew.viewName}: ${mailboxName}` || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};
