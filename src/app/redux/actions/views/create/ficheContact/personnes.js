import { appConfig }  from '../../../../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_CREATE_FICHE_CONTACT_PERSONNES = 'ENTER_CREATE_FICHE_CONTACT_PERSONNES';
export const LEAVE_CREATE_FICHE_CONTACT_PERSONNES = 'LEAVE_CREATE_FICHE_CONTACT_PERSONNES';

// Create FicheContact type Personnes
export const enterCreateFicheContactPersonnes = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_CREATE_FICHE_CONTACT_PERSONNES,
    currentView:  appConfig.views.createFicheContactPersonnes.viewName || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveCreateFicheContactPersonnes = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_CREATE_FICHE_CONTACT_PERSONNES,
    currentView:  appConfig.views.createFicheContactPersonnes.viewName || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};
