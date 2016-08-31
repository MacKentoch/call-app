import { getGestBenefIfNeeded } from './gestBenef';
import { getGestBenefIdentiteIfNeeded } from './gestBenefIdentite/gestBenefIdentite';

export {
  // all benef fields (identite + contact + dossiers)
  getGestBenefIfNeeded,
  // benef identite only
  getGestBenefIdentiteIfNeeded
};
