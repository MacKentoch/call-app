import { appConfig }  from '../../config';
import moment         from 'moment';
moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
export const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';

export const ENTER_RECHERCHE_VIEW = 'ENTER_RECHERCHE_VIEW';
export const LEAVE_RECHERCHE_VIEW = 'LEAVE_RECHERCHE_VIEW';

export const ENTER_CREATE_FICHE_CONTACT_COURIER = 'ENTER_CREATE_FICHE_CONTACT_COURIER';
export const LEAVE_CREATE_FICHE_CONTACT_COURIER = 'LEAVE_CREATE_FICHE_CONTACT_COURIER';

export const ENTER_CREATE_FICHE_CONTACT_MAIL = 'ENTER_CREATE_FICHE_CONTACT_MAIL';
export const LEAVE_CREATE_FICHE_CONTACT_MAIL = 'LEAVE_CREATE_FICHE_CONTACT_MAIL';

// home est accueil dans cette app
export const enterHome = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  appConfig.views.home.viewName || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveHome = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  appConfig.views.home.viewName || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};

// recherche avancée
export const enterRecherche = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_RECHERCHE_VIEW,
    currentView:  appConfig.views.recherche.viewName || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveRecherche = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_RECHERCHE_VIEW,
    currentView:  appConfig.views.recherche.viewName || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};

// Create FicheContact type Courier
export const enterCreateFicheContactCourier = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_CREATE_FICHE_CONTACT_COURIER,
    currentView:  appConfig.views.createFicheContactCourier.viewName || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveCreateFicheContactCourier = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_CREATE_FICHE_CONTACT_COURIER,
    currentView:  appConfig.views.createFicheContactCourier.viewName || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};

// Create FicheContact type Mail
export const enterCreateFicheContactMail = (time = moment().format(formatDate)) => {
  return {
    type:         ENTER_CREATE_FICHE_CONTACT_MAIL,
    currentView:  appConfig.views.createFicheContactMail.viewName || 'non defini',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveCreateFicheContactMail = (time = moment().format(formatDate)) => {
  return {
    type:         LEAVE_CREATE_FICHE_CONTACT_MAIL,
    currentView:  appConfig.views.createFicheContactMail.viewName || 'non defini',
    enterTime:    null,
    leaveTime:    time
  };
};
