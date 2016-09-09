import moment         from 'moment';
import { appConfig }  from '../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

// show hide modal
export const SHOW_NEW_BENEF_DOSSIER_MODAL = 'SHOW_NEW_BENEF_DOSSIER_MODAL';
export const HIDE_NEW_BENEF_DOSSIER_MODAL = 'HIDE_NEW_BENEF_DOSSIER_MODAL';

// fields edtion actions:
export const UPDATE_REGIME_NEW_BENEF_DOSSIER_MODAL          = 'UPDATE_REGIME_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_SOCIETE_NEW_BENEF_DOSSIER_MODAL         = 'UPDATE_SOCIETE_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_NUM_STE_NEW_BENEF_DOSSIER_MODAL         = 'UPDATE_NUM_STE_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_STATUT_BENEF_NEW_BENEF_DOSSIER_MODAL    = 'UPDATE_STATUT_BENEF_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_DATE_ENTREE_NEW_BENEF_DOSSIER_MODAL     = 'UPDATE_DATE_ENTREE_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_DATE_SORTIE_NEW_BENEF_DOSSIER_MODAL     = 'UPDATE_DATE_SORTIE_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_DATE_TAUX_PLEIN_NEW_BENEF_DOSSIER_MODAL = 'UPDATE_DATE_TAUX_PLEIN_NEW_BENEF_DOSSIER_MODAL';

// save new dossier

//  -----------------------------------------------------------------
//    show/hide modal (+ reset)
//  -----------------------------------------------------------------
export const showNewBenefDossierModal = (time = moment().format(formatDate)) => {
  return {
    type: SHOW_NEW_BENEF_DOSSIER_MODAL,
    time
  };
};
export const hideNewBenefDossierModal = (time = moment().format(formatDate)) => {
  return {
    type: HIDE_NEW_BENEF_DOSSIER_MODAL,
    time
  };
};
//  -----------------------------------------------------------------
//    Edit new dossier fields (in state)
//  -----------------------------------------------------------------


//  -----------------------------------------------------------------
//    Save new dossiers (to backend)
//  -----------------------------------------------------------------
