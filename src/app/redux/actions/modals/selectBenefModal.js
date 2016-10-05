import moment         from 'moment';
import { appConfig }  from '../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const SHOW_SELECT_BENEF_MODAL = 'SHOW_SELECT_BENEF_MODAL';
export const HIDE_SELECT_BENEF_MODAL = 'HIDE_SELECT_BENEF_MODAL';


export const showSelectBenefModal = (time = moment().format(formatDate)) => {
  return {
    type: SHOW_SELECT_BENEF_MODAL,
    time
  };
};

export const hideSelectBenefModal = (time = moment().format(formatDate)) => {
  return {
    type: HIDE_SELECT_BENEF_MODAL,
    time
  };
};
