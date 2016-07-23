import Home             from './home/Home';
import Recherche        from './recherche/Recherche';
import MailboxReception from './mailbox/reception/MailboxReception';
import MailboxEnvoi     from './mailbox/envoi/MailboxEnvoi';
import Modals           from './modals/Modals';
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
  MailboxReception,
  MailboxEnvoi,

  // create
  FicheContactCourier,
  FicheContactMail,
  FicheContactTelephone,
  FicheContactPersonnes
};
