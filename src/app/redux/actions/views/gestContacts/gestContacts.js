import { appConfig }  from '../../../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_GEST_CONTACTS_VIEW  = 'ENTER_GEST_CONTACTS_VIEW';
export const LEAVE_GEST_CONTACTS_VIEW  = 'LEAVE_GEST_CONTACTS_VIEW';

// home est accueil dans cette app
export const enterGestContacts = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_GEST_CONTACTS_VIEW,
    currentView:  appConfig.views.contacts.edit.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveGestContacts = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_GEST_CONTACTS_VIEW,
    currentView:  appConfig.views.contacts.edit.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    null,
    leaveTime:    time
  };
};
