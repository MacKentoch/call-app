import { appConfig }  from '../../../../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_CREATE_FICHE_CONTACT_COURIER = 'ENTER_CREATE_FICHE_CONTACT_COURIER';
export const LEAVE_CREATE_FICHE_CONTACT_COURIER = 'LEAVE_CREATE_FICHE_CONTACT_COURIER';

// Create FicheContact type Courier
export const enterCreateFicheContactCourier = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_CREATE_FICHE_CONTACT_COURIER,
    currentView:  appConfig.views.createFicheContactCourier.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveCreateFicheContactCourier = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_CREATE_FICHE_CONTACT_COURIER,
    currentView:  appConfig.views.createFicheContactCourier.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    null,
    leaveTime:    time
  };
};
