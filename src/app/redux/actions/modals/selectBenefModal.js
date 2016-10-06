import moment         from 'moment';
import { appConfig }  from '../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const SHOW_SELECT_BENEF_MODAL = 'SHOW_SELECT_BENEF_MODAL';
export const HIDE_SELECT_BENEF_MODAL = 'HIDE_SELECT_BENEF_MODAL';


export const showSelectBenefModal = (typeContact = '', contactId = 0, time = moment().format(formatDate)) => {
  if (typeContact.trim().length > 0) {
    return {
      type: SHOW_SELECT_BENEF_MODAL,
      contactId,    // if contactId > 0 -> this is an update | if contactId === 0 -> this is a creation
      typeContact,  // will edit / create a contact so we need contact type (email, phone etc..)
      time
    };
  } else {
    return {
      type: 'ERROR',
      from: 'showSelectBenefModal'
    };
  }
};

export const hideSelectBenefModal = (time = moment().format(formatDate)) => {
  return {
    type: HIDE_SELECT_BENEF_MODAL,
    time
  };
};
