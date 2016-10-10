import moment               from 'moment';
import { appConfig }        from '../../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE   = 'SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE';
export const UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE = 'UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE';


//  -----------------------------------------------------------------
//    set / unset isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedContactsFicheActivite = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE,
    isCollapsedFicheActivite: true,
    time
  };
};
export const unsetIsCollapsedContactsFicheActivite = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE,
    isCollapsedFicheActivite: false,
    time
  };
};
