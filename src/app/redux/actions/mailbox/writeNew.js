import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  // postNewMail
}                     from '../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const NEW_MAIL_DESTINATAIRE_CHANGE = 'NEW_MAIL_DESTINATAIRE_CHANGE';

export const NEW_MAIL_SUBJECT_CHANGE = 'NEW_MAIL_SUBJECT_CHANGE';

export const NEW_MAIL_BODY_CHANGE     = 'NEW_MAIL_BODY_CHANGE';

export const NEW_MAIL_UPDATE_ATTACHMENT_LIST  = 'NEW_MAIL_UPDATE_ATTACHMENT_LIST';
export const NEW_MAIL_ADD_ATTACHMENT          = 'NEW_MAIL_ADD_ATTACHMENT';
export const NEW_MAIL_REMOVE_ATTACHMENT       = 'NEW_MAIL_REMOVE_ATTACHMENT';

// post
// export const REQUEST_SAVE_NEW_MAIL   = 'REQUEST_SAVE_NEW_MAIL';
// export const CONFIRMED_SAVE_NEW_MAIL = 'CONFIRMED_SAVE_NEW_MAIL';
// export const ERROR_SAVE_NEW_MAIL     = 'ERROR_SAVE_NEW_MAIL';
// cancel
export const CANCEL_NEW_MAIL  = 'CANCEL_NEW_MAIL';


export const newMailDestinatairesChange = (boiteMailId = 0, destinataires = [], time = moment().format(formatDate)) => {
  return {
    type:       NEW_MAIL_DESTINATAIRE_CHANGE,
    boiteMailId,
    destinataires,
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

export const newMailCancel = (boiteMailId = 0, time = moment().format(formatDate)) => {
  return {
    type:       CANCEL_NEW_MAIL,
    boiteMailId,
    time
  };
};

const newMailUpdateAttachementsList = (boiteMailId = 0, attachments = [], time = moment().format(formatDate)) => {
  return {
    type:       NEW_MAIL_UPDATE_ATTACHMENT_LIST,
    boiteMailId,
    attachments,
    hasAttachments: attachments.length > 0 ? true : false,
    time
  };
};
const addAttachement = (boiteMailId = 0, attachment = null, time = moment().format(formatDate)) => {
  return {
    type: NEW_MAIL_ADD_ATTACHMENT,
    attachment,
    boiteMailId,
    time
  };
};
export const newMailAddAttachement = (boiteMailId = 0, attachment = null) => {
  return (dispatch, getState) => {
    dispatch(addAttachement(boiteMailId, attachment));

    if (attachment && hasFileNameProp(attachment)) {
      const state = getState();
      const { writeNewMailContent: { attachments } } = state;
      dispatch(newMailUpdateAttachementsList(boiteMailId, [...attachments, attachment]));
    }
  };
};

const removeAttachement = (boiteMailId = 0, attachment = null, time = moment().format(formatDate)) => {
  return {
    type: NEW_MAIL_REMOVE_ATTACHMENT,
    attachment,
    boiteMailId,
    time
  };
};
export const newMailRemoveAttachement = (boiteMailId = 0, attachment = null) => {
  return (dispatch, getState) => {
    dispatch(removeAttachement(boiteMailId, attachment));

    if (attachment && hasNameProperty(attachment)) {
      const state = getState();
      const { writeNewMailContent: { attachments } } = state;
      const newAttchmentsList = attachments.filter(att => att.name !== attachment.name);
      dispatch(newMailUpdateAttachementsList(boiteMailId, [...newAttchmentsList]));
    }
  };
};


// utils
function hasNameProperty(obj) {
  return Object.prototype.hasOwnProperty.call(obj, 'name');
}

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
