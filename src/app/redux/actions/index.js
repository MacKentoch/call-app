// views
import {
  enterHome,
  leaveHome,

  enterRecherche,
  leaveRecherche,

  enterCreateFicheContactCourier,
  leaveCreateFicheContactCourier,
  enterCreateFicheContactMail,
  leaveCreateFicheContactMail,
  enterCreateFicheContactTelephone,
  leaveCreateFicheContactTelephone,
  enterCreateFicheContactPersonnes,
  leaveCreateFicheContactPersonnes,

  enterMailboxInbox,
  leaveMailboxInbox,
  enterMailboxSentbox,
  leaveMailboxSentbox,
  enterMailboxConsult,
  leaveMailboxConsult,
  enterMailboxWriteNew,
  leaveMailboxWriteNew,
  enterMailboxReplyMail,
  leaveMailboxReplyMail,
  // gest/maj benef:
  enterGestBeneficiaires,
  leaveGestBeneficiaires,
  // gest/edit Contacts
  enterGestContacts,
  leaveGestContacts
}                                 from './views';
// stats
import {
  fetchFichesTraiteeDataIfNeeded
}                                 from './stats/fichesTraitees';
import {
  fetchFichesParCanalDataIfNeeded
}                                 from './stats/fichesParCanal';
import {
  fetchPrincipauxMotifsDataIfNeeded
}                                 from './stats/principauxMotifs';
// mailbox
import {
  fetchInboxContentIfNeeded
}                                 from './mailbox/inbox';
import {
  fetchSentboxContentIfNeeded
}                                 from './mailbox/sentbox';
import {
  fetchMailContentIfNeeded
}                                 from './mailbox/consult';
import {
  fetchTeamMatesDataIfNeeded
}                                 from './teamMates';
import {
  fetchUserInfoDataIfNeeded
}
                                  from './user/userInfos';
import {
  fetchUserGroupActivityDataIfNeeded
}
                                  from './user/userGroupActivity';
import {
  fetchUserBoitesMailsDataIfNeeded
}
                                  from './user/userBoitesMails';
// sideMenu
import {
  openSideMenu,
  closeSideMenu,
  toggleSideMenu,
  initSideMenu
}                                 from './ui/sideMenu';
// write a new mail
import {
  newMailInit,
  newMailCancel,
  newMailDestinatairesChange,
  newMailSubjectChange,
  newMailBodyChange,
  newMailAddAttachement,
  newMailRemoveAttachement
}                                 from './mailbox/writeNew';
// reply a mail
import {
  replyMailInit,
  replyMailCancel,
  replyMailDestinatairesChange,
  replyMailSubjectChange,
  replyMailBodyChange,
  replyMailAddAttachement,
  replyMailRemoveAttachement
}                                 from './mailbox/reply';
// modals
import {
  // recherche benef modal:
  showRechercheBenefModal,
  hideRechercheBenefModal,

  // select benef modal (before contact edit/create)
  showSelectBenefModal,
  hideSelectBenefModal,

  // create new benef Dossier modal:
  showNewBenefDossierModal,
  hideNewBenefDossierModal,

  updateRegimeNewBenefDossier,
  updateSocieteNewBenefDossier,
  updateNumSteNewBenefDossier,
  updateStatutBenefNewBenefDossier,
  updateDateEntreeNewBenefDossier,
  updateDateSortieNewBenefDossier,
  updateDateTauxPleinNewBenefDossier
}                                 from './modals';
// search benef
import {
  postSearchIfNeeded
}                                 from './search/search';
// gestBenef
import {
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
  // benef contact
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
}                                 from './gestBenef';
// gestContacts:
import {
  // all contacts (benef info) fields (identite + contact + dossiers)
  getGestContactsIfNeeded,
  // contacts identite only
  setIsCollapsedContactsIdentite,
  unsetIsCollapsedContactsIdentite,
  // benef contact only
  setIsCollapsedContactsBenefContact,
  unsetIsCollapsedContactsBenefContact,
  // benef dossiers:
  setIsCollapsedContactsDossiers,
  unsetIsCollapsedContactsDossiers,
  // fiche contact
  setIsCollapsedContactsFicheContact,
  unsetIsCollapsedContactsFicheContact,
  getGestContactsFicheContactIfNeeded,
  updateDateCreationFicheContact,
  updateDateReceptionFicheContact,
  updateStatutIndexFicheContact,
  updateDateClotureFicheContact,
  updateTypeIndexFicheContact,
  updateNumDossierIndexSelected,

  // fiches activites
  setIsCollapsedContactsFicheActivite,
  unsetIsCollapsedContactsFicheActivite,
  // motifs de référence:
  getGestContactsAllMotifsIfNeeded
}                                 from './gestContacts';
import {
  addNotificationMessage
}                                 from './notifications/notifications';

export {
  // views:
  enterHome,
  leaveHome,
  enterRecherche,
  leaveRecherche,
  enterCreateFicheContactCourier,
  leaveCreateFicheContactCourier,
  enterCreateFicheContactMail,
  leaveCreateFicheContactMail,
  enterCreateFicheContactTelephone,
  leaveCreateFicheContactTelephone,
  enterCreateFicheContactPersonnes,
  leaveCreateFicheContactPersonnes,
  enterMailboxInbox,
  leaveMailboxInbox,
  enterMailboxSentbox,
  leaveMailboxSentbox,
  enterMailboxConsult,
  leaveMailboxConsult,
  enterMailboxWriteNew,
  leaveMailboxWriteNew,
  enterMailboxReplyMail,
  leaveMailboxReplyMail,
  enterGestBeneficiaires,
  leaveGestBeneficiaires,
  enterGestContacts,
  leaveGestContacts,

  // stats:
  fetchFichesTraiteeDataIfNeeded,
  fetchFichesParCanalDataIfNeeded,
  fetchPrincipauxMotifsDataIfNeeded,

  // sideMenu
  openSideMenu,
  closeSideMenu,
  toggleSideMenu,
  initSideMenu,

  // user
  fetchUserInfoDataIfNeeded,
  fetchUserGroupActivityDataIfNeeded,
  fetchUserBoitesMailsDataIfNeeded,

  fetchTeamMatesDataIfNeeded,

  // mailbox
  fetchInboxContentIfNeeded,
  fetchSentboxContentIfNeeded,
  fetchMailContentIfNeeded,

  // write new mail
  newMailInit,
  newMailCancel,
  newMailDestinatairesChange,
  newMailSubjectChange,
  newMailBodyChange,
  newMailAddAttachement,
  newMailRemoveAttachement,

  // reply a mail
  replyMailInit,
  replyMailCancel,
  replyMailDestinatairesChange,
  replyMailSubjectChange,
  replyMailBodyChange,
  replyMailAddAttachement,
  replyMailRemoveAttachement,

  // recherche benef modal (before benef edit / create)
  showRechercheBenefModal,
  hideRechercheBenefModal,

  // select benef modal (before contact edit/create)
  showSelectBenefModal,
  hideSelectBenefModal,

  // create new benef Dossier modal:
  showNewBenefDossierModal,
  hideNewBenefDossierModal,

  updateRegimeNewBenefDossier,
  updateSocieteNewBenefDossier,
  updateNumSteNewBenefDossier,
  updateStatutBenefNewBenefDossier,
  updateDateEntreeNewBenefDossier,
  updateDateSortieNewBenefDossier,
  updateDateTauxPleinNewBenefDossier,

  // search benef
  postSearchIfNeeded,

  // gestBenef
  resetGestBenefIdentite,
  getGestBenefIfNeeded,
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

  getGestBenefAllContactsEtActivitesIfNeeded,
  getGestBenefThisDossierContactsEtActivitesIfNeeded,
  setIsCollapsedContactsEtActivites,
  unsetIsCollapsedContactsEtActivites,

  // notifications:
  addNotificationMessage,

  // gestContacts:
  getGestContactsIfNeeded,
  setIsCollapsedContactsIdentite,
  unsetIsCollapsedContactsIdentite,
  setIsCollapsedContactsBenefContact,
  unsetIsCollapsedContactsBenefContact,
  setIsCollapsedContactsDossiers,
  unsetIsCollapsedContactsDossiers,
  setIsCollapsedContactsFicheContact,
  unsetIsCollapsedContactsFicheContact,

  updateDateCreationFicheContact,
  updateDateReceptionFicheContact,
  updateStatutIndexFicheContact,
  updateDateClotureFicheContact,
  updateTypeIndexFicheContact,
  updateNumDossierIndexSelected,

  getGestContactsFicheContactIfNeeded,
  setIsCollapsedContactsFicheActivite,
  unsetIsCollapsedContactsFicheActivite,
  getGestContactsAllMotifsIfNeeded
};
