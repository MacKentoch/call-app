/* eslint-disable no-throw-literal */
import { appConfig }    from '../../config';
import {
  fichetraitee,
  ficheparcanal,
  principauxmotifs,
  userInfosMockData,
  userGroupActivityMock,
  userBoitesMailsMock,
  listMailsMock,
  mailContentMock
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

export const fetchMockMailContent = (mailId = null, mailboxId = null, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!parseInt(mailId, 10) && !parseInt(mailId, 10) > 0) {
    throw 'Error: fetchMockMailContent needs a valid "mailId"';
  }
  if (!parseInt(mailboxId, 10) && !parseInt(mailboxId, 10) > 0) {
    throw 'Error: fetchMockMailContent needs a valid "mailboxId"';
  }

  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({...mailContentMock}),
       timeToWait
     );
    }
 );
};


export const fetchMockSendNewMail = (mailBoxId, userLogin = null, newMailContent = null, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!parseInt(mailBoxId, 10)) {
    throw 'error: fetchMockSendNewMail need a valid mailBoxId';
  }
  if (!userLogin) {
    throw 'error: fetchMockSendNewMail need a valid user login';
  }
  if (!newMailContent) {
    throw 'error: fetchMockSendNewMail need a valid new mail content';
  }
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({sendNewMail: 'SUCCES'}),
       timeToWait
     );
    }
  );
};
