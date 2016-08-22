import moment         from 'moment';
import { appConfig }  from '../../../config';
import {
  // postNewMail
}                     from '../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;
// new mail init (set mailBoxId or default values)
export const REPLY_MAIL_INIT = 'REPLY_MAIL_INIT';
// cancel new mail (reset content)
export const REPLY_MAIL_CANCEL = 'REPLY_MAIL_CANCEL';
// mail destinataire
export const REPLY_MAIL_DESTINATAIRE_CHANGE = 'REPLY_MAIL_DESTINATAIRE_CHANGE';
// mail subject
export const REPLY_MAIL_SUBJECT_CHANGE = 'REPLY_MAIL_SUBJECT_CHANGE';
// mail body
export const REPLY_MAIL_BODY_CHANGE = 'REPLY_MAIL_BODY_CHANGE';
// mail attachments
export const REPLY_MAIL_UPDATE_ATTACHMENT_LIST  = 'REPLY_MAIL_UPDATE_ATTACHMENT_LIST';
export const REPLY_MAIL_ADD_ATTACHMENT          = 'REPLY_MAIL_ADD_ATTACHMENT';
export const REPLY_MAIL_ADD_ATTACHMENT_ERROR_ATTACHMENT_NOT_DEFINED = 'REPLY_MAIL_ADD_ATTACHMENT_ERROR_ATTACHMENT_NOT_DEFINED';
export const REPLY_MAIL_ADD_ATTACHMENT_ERROR_FILE_NAME_EXISTS = 'REPLY_MAIL_ADD_ATTACHMENT_ERROR_FILE_NAME_EXISTS';
export const REPLY_MAIL_REMOVE_ATTACHMENT       = 'REPLY_MAIL_REMOVE_ATTACHMENT';
// post
// export const REPLY_MAIL_REQUEST_SAVE   = 'REPLY_MAIL_REQUEST_SAVE';
// export const REPLY_MAIL_CONFIRMED_SAVE = 'REPLY_MAIL_CONFIRMED_SAVE';
// export const REPLY_MAIL_ERROR_SAVE     = 'REPLY_MAIL_ERROR_SAVE';


// reply mail init (set mailBoxId or default values)
export const replyMailInit = (boiteMailId = 0, time = moment().format(formatDate)) => {
  return {
    type:       REPLY_MAIL_INIT,
    boiteMailId,
    time
  };
};
// cancel reply mail (reset content)
export const replyMailCancel = (boiteMailId = 0, time = moment().format(formatDate)) => {
  return {
    type:       REPLY_MAIL_CANCEL,
    boiteMailId,
    time
  };
};
// mail destinataire
export const replyMailDestinatairesChange = (boiteMailId = 0, destinataires = [], time = moment().format(formatDate)) => {
  return {
    type:       REPLY_MAIL_DESTINATAIRE_CHANGE,
    boiteMailId,
    destinataires,
    time
  };
};
// mail subject
export const replyMailSubjectChange = (boiteMailId = 0, subject,  time = moment().format(formatDate)) => {
  return {
    type:       REPLY_MAIL_SUBJECT_CHANGE,
    boiteMailId,
    subject,
    time
  };
};
// mail body
export const replyMailBodyChange = (boiteMailId = 0, body, time = moment().format(formatDate)) => {
  return {
    type:       REPLY_MAIL_BODY_CHANGE,
    boiteMailId,
    body,
    time
  };
};
// mail attachments
const replyMailUpdateAttachementsList = (boiteMailId = 0, attachments = [], time = moment().format(formatDate)) => {
  return {
    type: REPLY_MAIL_UPDATE_ATTACHMENT_LIST,
    boiteMailId,
    attachments,
    hasAttachments: attachments.length > 0 ? true : false,
    time
  };
};
const replyMailAddAttachementErrorFileNoDefined = (boiteMailId = 0, time = moment().format(formatDate)) => {
  return {
    type: REPLY_MAIL_ADD_ATTACHMENT_ERROR_ATTACHMENT_NOT_DEFINED,
    boiteMailId,
    time
  };
};
const replyMailAddAttachement = (boiteMailId = 0, attachment = null, time = moment().format(formatDate)) => {
  return {
    type: REPLY_MAIL_ADD_ATTACHMENT,
    attachment,
    boiteMailId,
    time
  };
};
const replyMailAddAttachmentErrorFileNameExists = (boiteMailId = 0, attachment = null, time = moment().format(formatDate)) => {
  return {
    type: REPLY_MAIL_ADD_ATTACHMENT_ERROR_FILE_NAME_EXISTS,
    attachment,
    boiteMailId,
    time
  };
};
export const replyMailAddAttachement = (boiteMailId = 0, attachment = null) => {
  return (dispatch, getState) => {
    if (attachment && attachment.name) {
      const state = getState();
      const { replyMailContent: { attachments } } = state;

      dispatch(replyMailAddAttachement(boiteMailId, attachment.name));

      const fileExists = attachments.findIndex(att => att.name === attachment.name);
      if (fileExists === -1) {
        dispatch(replyMailUpdateAttachementsList(boiteMailId, [...attachments, attachment]));
      } else {
        dispatch(replyMailAddAttachmentErrorFileNameExists(boiteMailId, attachment.name));
      }
    } else {
      dispatch(replyMailAddAttachementErrorFileNoDefined(boiteMailId));
    }
  };
};
const replyMailRemoveAttachement = (boiteMailId = 0, attachment = null, time = moment().format(formatDate)) => {
  return {
    type: REPLY_MAIL_REMOVE_ATTACHMENT,
    attachment,
    boiteMailId,
    time
  };
};
export const replyMailRemoveAttachement = (boiteMailId = 0, attachmentName = '') => {
  return (dispatch, getState) => {
    dispatch(replyMailRemoveAttachement(boiteMailId, attachmentName));

    if (attachmentName) {
      const state = getState();
      const { replyMailContent: { attachments } } = state;
      const newAttchmentsList = attachments.filter(att => att.name !== attachmentName);

      dispatch(replyMailUpdateAttachementsList(boiteMailId, [...newAttchmentsList]));
    } else {
      dispatch(replyMailAddAttachementErrorFileNoDefined(boiteMailId));
    }
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
