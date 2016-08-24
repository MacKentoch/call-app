import Home             from './home/Home';
import Recherche        from './recherche/Recherche';
import {
  Mailbox,
  MailboxReception,
  MailboxEnvoi,
  MailConsult,
  MailWriteNew,
  MailReply
}                       from './mailbox';
// modals:
import Modals           from './modals/Modals';
import {
  RechercheBenefModal
}                       from './modals';
// create
import {
  FicheContactCourier,
  FicheContactMail,
  FicheContactTelephone,
  FicheContactPersonnes
}                     from './create';

export {
  Home,
  Recherche,
  Modals,

  // mailboxes
  Mailbox,
  MailboxReception,
  MailboxEnvoi,
  MailConsult,
  MailWriteNew,
  MailReply,

  // modals
  RechercheBenefModal,

  // create
  FicheContactCourier,
  FicheContactMail,
  FicheContactTelephone,
  FicheContactPersonnes
};
