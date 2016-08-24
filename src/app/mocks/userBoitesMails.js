import { appConfig } from '../config';

const boiteReceptionPath  = `${appConfig.views.mailbox.root.path}/${appConfig.views.mailbox.reception.path}`;

export const userBoitesMailsMock = [
  {
    id: 1,
    titre: 'Boite #1',
    name: `${appConfig.views.mailbox.reception.viewName}#1`,
    faIconName: 'fa-inbox',
    linkTo: `${boiteReceptionPath}/1`, // access to inbox for this mailbox id=1
    itemCount: 26
  },
  {
    id: 2,
    titre: 'Boite #2',
    name: `${appConfig.views.mailbox.reception.viewName}#2`,
    linkTo: `${boiteReceptionPath}/2`,
    faIconName: 'fa-inbox',
    itemCount: 1
  },
  {
    id: 3,
    titre: 'Boite #3',
    name: `${appConfig.views.mailbox.reception.viewName}#3`,
    linkTo: `${boiteReceptionPath}/3`,
    faIconName: 'fa-inbox',
    itemCount: 130
  }
];
