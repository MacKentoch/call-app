import { getGestBenefIfNeeded } from './gestBenef';
import {
  getGestBenefIdentiteIfNeeded,
  postGestBenefIdentiteIfNeeded,

  setIsEditingIdentite,
  unsetIsEditingIdentite,

  setIsCollapsedIdentite,
  unsetIsCollapsedIdentite,
  
  updateCiviliteIdentite
}                               from './gestBenefIdentite/gestBenefIdentite';

export {
  // all benef fields (identite + contact + dossiers)
  getGestBenefIfNeeded,
  // benef identite only
  getGestBenefIdentiteIfNeeded,
  postGestBenefIdentiteIfNeeded,
  setIsEditingIdentite,
  unsetIsEditingIdentite,
  setIsCollapsedIdentite,
  unsetIsCollapsedIdentite,
  updateCiviliteIdentite
};
