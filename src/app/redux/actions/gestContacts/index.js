// contacts all:
import { getGestContactsIfNeeded } from './gestContacts';
// contacts Identite:
import {
  setIsCollapsedContactsIdentite,
  unsetIsCollapsedContactsIdentite
}                               from './gestContactsIdentite/gestContactsIdentite';
// contacts (benef)
import {
  setIsCollapsedContactsBenefContact,
  unsetIsCollapsedContactsBenefContact
}                                from './gestContactsBenefContact/gestContactsBenefContact';
// contacts dossiers:
import {
  setIsCollapsedContactsDossiers,
  unsetIsCollapsedContactsDossiers
}                               from './gestContactsDossiers/gestContactsDossiers';
// contacts fiche contact:
import {
  setIsCollapsedContactsFicheContact,
  unsetIsCollapsedContactsFicheContact,
  getGestContactsFicheContactIfNeeded
}                               from './gestContactsFicheContact/gestContactsFicheContact';
// contacts fiche activites:
import {
  setIsCollapsedContactsFicheActivite,
  unsetIsCollapsedContactsFicheActivite
}                               from './gestContactsFicheActivite/gestContactsFicheActivite';
// contacts-activite liste de motifs de référence:
import {
  getGestContactsAllMotifsIfNeeded
}                               from './gestContactListMotifs/gestContactListMotifs';

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
  // fiche contact
  setIsCollapsedContactsFicheContact,
  unsetIsCollapsedContactsFicheContact,
  getGestContactsFicheContactIfNeeded,
  // fiches activites
  setIsCollapsedContactsFicheActivite,
  unsetIsCollapsedContactsFicheActivite,
  // contacts-activite liste de motifs de référence:
  getGestContactsAllMotifsIfNeeded
};
