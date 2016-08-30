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
  leaveGestBeneficiaires
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
  showRechercheBenefModal,
  hideRechercheBenefModal
}                                 from './modals/rechercheBenefModal';
// search benef
import {
  postSearchIfNeeded
}                                 from './search/search';

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

  // modals
  showRechercheBenefModal,
  hideRechercheBenefModal,

  // search benef
  postSearchIfNeeded
};
