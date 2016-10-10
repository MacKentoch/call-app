import moment               from 'moment';
import { appConfig }        from '../../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const SET_IS_COLLAPSED_CONTACTS_BENEF_CONTACT    = 'SET_IS_COLLAPSED_CONTACTS_BENEF_CONTACT';
export const UNSET_IS_COLLAPSED_CONTACTS_BENEF_CONTACT  = 'UNSET_IS_COLLAPSED_CONTACTS_BENEF_CONTACT';

//  -----------------------------------------------------------------
//    set / unset isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedContactsBenefContact = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_CONTACTS_BENEF_CONTACT,
    isCollapsedBenefContact: true,
    time
  };
};
export const unsetIsCollapsedContactsBenefContact = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_BENEF_CONTACT,
    isCollapsedBenefContact: false,
    time
  };
};
