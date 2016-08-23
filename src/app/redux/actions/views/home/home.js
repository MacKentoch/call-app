import { appConfig }  from '../../../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
export const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';

// home est accueil dans cette app
export const enterHome = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  appConfig.views.home.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveHome = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  appConfig.views.home.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    null,
    leaveTime:    time
  };
};
