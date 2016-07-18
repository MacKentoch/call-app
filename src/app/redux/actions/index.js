// views
import {
  enterHome,
  leaveHome,
  enterRecherche,
  leaveRecherche
}                                 from './views';
// stats
import {
  fetchFichesTraiteeDataIfNeeded
}                                 from './stats/fichesTraitees';
import {
  fetchTeamMatesDataIfNeeded
}                                 from './teamMates';
import {
  fetchUserInfoDataIfNeeded
}                                 from './userInfos';
import {
  openSideMenu,
  closeSideMenu,
  toggleSideMenu
}                                 from './sideMenu';

export {
  enterHome,
  leaveHome,
  enterRecherche,
  leaveRecherche,
  fetchFichesTraiteeDataIfNeeded,
  openSideMenu,
  closeSideMenu,
  toggleSideMenu,
  fetchUserInfoDataIfNeeded,
  fetchTeamMatesDataIfNeeded
};
