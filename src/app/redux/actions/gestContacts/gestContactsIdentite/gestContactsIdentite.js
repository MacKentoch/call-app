import moment from 'moment';
import { appConfig }  from '../../../../config';

moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;

export const SET_IS_COLLAPSED_GEST_CONTACTS_IDENTITE    = 'SET_IS_COLLAPSED_GEST_CONTACTS_IDENTITE';
export const UNSET_IS_COLLAPSED_GEST_CONTACTS_IDENTITE  = 'UNSET_IS_COLLAPSED_GEST_CONTACTS_IDENTITE';


//  -----------------------------------------------------------------
//    set / unset benef isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedContactsIdentite = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_GEST_CONTACTS_IDENTITE,
    isCollapsedIdentite: true,
    time
  };
};
export const unsetIsCollapsedContactsIdentite = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_GEST_CONTACTS_IDENTITE,
    isCollapsedIdentite: false,
    time
  };
};
