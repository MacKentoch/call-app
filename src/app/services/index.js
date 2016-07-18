import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  encodeBase64
}                     from './utils/fetchTools';
import {
  fetchMockUserInfosData,
  fetchMockFichesTraiteesData
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
  // fecth mocks:
  fetchMockUserInfosData,
  fetchMockFichesTraiteesData,
  // date tools
  getLastThreeMonthNames
};
