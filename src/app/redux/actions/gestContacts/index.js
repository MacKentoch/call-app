// contacts all:
import { getGestContactsIfNeeded } from './gestContacts';
// contacts Identite:
import {
  setIsCollapsedContactsIdentite,
  unsetIsCollapsedContactsIdentite
}                               from './gestContactsIdentite/gestContactsIdentite';
// contacts contact:
import {
  setIsCollapsedContactsContact,
  unsetIsCollapsedContactsContact
}                               from './gestContactsContact/gestContactsContact';
// contacts dossiers:
import {
  setIsCollapsedContactsDossiers,
  unsetIsCollapsedContactsDossiers
}                               from './gestContactsDossiers/gestContactsDossiers';
import {
  setIsCollapsedContactsBenefContact,
  unsetIsCollapsedContactsBenefContact
}                                from './gestContactsBenefContact/gestContactsBenefContact';

export {
  // all contacts (benef info) fields (identite + contact + dossiers)
  getGestContactsIfNeeded,
  // contacts identite only
  setIsCollapsedContactsIdentite,
  unsetIsCollapsedContactsIdentite,
  // benef contact (part of identite naming is a...)
  setIsCollapsedContactsBenefContact,
  unsetIsCollapsedContactsBenefContact,
  // benef dossiers:
  setIsCollapsedContactsDossiers,
  unsetIsCollapsedContactsDossiers,
  // contact only
  setIsCollapsedContactsContact,
  unsetIsCollapsedContactsContact
};
