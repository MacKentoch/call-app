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
import MailboxReplyMail from './mailboxReplyMail/MailboxReplyMail';
import Chips from './chips/Chips';
import SearchBenefResultList from './searchBenefResultList/SearchBenefResultList';
import CiviliteDropDown from './civiliteDropDown/CiviliteDropDown';
import FormLabel from './formLabel/FormLabel';
import EditValidIcons from './editValidIcons/EditValidIcons';
import TextInput from './textInput/TextInput';
import TelephoneInput from './textInput/TelephoneInput';
import NumssInput from './textInput/NumssInput';
import DateInput from './dateInput/DateInput';
import ListDossiersBeneficaire from './listDossiersBeneficaire/ListDossiersBeneficaire';
import ListContactsEtActivitesBeneficaire from './listContactsEtActivitesBeneficaire/ListContactsEtActivitesBeneficaire';
import StatutFicheDropDown from './statutFicheDropDown/StatutFicheDropDown';
import TypeFicheContactRadio from './typeFicheContactRadio/TypeFicheContactRadio';
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
  CiviliteDropDown,
  FormLabel,
  TextInput,
  DateInput,
  EditValidIcons,
  TelephoneInput,
  NumssInput,
  StatutFicheDropDown,
  TypeFicheContactRadio,

  // mailbox
  MailboxRepertoires,
  MailBoxNewEmailButton,
  MailboxListMails,
  MailboxConsultMail,
  MailboxWriteMail,
  MailboxReplyMail,

  // stats
  FichesTraitee,
  FichesParCanal,
  PrincipauxMotifs,

  // shortcuts
  MailsLink,
  EmailsLink,
  TelephoneLink,
  PersonnesLink,

  // search benefs:
  SearchBenefResultList,

  // gestBenef:
  ListDossiersBeneficaire,
  ListContactsEtActivitesBeneficaire
};
