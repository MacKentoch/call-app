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
  fetchFichesParCanalDataIfNeeded
}                                 from './stats/fichesParCanal';

import {
  fetchTeamMatesDataIfNeeded
}                                 from './teamMates';
import {
  fetchUserInfoDataIfNeeded
}
                                  from './userInfos';
// sideMenu
import {
  openSideMenu,
  closeSideMenu,
  toggleSideMenu
}                                 from './sideMenu';

export {
  // views:
  enterHome,
  leaveHome,
  enterRecherche,
  leaveRecherche,

  // stats:
  fetchFichesTraiteeDataIfNeeded,
  fetchFichesParCanalDataIfNeeded,

  // sideMenu
  openSideMenu,
  closeSideMenu,
  toggleSideMenu,

  fetchUserInfoDataIfNeeded,
  fetchTeamMatesDataIfNeeded
};
