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
  RechercheBenefModalConnected
}                             from './modals';

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

  // modals
  RechercheBenefModalConnected
};
