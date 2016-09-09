// benef all:
import { getGestBenefIfNeeded, resetGestBenef } from './gestBenef';
// benef Idnetite:
import {
  resetGestBenefIdentite,

  getGestBenefIdentiteIfNeeded,
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
  updateMaritalStatusIdentite
}                               from './gestBenefIdentite/gestBenefIdentite';
// benef contact:
import {
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
  updatePaysContact
}                               from './gestBenefContact/gestBenefContact';
// benef dossiers:
import {
  getGestBenefAllDossiersIfNeeded,

  setIsCollapsedDossiers,
  unsetIsCollapsedDossiers,

  setIsSavingNewDossier,
  unsetIsSavingNewDossier,

  setIsEditingDossier,
  unsetIsEditingDossier,

  addGestBenefNewDossierIfNeeded,

  updateGestBenefDossierIfNeeded,

  resetGestBenefDossier  
}                               from './gestBenefDossiers/gestBenefDossiers';
export {
  // all benef fields (identite + contact + dossiers)
  getGestBenefIfNeeded,
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
  resetGestBenefDossier
};
