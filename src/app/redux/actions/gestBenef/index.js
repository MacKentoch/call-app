import { getGestBenefIfNeeded } from './gestBenef';
import {
  getGestBenefIdentiteIfNeeded,
  postGestBenefIdentiteIfNeeded,

  setIsEditingIdentite,
  unsetIsEditingIdentite,

  setIsCollapsedIdentite,
  unsetIsCollapsedIdentite
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
  unsetIsCollapsedIdentite
};
