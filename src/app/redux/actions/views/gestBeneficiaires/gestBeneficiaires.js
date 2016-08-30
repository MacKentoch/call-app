import { appConfig }  from '../../../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_GEST_BENEFICIAIRES_VIEW  = 'ENTER_GEST_BENEFICIAIRES_VIEW';
export const LEAVE_GEST_BENEFICIAIRES_VIEW  = 'LEAVE_GEST_BENEFICIAIRES_VIEW';

// home est accueil dans cette app
export const enterGestBeneficiaires = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_GEST_BENEFICIAIRES_VIEW,
    currentView:  appConfig.views.beneficaires.maj || 'non defini',
    viewDetails:  '',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveGestBeneficiaires = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_GEST_BENEFICIAIRES_VIEW,
    currentView:  appConfig.views.beneficaires.maj || 'non defini',
    viewDetails:  '',
    enterTime:    null,
    leaveTime:    time
  };
};
