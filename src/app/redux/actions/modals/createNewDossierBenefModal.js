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
export const updateRegimeNewBenefDossier = (regime = '', time = moment().format(formatDate)) => {
  if (regime.trim().length > 0) {
    return {
      type: UPDATE_REGIME_NEW_BENEF_DOSSIER_MODAL,
      regime,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateRegimeNewBenefDossier'
  };
};
export const updateSocieteNewBenefDossier = (societe = '', time = moment().format(formatDate)) => {
  if (societe.trim().length > 0) {
    return {
      type: UPDATE_SOCIETE_NEW_BENEF_DOSSIER_MODAL,
      societe,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateSocieteNewBenefDossier'
  };
};
export const updateNumSteNewBenefDossier = (numSte = '', time = moment().format(formatDate)) => {
  if (numSte.trim().length > 0) {
    return {
      type: UPDATE_NUM_STE_NEW_BENEF_DOSSIER_MODAL,
      numSte,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateNumSteNewBenefDossier'
  };
};
export const updateStatutBenefNewBenefDossier = (statutBenef = '', time = moment().format(formatDate)) => {
  if (statutBenef.trim().length > 0) {
    return {
      type: UPDATE_STATUT_BENEF_NEW_BENEF_DOSSIER_MODAL,
      statutBenef,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateStatutBenefNewBenefDossier'
  };
};
export const updateDateEntreeNewBenefDossier = (dateEntree = '', time = moment().format(formatDate)) => {
  if (dateEntree.trim().length > 0) {
    return {
      type: UPDATE_DATE_ENTREE_NEW_BENEF_DOSSIER_MODAL,
      dateEntree,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateDateEntreeNewBenefDossier'
  };
};
export const updateDateSortieNewBenefDossier = (dateSortie = '', time = moment().format(formatDate)) => {
  if (dateSortie.trim().length > 0) {
    return {
      type: UPDATE_DATE_SORTIE_NEW_BENEF_DOSSIER_MODAL,
      dateSortie,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateDateSortieNewBenefDossier'
  };
};
export const updateDateTauxPleinNewBenefDossier = (dateTauxPlein = '', time = moment().format(formatDate)) => {
  if (dateTauxPlein.trim().length > 0) {
    return {
      type: UPDATE_DATE_TAUX_PLEIN_NEW_BENEF_DOSSIER_MODAL,
      dateTauxPlein,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateDateTauxPleinNewBenefDossier'
  };
};

//  -------------------------------------------------------------------------------------------------------------------------
//    Save new dossiers (to backend)
//       see action creator 'addGestBenefNewDossierIfNeeded' in : ../gestBenf/gestBenefDossiers/gestBenefDossiers
//  -------------------------------------------------------------------------------------------------------------------------
