import { appConfig }    from '../../config';
import {
  fichetraitee,
  ficheparcanal,
  principauxmotifs,
  userInfosMockData,
  userGroupActivityMock,
  userBoitesMailsMock,
  listMailsMock
}                       from '../../mocks';

export const fetchMockUserInfosData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({...userInfosMockData}),
       timeToWait
     );
    }
 );
};

export const fetchMockUserGroupActivityData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve([...userGroupActivityMock]),
       timeToWait
     );
    }
 );
};

export const fetchMockUserBoitesMailsData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve([...userBoitesMailsMock]),
       timeToWait
     );
    }
 );
};

export const fetchMockFichesTraiteesData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({...fichetraitee}),
       timeToWait
     );
    }
 );
};

export const fetchMockFichesParCanalData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({...ficheparcanal}),
       timeToWait
     );
    }
 );
};

export const fetchMockPrincipauxMotifsData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({...principauxmotifs}),
       timeToWait
     );
    }
 );
};

export const fetchMockListMails = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({...listMailsMock}),
       timeToWait
     );
    }
 );
};
