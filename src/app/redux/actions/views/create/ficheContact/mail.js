import { appConfig }  from '../../../../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_CREATE_FICHE_CONTACT_MAIL = 'ENTER_CREATE_FICHE_CONTACT_MAIL';
export const LEAVE_CREATE_FICHE_CONTACT_MAIL = 'LEAVE_CREATE_FICHE_CONTACT_MAIL';

// Create FicheContact type Mail
export const enterCreateFicheContactMail = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_CREATE_FICHE_CONTACT_MAIL,
    currentView:  appConfig.views.createFicheContactMail.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveCreateFicheContactMail = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_CREATE_FICHE_CONTACT_MAIL,
    currentView:  appConfig.views.createFicheContactMail.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    null,
    leaveTime:    time
  };
};
