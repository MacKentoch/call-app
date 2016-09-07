import { getUserBoitesMails }     from './user/userBoitesMails';
import { getUserGroupActivity }   from './user/userGroupActivity';
import { getUserInfo }            from './user/userInfo';
import { getInboxContent }        from './mailbox/reception';
import { getSentboxContent }      from './mailbox/envoi';
import { getStatsFichesParCanal } from './stats/fichesParCanal';
import { getMailContent }         from './mailbox/consulter';
import { sendNewMail }            from './mailbox/sendNewMail';
import { searchBenef }            from './search/searchBenef';
import {
  getGestBenef,

  getGestBenefIdentite,
  postGestBenefIdentite,

  getGestBenefContactData,
  postGestBenefContactData,

  getGestBenefDossiers,
  addGestBenefNewDossier
}                                 from './gestbenef/gestBenef';

export {
  getUserBoitesMails,
  getUserGroupActivity,
  getUserInfo,
  getInboxContent,
  getSentboxContent,
  getStatsFichesParCanal,
  getMailContent,
  sendNewMail,
  searchBenef,
  // gest Benef
  getGestBenef,
  getGestBenefIdentite,
  postGestBenefIdentite,
  getGestBenefContactData,
  postGestBenefContactData,
  getGestBenefDossiers,
  addGestBenefNewDossier
};
