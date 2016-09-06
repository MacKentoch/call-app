import {
  ADD_NOTIFICATION_MESSAGE
}                           from '../../actions/notifications/notifications';

const initialState = {
  message:  '',     // if message empty: it should not show notification
  level:    'info', // one of 'sucess', 'error', 'info'
  time:     ''      // time change is the way to trigger a new notification (Component side)
};

const notifications = (state = initialState, action) => {
  switch (action.type) {
  case ADD_NOTIFICATION_MESSAGE:
    return {
      ...state,
      message:  action.notification.message ? action.notification.message : initialState.message,
      level:    action.notification.level ? action.notification.level : initialState.level,
      time:     action.time
    };
  default:
    return state;
  }
};

export default notifications;
