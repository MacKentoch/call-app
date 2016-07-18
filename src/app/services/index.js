import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  encodeBase64
}                     from './utils/fetchTools';
import {
  fetchMockUserInfosData,
  fetchMockFichesTraiteesData,
  fetchMockFichesParCanalData
}                     from './fetchMock/fetchMocks';
import {
  getLastThreeMonthNames
}                     from './utils/dateTools';

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

  // date tools
  getLastThreeMonthNames
};
