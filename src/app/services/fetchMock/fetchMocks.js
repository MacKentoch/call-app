import { appConfig }    from '../../config';
import {
  userInfosMockData
}                       from '../../models';
import {
  fichetraitee
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
