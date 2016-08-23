import {
  ENTER_HOME_VIEW,
  LEAVE_HOME_VIEW
}                                       from '../actions/views/home/home';
import {
  ENTER_RECHERCHE_VIEW,
  LEAVE_RECHERCHE_VIEW
}                                       from '../actions/views/recherche/recherche';
import {
  ENTER_CREATE_FICHE_CONTACT_COURIER,
  LEAVE_CREATE_FICHE_CONTACT_COURIER
}                                       from '../actions/views/create/ficheContact/courier';
import {
  ENTER_CREATE_FICHE_CONTACT_MAIL,
  LEAVE_CREATE_FICHE_CONTACT_MAIL
}                                       from '../actions/views/create/ficheContact/mail';
import {
  ENTER_CREATE_FICHE_CONTACT_TELEPHONE,
  LEAVE_CREATE_FICHE_CONTACT_TELEPHONE
}                                       from '../actions/views/create/ficheContact/telephone';
import {
  ENTER_CREATE_FICHE_CONTACT_PERSONNES,
  LEAVE_CREATE_FICHE_CONTACT_PERSONNES
}                                       from '../actions/views/create/ficheContact/personnes';
import {
  ENTER_MAILBOX_INBOX,
  LEAVE_MAILBOX_INBOX,
  ENTER_MAILBOX_SENTBOX,
  LEAVE_MAILBOX_SENTBOX,
  ENTER_MAILBOX_CONSULT,
  LEAVE_MAILBOX_CONSULT,
  ENTER_MAILBOX_WRITE_NEW,
  LEAVE_MAILBOX_WRITE_NEW,
  ENTER_MAILBOX_REPLY_MAIL,
  LEAVE_MAILBOX_REPLY_MAIL
}                                       from '../actions/views/mailbox/mailbox';

const initialState = {
  currentView:  'not set',
  viewDetails:  '',
  enterTime:    null,
  leaveTime:    null
};

const views = (state = initialState, action) => {
  switch (action.type) {

  case ENTER_HOME_VIEW:
  case ENTER_RECHERCHE_VIEW:
  case ENTER_CREATE_FICHE_CONTACT_COURIER:
  case ENTER_CREATE_FICHE_CONTACT_MAIL:
  case ENTER_CREATE_FICHE_CONTACT_TELEPHONE:
  case ENTER_CREATE_FICHE_CONTACT_PERSONNES:
  case ENTER_MAILBOX_INBOX:
  case ENTER_MAILBOX_SENTBOX:
  case ENTER_MAILBOX_CONSULT:
  case ENTER_MAILBOX_WRITE_NEW:
  case ENTER_MAILBOX_REPLY_MAIL:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        viewDetails:  action.viewDetails || '',
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_HOME_VIEW:
  case LEAVE_RECHERCHE_VIEW:
  case LEAVE_CREATE_FICHE_CONTACT_COURIER:
  case LEAVE_CREATE_FICHE_CONTACT_MAIL:
  case LEAVE_CREATE_FICHE_CONTACT_TELEPHONE:
  case LEAVE_CREATE_FICHE_CONTACT_PERSONNES:
  case LEAVE_MAILBOX_INBOX:
  case LEAVE_MAILBOX_SENTBOX:
  case LEAVE_MAILBOX_CONSULT:
  case LEAVE_MAILBOX_WRITE_NEW:
  case LEAVE_MAILBOX_REPLY_MAIL:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        viewDetails:  action.viewDetails || '',
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  default:
    return state;
  }
};


export default views;
