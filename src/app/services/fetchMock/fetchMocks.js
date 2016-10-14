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
  gestBenefMock,
  gestContactsMock,
  gestContactAllMotifsReferenceMock,
  gestContactFicheContactInitMock,
  gestContactsNumDossierDomaineStatutBenefMock
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

export const fetchMockGetGestBenefDossiers = (benefId, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!benefId) {
    return Promise.reject({
      'error': 'fetchMockGetGestBenefDossiers error: benefId is not valid'
    });
  }

  return new Promise(
    resolve => {
      setTimeout(
        () => resolve([...gestBenefMock.dossiers]),
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
       () => resolve({
         success: true,
         id: 10
       }),
       timeToWait
     );
    }
  );
};

export const fetchMockAddBenefNewDossier = (benefId, payload, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!payload) {
    return Promise.reject({
      'error': 'fetchMockAddBenefNewDossier has no valid payload'
    });
  }
  if (!parseInt(benefId, 10)) {
    return Promise.reject({
      'error': 'fetchMockAddBenefNewDossier should be supplied a valid id'
    });
  }

  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({
         id: 10,
         ...payload
       }),
       timeToWait
     );
    }
  );
};

export const fetchMockUpdateBenefDossier = (payload, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!payload) {
    return Promise.reject({
      'error': 'fetchMockUpdateBenefDossier has no valid payload'
    });
  }

  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({
         ...payload
       }),
       timeToWait
     );
    }
  );
};

export const fetchMockGetGestBenefAllContactsAndActivites = (benefId, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!benefId) {
    return Promise.reject({
      'error': 'fetchMockGetGestBenefAllContactsAndActivites error: benefId is not valid'
    });
  }

  return new Promise(
    resolve => {
      setTimeout(
        () => resolve([...gestBenefMock.contactEtActivites]),
        timeToWait
      );
    }
  );
};

export const fetchMockGetGestBenefContactsAndActivitesForThisNumDossier = (benefId, numDossier, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!benefId) {
    return Promise.reject({
      'error': 'fetchMockGetGestBenefContactsAndActivitesForThisNumDossier error: benefId is not valid'
    });
  }

  if (!numDossier || String(numDossier).trim().length === 0) {
    return Promise.reject({
      'error': 'fetchMockGetGestBenefContactsAndActivitesForThisNumDossier error: numDossier is not valid'
    });
  }

  return new Promise(
    resolve => {
      setTimeout(
        () => resolve(
          gestBenefMock.contactEtActivites.filter(
            contact => contact.numDossier === numDossier
          )
        ),
        timeToWait
      );
    }
  );
};

/*
  Gest contacts
 */
export const fetchMockGetGestContacts = (benefId, contactId, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!benefId) {
    return Promise.reject({
      'error': 'fetchMockGetGestContacts error: benefId is not valid'
    });
  }

  if (!(parseInt(contactId, 10) >= 0)) {
    return Promise.reject({
      'error': 'fetchMockGetGestContacts error: contactId is not valid'
    });
  }

  return new Promise(
   resolve => {
     setTimeout(
       () => resolve({...gestContactsMock}),
       timeToWait
     );
   }
 );
};

/*
  fiche contact
  gestContactFicheContactInitMock
 */
export const fetchMockGetGestContactsFicheContact = (contactId, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!(parseInt(contactId, 10) >= 0)) {
    return Promise.reject({
      'error': 'fetchMockGetGestContactsFicheContact error: contactId is not valid'
    });
  }

  return new Promise(
    resolve => {
      setTimeout(
        () => resolve({...gestContactFicheContactInitMock}),
        timeToWait
      );
    }
  );
};

/*
    liste de motifs:
 */
export const fetchMockGetGestContactsAllMotifs = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
        () => resolve({...gestContactAllMotifsReferenceMock}),
        timeToWait
      );
    }
  );
};

/*
    gestContacts : fetch domaine and staut benef from nulmDossier value
 */
export const fetchMockGestContactsNumDossierDomaineStatutBenef = (numDossier = null, timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  if (!numDossier) {
    return Promise.reject({
      'error': 'fetchMockGestContactsNumDossierDomaineStatutBenef error: numDossier is not valid'
    });
  }

  return new Promise(
    resolve => {
      setTimeout(
        () => resolve({...gestContactsNumDossierDomaineStatutBenefMock}),
        timeToWait
      );
    }
  );
};
