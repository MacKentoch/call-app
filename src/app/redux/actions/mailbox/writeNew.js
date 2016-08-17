import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  // postNewMail
}                     from '../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const NEW_MAIL_ADD_DESTINATAIRE    = 'NEW_MAIL_ADD_DESTINATAIRE';
export const NEW_MAIL_REMOVE_DESTINATAIRE = 'NEW_MAIL_REMOVE_DESTINATAIRE';

export const NEW_MAIL_SUBJECT_CHANGE = 'NEW_MAIL_SUBJECT_CHANGE';

export const NEW_MAIL_BODY_CHANGE     = 'NEW_MAIL_BODY_CHANGE';

// export const ADD_NEW_MAIL_ATTACHMENT    = 'ADD_NEW_MAIL_ATTACHMENT';
// export const REMOVE_NEW_MAIL_ATTACHMENT = 'REMOVE_NEW_MAIL_ATTACHMENT';

// post
// export const REQUEST_SAVE_NEW_MAIL   = 'REQUEST_SAVE_NEW_MAIL';
// export const CONFIRMED_SAVE_NEW_MAIL = 'CONFIRMED_SAVE_NEW_MAIL';
// export const ERROR_SAVE_NEW_MAIL     = 'ERROR_SAVE_NEW_MAIL';
// cancel
// export const CANCEL_NEW_MAIL  = 'CANCEL_NEW_MAIL';


export const newMailAddDestinataire = (boiteMailId = 0, destinataire = '', destinataires = [], time = moment().format(formatDate)) => {
  const updatedDestinataires = [...destinataires, destinataire];
  return {
    type:       NEW_MAIL_ADD_DESTINATAIRE,
    boiteMailId,
    destinataires: updatedDestinataires,
    time
  };
};
export const newMailRemoveDestinataire = (boiteMailId = 0, destinataire = '', destinataires = [], time = moment().format(formatDate)) => {
  const updatedDestinataires = destinataires.filter(
    dest => dest !== destinataire
  );

  return {
    type:       NEW_MAIL_REMOVE_DESTINATAIRE,
    boiteMailId,
    destinataires: updatedDestinataires,
    time
  };
};


export const newMailSubjectChange = (boiteMailId = 0, subject,  time = moment().format(formatDate)) => {
  return {
    type:       NEW_MAIL_SUBJECT_CHANGE,
    boiteMailId,
    subject,
    time
  };
};

export const newMailBodyChange = (boiteMailId = 0, body, time = moment().format(formatDate)) => {
  return {
    type:       NEW_MAIL_BODY_CHANGE,
    boiteMailId,
    body,
    time
  };
};


// const requestSaveNewMail = (boiteMailId = 0, time = moment().format(formatDate)) => {
//   return {
//     type:       REQUEST_SAVE_NEW_MAIL,
//     isFetching: true,
//     boiteMailId,
//     saveNewMailDone: false,
//     time
//   };
// };
// const confirmedSaveNewMail = (boiteMailId = 0, time = moment().format(formatDate)) => {
//   return {
//     type:       CONFIRMED_SAVE_NEW_MAIL,
//     isFetching: false,
//     boiteMailId,
//     saveNewMailDone: true,
//     time
//   };
// };
// const errorSaveNewMail = (boiteMailId = 0, time = moment().format(formatDate)) => {
//   return {
//     type:       ERROR_SAVE_NEW_MAIL,
//     isFetching: false,
//     boiteMailId,
//     saveNewMailDone: false,
//     time
//   };
// };

// const receivedMailContent = (mailId = 0, boiteMailId = 0, data, time = moment().format(formatDate)) => {
//   const mail = data.mail || {};
//   return {
//     type:       RECEIVED_MAIL_CONTENT,
//     isFetching: false,
//     mailId,
//     boiteMailId,
//     mail,
//     time
//   };
// };
// const errorMailContent = (mailId = 0, boiteMailId = 0, time = moment().format(formatDate)) => {
//   return {
//     type:       ERROR_MAIL_CONTENT,
//     isFetching: false,
//     mailId,
//     boiteMailId,
//     time
//   };
// };
// const fetchMailContent = (mailId, boiteMailId) => dispatch => {
//   if (!parseInt(mailId, 10)) {
//     dispatch(errorMailContent(mailId, boiteMailId));
//     /* eslint-disable no-throw-literal */
//     throw 'Error: fetchMailContent requires a valid mailId';
//     /* eslint-enable no-throw-literal */
//   }
//
//   if (!parseInt(boiteMailId, 10)) {
//     dispatch(errorMailContent(mailId, boiteMailId));
//     /* eslint-disable no-throw-literal */
//     throw 'Error: fetchMailContent requires a valid boiteMailId';
//     /* eslint-enable no-throw-literal */
//   }
//
//   dispatch(requestMailContent(mailId, boiteMailId));
//
//   const mailIdNum = parseInt(mailId, 10);
//   const boiteMailIdNum = parseInt(boiteMailId, 10);
//
//   if (appConfig.DEV_MODE) {
//     // DEV ONLY
//     fetchMockMailContent(mailIdNum, boiteMailIdNum)
//       .then(
//         data => dispatch(receivedMailContent(mailIdNum, boiteMailIdNum, data))
//       );
//   } else {
//     getMailContent(mailId, boiteMailIdNum)
//       .then(
//         data => dispatch(receivedMailContent(mailIdNum, boiteMailIdNum, data)))
//       .catch(
//         err => {
//           dispatch(errorMailContent(mailIdNum, boiteMailIdNum));
//           if (appConfig.DEBUG_ENABLED) {
//             /* eslint-disable no-console */
//             console.warn('fetchMailContent error: ', err);
//             /* eslint-enable no-console */
//           }
//         }
//       );
//   }
// };
// export const fetchMailContentIfNeeded = (mailId, boiteMailId) => (dispatch, getState) => {
//   if (shouldFetchMailContent(getState(), mailId, boiteMailId)) {
//     return dispatch(fetchMailContent(mailId, boiteMailId));
//   }
//   return null;
// };
// /* eslint-disable no-unused-vars */
// function shouldFetchMailContent(state, mailId, mailboxId) {
//   const mailContent = state.mailContent;
//   // just check wether fetching (assuming data could be refreshed and should not persist in store)
//   if (mailContent.isFetching) {
//     return false;
//   } else {
//     return true;
//   }
// }
// /* eslint-enable no-unused-vars */
