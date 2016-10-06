import moment         from 'moment';
import { appConfig }  from '../../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const SET_IS_COLLAPSED_CONTACTS_CONTACT    = 'SET_IS_COLLAPSED_CONTACTS_CONTACT';
export const UNSET_IS_COLLAPSED_CONTACTS_CONTACT  = 'UNSET_IS_COLLAPSED_CONTACTS_CONTACT';

//  -----------------------------------------------------------------
//    set / unset isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedContactsContact = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_CONTACTS_CONTACT,
    isCollapsedContact: true,
    time
  };
};
export const unsetIsCollapsedContactsContact = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_CONTACT,
    isCollapsedContact: false,
    time
  };
};
