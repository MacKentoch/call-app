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
  fetchMockAddBenefNewDossier,
  fetchMockUpdateBenefDossier,
  fetchMockGetGestBenefAllContactsAndActivites,
  fetchMockGetGestBenefContactsAndActivitesForThisNumDossier,
  fetchMockGestContactsNumDossierDomaineStatutBenef,
  fetchMockGestContactsFicheContactGroupesDestinataires,
  fetchMockPostGestContactsSaveFicheContact,
  // gest contacts:
  fetchMockGetGestContacts,
  // liste de motifs:
  fetchMockGetGestContactsAllMotifs,
  // fiche contact:
  fetchMockGetGestContactsFicheContact
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
  addGestBenefNewDossier,
  updateGestBenefDossier,
  getGestBenefAllContactsAndActivites,
  getGestBenefContactsAndActivites,
  getGestContactsNewContact,
  getGestContactsExistingContact,
  getGestContactsAllMotifs,
  getGestContactsFicheContactInit,
  getGestContactsFicheContactDomaineStatutfFromNumDossier,
  postGestContactsSaveFicheContact
}                     from './API';

// date tools
import {
  getLastThreeMonthNames,
  isValidDateOrReturnDefault
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
// benef dossier pagination:
import {
  getCurrentSearchDossiersResPageContent,
  getSearchDossiersResMinIndex,
  getSearchDossiersResMaxIndex
}                     from './utils/benefDossiersPagination';
import {
  getCurrentSearchContactsEtActivitesResPageContent,
  getSearchContactsEtActivitesResMinIndex,
  getSearchContactsEtActivitesResMaxIndex
}                     from './utils/benefContactsEtActivitesPagination';
import {
  limitStringToNChars
}                     from './utils/stringManipulation';

export {
  // utils:
  defaultOptions,
  postMethod,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  encodeBase64,
  limitStringToNChars,

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
  fetchMockUpdateBenefDossier,
  fetchMockGetGestBenefAllContactsAndActivites,
  fetchMockGetGestBenefContactsAndActivitesForThisNumDossier,
  fetchMockGestContactsNumDossierDomaineStatutBenef,
  fetchMockGetGestContacts,
  fetchMockGetGestContactsAllMotifs,
  fetchMockGetGestContactsFicheContact,
  fetchMockGestContactsFicheContactGroupesDestinataires,
  fetchMockPostGestContactsSaveFicheContact,

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
  updateGestBenefDossier,
  getGestBenefAllContactsAndActivites,
  getGestBenefContactsAndActivites,
  getGestContactsNewContact,
  getGestContactsExistingContact,
  getGestContactsAllMotifs,
  getGestContactsFicheContactInit,
  getGestContactsFicheContactDomaineStatutfFromNumDossier,
  postGestContactsSaveFicheContact,

  // date tools
  getLastThreeMonthNames,
  isValidDateOrReturnDefault,

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
  getSearchBenefResMaxIndex,

  // benef dossiers pagination:
  getCurrentSearchDossiersResPageContent,
  getSearchDossiersResMinIndex,
  getSearchDossiersResMaxIndex,

  // benef contact et activites pagination:
  getCurrentSearchContactsEtActivitesResPageContent,
  getSearchContactsEtActivitesResMinIndex,
  getSearchContactsEtActivitesResMaxIndex,

  // all motisf reference:
  fetchMockGetGestContactsAllMotifs
};
