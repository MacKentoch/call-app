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
  MailboxReceptionConnected,
  MailboxEnvoiConnected
}                             from './mailbox';

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
  MailboxReceptionConnected,
  MailboxEnvoiConnected
};
