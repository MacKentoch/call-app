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


const initialState = {
  currentView:  'not set',
  enterTime:    null,
  leaveTime:    null
};

const views = (state = initialState, action) => {
  switch (action.type) {

  case ENTER_HOME_VIEW:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_HOME_VIEW:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;


  case ENTER_RECHERCHE_VIEW:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_RECHERCHE_VIEW:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case ENTER_CREATE_FICHE_CONTACT_COURIER:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_CREATE_FICHE_CONTACT_COURIER:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case ENTER_CREATE_FICHE_CONTACT_MAIL:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_CREATE_FICHE_CONTACT_MAIL:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case ENTER_CREATE_FICHE_CONTACT_TELEPHONE:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_CREATE_FICHE_CONTACT_TELEPHONE:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case ENTER_CREATE_FICHE_CONTACT_PERSONNES:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_CREATE_FICHE_CONTACT_PERSONNES:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
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
