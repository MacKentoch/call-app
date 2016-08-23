import { appConfig }  from '../../../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_RECHERCHE_VIEW = 'ENTER_RECHERCHE_VIEW';
export const LEAVE_RECHERCHE_VIEW = 'LEAVE_RECHERCHE_VIEW';

// recherche avancée
export const enterRecherche = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_RECHERCHE_VIEW,
    currentView:  appConfig.views.recherche.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveRecherche = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_RECHERCHE_VIEW,
    currentView:  appConfig.views.recherche.viewName || 'non defini',
    viewDetails:  '',
    enterTime:    null,
    leaveTime:    time
  };
};
