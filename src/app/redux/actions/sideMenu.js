import moment         from 'moment';
import { appConfig }  from '../../config';
import {
  getSideMenuState,
  setSideMenuState
}                     from '../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const OPEN_SIDE_MENU   = 'OPEN_SIDE_MENU';
export const CLOSE_SIDE_MENU  = 'CLOSE_SIDE_MENU';


export const openSideMenu = (time = moment().format(formatDate)) => {
  setSideMenuStateToLocalStorage(true);
  return {
    type:         OPEN_SIDE_MENU,
    isCollapsed:  false,
    time
  };
};

export const closeSideMenu = (time = moment().format(formatDate)) => {
  setSideMenuStateToLocalStorage(false);
  return {
    type:         CLOSE_SIDE_MENU,
    isCollapsed:  true,
    time
  };
};

export const toggleSideMenu = () => (dispatch, getState) => {
  const state     = getState();
  const sideMenu  = state.sideMenu;

  setSideMenuStateToLocalStorage(!sideMenu.isCollapsed);
  if (sideMenu.isCollapsed) {
    dispatch(openSideMenu());
  } else {
    dispatch(closeSideMenu());
  }
};

// initilize sideMenu form localStorage (should be called only once on init)
export const initSideMenu = () => dispatch => {
  // sideMenu state from localStorage: set opened or closed menu
  if (getSideMenuState()) {
    dispatch(openSideMenu());
  } else {
    dispatch(closeSideMenu());
  }
};

function setSideMenuStateToLocalStorage(state) {
  setSideMenuState(state);
}
