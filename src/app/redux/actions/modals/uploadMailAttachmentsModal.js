import moment         from 'moment';
import { appConfig }  from '../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

export const SHOW_UPLOAD_MAIL_ATTACHMENT_MODAL = 'SHOW_UPLOAD_MAIL_ATTACHMENT_MODAL';
export const HIDE_UPLOAD_MAIL_ATTACHMENT_MODAL = 'HIDE_UPLOAD_MAIL_ATTACHMENT_MODAL';


export const showUploadMailAttachmentsModal = (time = moment().format(formatDate)) => {
  return {
    type: SHOW_UPLOAD_MAIL_ATTACHMENT_MODAL,
    time
  };
};

export const hideUploadMailAttachmentsModal = (time = moment().format(formatDate)) => {
  return {
    type: HIDE_UPLOAD_MAIL_ATTACHMENT_MODAL,
    time
  };
};
