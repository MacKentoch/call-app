import {
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU
} from '../../actions/ui/sideMenu';

const initialState = {
  isCollapsed: false,
  time: null
};

const sideMenu = (state = initialState, action) => {
  switch (action.type) {

  case OPEN_SIDE_MENU:
    return {
      ...state,
      isCollapsed:  action.isCollapsed,
      time:         action.time
    };

  case CLOSE_SIDE_MENU:
    return {
      ...state,
      isCollapsed:  action.isCollapsed,
      time:         action.time
    };

  default:
    return state;
  }
};


export default sideMenu;
