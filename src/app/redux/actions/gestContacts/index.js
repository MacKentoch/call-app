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


export {
  // all contacts (benef info) fields (identite + contact + dossiers)
  getGestContactsIfNeeded,
  // contacts identite only
  setIsCollapsedContactsIdentite,
  unsetIsCollapsedContactsIdentite,
  // benef contact only
  setIsCollapsedContactsContact,
  unsetIsCollapsedContactsContact,
  // benef dossiers:
  setIsCollapsedContactsDossiers,
  unsetIsCollapsedContactsDossiers
};
