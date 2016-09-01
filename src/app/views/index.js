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
// gest beneficaires
import GestBeneficiaires from './gestBeneficiaires/GestBeneficiaires';
// page not found
import PageNotFound from './pageNotFound/PageNotFound';


export {
  Home,
  Recherche,
  Modals,

  // page not found
  PageNotFound,

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
  FicheContactPersonnes,

  // gest beneficaires
  GestBeneficiaires
};
