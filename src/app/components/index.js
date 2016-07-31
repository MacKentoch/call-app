import TodoList from './todoList/TodoList';
import Notifications from './notifications/Notifications';
import TeamMates from './teamMates/TeamMates';
import TwitterFeed from './twitterFeed/TwitterFeed';
import WorkProgress from './workProgress/WorkProgress';
import StatsCard from './statsCard/StatsCard';
import IsFetching from './isFetching/IsFetching';
import ActiviteGroupe from './activiteGroupe/ActiviteGroupe';
import ListBoitesMails from './listBoitesMails/ListBoitesMails';
import Horloge from './horloge/Horloge';
import BackToTop from './backToTop/BackToTop';
import MailboxRepertoires from './mailboxRepertoires/MailboxRepertoires';
import MailboxListMails from './mailboxListMails/MailboxListMails';
import MailBoxNewEmailButton from './mailBoxNewEmailButton/MailBoxNewEmailButton';
import MailboxConsultMail from './mailboxConsultMail/MailboxConsultMail';
import MailboxWriteMail from './mailboxWriteMail/MailboxWriteMail';
import Chips from './chips/Chips';

import {
  FichesTraitee,
  FichesParCanal,
  PrincipauxMotifs
}                 from './stats';
import {
  MailsLink,
  EmailsLink,
  TelephoneLink,
  PersonnesLink
}                 from './shortcuts';

export {
  // common components
  TodoList,
  Notifications,
  TeamMates,
  TwitterFeed,
  WorkProgress,
  StatsCard,
  IsFetching,
  ActiviteGroupe,
  ListBoitesMails,
  Horloge,
  BackToTop,
  Chips,

  // mailbox
  MailboxRepertoires,
  MailBoxNewEmailButton,
  MailboxListMails,
  MailboxConsultMail,
  MailboxWriteMail,

  // stats
  FichesTraitee,
  FichesParCanal,
  PrincipauxMotifs,

  // shortcuts
  MailsLink,
  EmailsLink,
  TelephoneLink,
  PersonnesLink
};
