// utils:
import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  encodeBase64
}                     from './utils/fetchTools';
// fetch mocks:
import {
  fetchMockUserInfosData,
  fetchMockFichesTraiteesData,
  fetchMockFichesParCanalData,
  fetchMockPrincipauxMotifsData,
  fetchMockUserGroupActivityData,
  fetchMockUserBoitesMailsData,
  fetchMockListMails
}                     from './fetchMock/fetchMocks';
// API
import {
  getUserBoitesMails,
  getUserGroupActivity,
  getUserInfo,
  getInboxContent,
  getStatsFichesParCanal
}                     from './API';
// date tools
import {
  getLastThreeMonthNames
}                     from './utils/dateTools';

// localStorage
import {
  getSideMenuState,
  setSideMenuState
}                     from './localStorage/ui/uiConfig';
// mails pagination
import {
  getCurrentPageContent,
  getMinIndex,
  getMaxIndex
}                     from './utils/mailPagination';

export {
  // utils:
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  encodeBase64,

  // fetch mocks:
  fetchMockUserInfosData,
  fetchMockFichesTraiteesData,
  fetchMockFichesParCanalData,
  fetchMockPrincipauxMotifsData,
  fetchMockUserGroupActivityData,
  fetchMockUserBoitesMailsData,
  fetchMockListMails,

  // API
  getUserBoitesMails,
  getUserGroupActivity,
  getUserInfo,
  getInboxContent,
  getStatsFichesParCanal,

  // date tools
  getLastThreeMonthNames,

  // localStorage
  getSideMenuState,
  setSideMenuState,

  // mails pagination
  getCurrentPageContent,
  getMinIndex,
  getMaxIndex
};
