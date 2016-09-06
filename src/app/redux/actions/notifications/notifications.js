import moment         from 'moment';
import { appConfig }  from '../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const ADD_NOTIFICATION_MESSAGE = 'ADD_NOTIFICATION_MESSAGE';


export const addNotificationMessage = (notification = {}, time = moment().format(formatDate)) => {
  return {
    type: ADD_NOTIFICATION_MESSAGE,
    notification,
    time
  };
};
