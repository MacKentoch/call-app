import { appConfig }  from '../../../../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_CREATE_FICHE_CONTACT_TELEPHONE = 'ENTER_CREATE_FICHE_CONTACT_TELEPHONE';
export const LEAVE_CREATE_FICHE_CONTACT_TELEPHONE = 'LEAVE_CREATE_FICHE_CONTACT_TELEPHONE';

// Create FicheContact type Telephone
export const enterCreateFicheContactTelephone = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_CREATE_FICHE_CONTACT_TELEPHONE,
    currentView:  appConfig.views.createFicheContactTelephone.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveCreateFicheContactTelephone = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_CREATE_FICHE_CONTACT_TELEPHONE,
    currentView:  appConfig.views.createFicheContactTelephone.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    null,
    leaveTime:    time
  };
};
