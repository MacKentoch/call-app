import { getGestBenefIfNeeded, resetGestBenef } from './gestBenef';
import {
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
import {
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
export {
  // all benef fields (identite + contact + dossiers)
  getGestBenefIfNeeded,
  // benef identite only
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
};
