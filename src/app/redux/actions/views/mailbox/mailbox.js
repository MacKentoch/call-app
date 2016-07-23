import { appConfig }  from '../../../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_MAILBOX_INBOX  = 'ENTER_MAILBOX_INBOX';
export const LEAVE_MAILBOX_INBOX  = 'LEAVE_MAILBOX_INBOX';

export const ENTER_MAILBOX_SENTBOX  = 'ENTER_MAILBOX_SENTBOX';
export const LEAVE_MAILBOX_SENTBOX  = 'LEAVE_MAILBOX_SENTBOX';

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
