import moment         from 'moment';
import { appConfig }  from '../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const SHOW_RECHERCHE_BENEF_MODAL = 'SHOW_RECHERCHE_BENEF_MODAL';
export const HIDE_RECHERCHE_BENEF_MODAL = 'HIDE_RECHERCHE_BENEF_MODAL';


export const showRechercheBenefModal = (time = moment().format(formatDate)) => {
  return {
    type: SHOW_RECHERCHE_BENEF_MODAL,
    time
  };
};

export const hideRechercheBenefModal = (time = moment().format(formatDate)) => {
  return {
    type: HIDE_RECHERCHE_BENEF_MODAL,
    time
  };
};
