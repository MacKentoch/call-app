// utils:
import {
  defaultOptions,
  postMethod,
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
  fetchMockListMails,
  fetchMockMailContent,
  fetchMockSendNewMail,
  fetchMockSearchBenef
}                     from './fetchMock/fetchMocks';
// API
import {
  getUserBoitesMails,
  getUserGroupActivity,
  getUserInfo,
  getInboxContent,
  getStatsFichesParCanal,
  getMailContent,
  sendNewMail,
  searchBenef
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
// benefs pagination
import {
  getCurrentSearchBenefResPageContent,
  getSearchBenefResMinIndex,
  getSearchBenefResMaxIndex
}                     from './utils/searchBenefResultPagination';

export {
  // utils:
  defaultOptions,
  postMethod,
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
  fetchMockMailContent,
  fetchMockSendNewMail,
  fetchMockSearchBenef,

  // API
  getUserBoitesMails,
  getUserGroupActivity,
  getUserInfo,
  getInboxContent,
  getStatsFichesParCanal,
  getMailContent,
  sendNewMail,
  searchBenef,

  // date tools
  getLastThreeMonthNames,

  // localStorage
  getSideMenuState,
  setSideMenuState,

  // mails pagination
  getCurrentPageContent,
  getMinIndex,
  getMaxIndex,

  // benefs pagination
  getCurrentSearchBenefResPageContent,
  getSearchBenefResMinIndex,
  getSearchBenefResMaxIndex
};
