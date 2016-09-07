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
  fetchMockSearchBenef,
  fetchMockGetGestBenef,
  fetchMockPostBenefIdentite,
  fetchMockPostBenefContactData,
  fetchMockGetGestBenefDossiers,
  fetchMockAddBenefNewDossier
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
  searchBenef,
  getGestBenef,
  getGestBenefDossiers,
  addGestBenefNewDossier
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
// asp.net date converted better formatted for JS
import {
  cleanAspDotNetStringDate
}                     from './utils/aspNetDateCleaner';
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
  fetchMockGetGestBenef,
  fetchMockPostBenefIdentite,
  fetchMockPostBenefContactData,
  fetchMockGetGestBenefDossiers,
  fetchMockAddBenefNewDossier,

  // API
  getUserBoitesMails,
  getUserGroupActivity,
  getUserInfo,
  getInboxContent,
  getStatsFichesParCanal,
  getMailContent,
  sendNewMail,
  searchBenef,
  getGestBenef,
  getGestBenefDossiers,
  addGestBenefNewDossier,

  // date tools
  getLastThreeMonthNames,

  // asp.net date converted better formatted for JS
  cleanAspDotNetStringDate,

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
