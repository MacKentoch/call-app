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
  leaveMailboxSentbox
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
  fetchSentboxContentIfNeeded
};
