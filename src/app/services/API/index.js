import { getUserBoitesMails }       from './user/userBoitesMails';
import { getUserGroupActivity }     from './user/userGroupActivity';
import { getUserInfo }              from './user/userInfo';
import { getInboxContent }          from './mailbox/reception';
import { getSentboxContent }        from './mailbox/envoi';
import { getStatsFichesParCanal }   from './stats/fichesParCanal';
import { getMailContent }           from './mailbox/consulter';
import { sendNewMail }              from './mailbox/sendNewMail';
import { searchBenef }              from './search/searchBenef';
import { getGestContactsAllMotifs } from './listMotifsRef';

import {
  getGestBenef,

  getGestBenefIdentite,
  postGestBenefIdentite,

  getGestBenefContactData,
  postGestBenefContactData,

  getGestBenefDossiers,
  addGestBenefNewDossier,
  updateGestBenefDossier,

  getGestBenefAllContactsAndActivites,
  getGestBenefContactsAndActivites
}                                 from './gestbenef/gestBenef';
import {
  getGestContactsNewContact,
  getGestContactsExistingContact,
  getGestContactsFicheContactInit
}                                 from './gestContacts/gestContacts';
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
  addGestBenefNewDossier,
  updateGestBenefDossier,
  getGestBenefAllContactsAndActivites,
  getGestBenefContactsAndActivites,
  // gestContacts:
  getGestContactsNewContact,
  getGestContactsExistingContact,
  getGestContactsFicheContactInit,
  // liste motifs reference:
  getGestContactsAllMotifs
};
