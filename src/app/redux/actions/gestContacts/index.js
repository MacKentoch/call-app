// contacts all:
import { getGestContactsIfNeeded, resetGestBenef } from './gestBenef';
// contacts Idnetite:
import {
  setIsCollapsedIdentite,
  unsetIsCollapsedIdentite
}                               from './gestBenefIdentite/gestBenefIdentite';
// contacts contact:
import {
  setIsCollapsedContact,
  unsetIsCollapsedContact
}                               from './gestBenefContact/gestBenefContact';
// contacts dossiers:
import {
  setIsCollapsedDossiers,
  unsetIsCollapsedDossiers
}                               from './gestBenefDossiers/gestBenefDossiers';
import {
  getGestBenefAllContactsEtActivitesIfNeeded,
  getGestBenefThisDossierContactsEtActivitesIfNeeded,

  setIsCollapsedContactsEtActivites,
  unsetIsCollapsedContactsEtActivites
}                               from './gestBenefContactsEtActivites/gestBenefContactsEtActivites';
export {
  // all contacts (benef info) fields (identite + contact + dossiers)
  getGestContactsIfNeeded,
  // benef identite only
  resetGestBenefIdentite,
  getGestBenefIdentiteIfNeeded,
  resetGestBenef,
  postGestBenefIdentiteIfNeeded,
  setIsEditingIdentite,
  unsetIsEditingIdentite,
  setIsCollapsedIdentite,
  unsetIsCollapsedIdentite,
  updateCiviliteIdentite,
  updateNomIdentite,
  updateNomDeJeuneFilleIdentite,
  updatePrenomIdentite,
  updateDateNaissanceIdentite,
  updateNumssIdentite,
  updateDateDecesIdentite,
  updateMaritalStatusIdentite,
  // benef contact only
  resetGestBenefContact,
  getGestBenefContactIfNeeded,
  postGestBenefContactIfNeeded,
  setIsEditingContact,
  unsetIsEditingContact,
  setIsCollapsedContact,
  unsetIsCollapsedContact,
  updateTelephoneFixeContact,
  updateTelephoneMobileContact,
  updateEmailContact,
  updateNumAdressNumber,
  updateVoieAdressContact,
  updateComplementAdressContact,
  updateCodePostalContact,
  updateVilleContact,
  updatePaysContact,
  // benef dossiers:
  getGestBenefAllDossiersIfNeeded,
  setIsCollapsedDossiers,
  unsetIsCollapsedDossiers,
  setIsSavingNewDossier,
  unsetIsSavingNewDossier,
  setIsEditingDossier,
  unsetIsEditingDossier,
  addGestBenefNewDossierIfNeeded,
  updateGestBenefDossierIfNeeded,
  resetGestBenefDossier,
  // benef contact et activites:
  getGestBenefAllContactsEtActivitesIfNeeded,
  getGestBenefThisDossierContactsEtActivitesIfNeeded,
  setIsCollapsedContactsEtActivites,
  unsetIsCollapsedContactsEtActivites
};
