import moment         from 'moment';
import { appConfig }  from '../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const ADD_NOTIFICATION_MESSAGE = 'ADD_NOTIFICATION_MESSAGE';

const emptyNotification = {
  message: '',
  level: 'info'
};

export const addNotificationMessage = (notification = emptyNotification, time = moment().format(formatDate)) => {
  return {
    type: ADD_NOTIFICATION_MESSAGE,
    notification,
    time
  };
};
