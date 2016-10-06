import moment         from 'moment';
import { appConfig }  from '../../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;
// ui dossier collpased
export const SET_IS_COLLAPSED_CONTACTS_DOSSIERS   = 'SET_IS_COLLAPSED_CONTACTS_DOSSIERS';
export const UNSET_IS_COLLAPSED_CONTACTS_DOSSIERS = 'UNSET_IS_COLLAPSED_CONTACTS_DOSSIERS';

//  -----------------------------------------------------------------
//    set / unset benef isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedContactsDossiers = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_CONTACTS_DOSSIERS,
    isCollapsedDossiers: true,
    time
  };
};
export const unsetIsCollapsedContactsDossiers = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_DOSSIERS,
    isCollapsedDossiers: false,
    time
  };
};
