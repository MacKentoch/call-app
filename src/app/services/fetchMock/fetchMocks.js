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
  mailContentMock,
  searchBenefResultMock,
  gestBenefMock
}                       from '../../mocks';

import {
  isValidSearchPayload
}                       from '../API/search/searchBenef';


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
    return Promise.reject({'Error': 'fetchMockMailContent needs a valid "mailId"'});
  }
  if (!parseInt(mailboxId, 10) && !parseInt(mailboxId, 10) > 0) {
    return Promise.reject({'Error': 'fetchMockMailContent needs a valid "mailboxId"'});
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
    return Promise.reject({'error': 'fetchMockSendNewMail need a valid mailBoxId'});
  }
  if (!userLogin) {
    return Promise.reject({'error': 'fetchMockSendNewMail need a valid user login'});
  }
  if (!newMailContent) {
    return Promise.reject({'error': 'fetchMockSendNewMail need a valid new mail content'});
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


export const fetchMockSearchBenef = (searchPayload, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!isValidSearchPayload(searchPayload)) {
    return Promise.reject({
      'error': 'fetchMockSearchBenef error: payload is not a valid search payload object',
      'payload': searchPayload
    });
  }

  return new Promise(
    resolve => {
      setTimeout(
       () => resolve([...searchBenefResultMock]
       ),
       timeToWait
     );
    }
  );
};

export const fetchMockGetGestBenef = (benefId, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!benefId) {
    return Promise.reject({
      'error': 'fetchMockGetGestBenef error: benefId is not valid'
    });
  }

  return new Promise(
    resolve => {
      setTimeout(
        () => resolve({...gestBenefMock}),
        timeToWait
      );
    }
  );
};

export const fetchMockPostBenefIdentite = (payload, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!payload) {
    return Promise.reject({
      'error': 'fetchMockPostBenefIdentite has no valid payload'
    });
  }
  // if (!parseInt(payload.id, 10)) {
  //   return Promise.reject({
  //     'error': 'fetchMockPostBenefIdentite payload is not valid'
  //   });
  // }
  // BACKEND TIP: if !payload.id => it means insert other update this id
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({
         status: 'success',
         id: 10
       }),
       timeToWait
     );
    }
  );
};

export const fetchMockPostBenefContactData = (payload, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!payload) {
    return Promise.reject({
      'error': 'fetchMockPostBenefContactData has no valid payload'
    });
  }
  // if (!parseInt(payload.id, 10)) {
  //   return Promise.reject({
  //     'error': 'fetchMockPostBenefContactData payload is not valid'
  //   });
  // }

  // BACKEND TIP: if !payload.id => it means insert other update this id
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({success: true}),
       timeToWait
     );
    }
  );
};
