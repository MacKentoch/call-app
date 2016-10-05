import App                    from './app/App';
import HomeConnected          from './home/Home';
import RechercheConnected     from './recherche/Recherche';
import {
  FicheContactCourierConnected,
  FicheContactMailConnected,
  FicheContactTelephoneConnected,
  FicheContactPersonnesConnected
}                             from './create';
import {
  MailboxConnected,
  MailConsultConnected,
  MailboxReceptionConnected,
  MailboxEnvoiConnected,
  MailWriteNewConnected,
  MailReplyConnected
}                             from './mailbox';
import {
  RechercheBenefModalConnected,
  CreateNewDossierBenefModalConnected,
  SelectBenefModalConnected
}                             from './modals';
import GestBeneficiairesConnected from './gestBeneficiaires/GestBeneficiaires';
import GestContactsConnected from './gestContacts/GestContacts';


export {
  App,
  HomeConnected,
  RechercheConnected,

  // create
  FicheContactCourierConnected,
  FicheContactMailConnected,
  FicheContactTelephoneConnected,
  FicheContactPersonnesConnected,

  // mailbox
  MailboxConnected,
  MailConsultConnected,
  MailboxReceptionConnected,
  MailboxEnvoiConnected,
  MailWriteNewConnected,
  MailReplyConnected,

  // gest benef:
  GestBeneficiairesConnected,

  // gest contacts:
  GestContactsConnected,

  // modals
  RechercheBenefModalConnected,
  CreateNewDossierBenefModalConnected,
  SelectBenefModalConnected
};
