import { appConfig } from '../config';

export const navigation = {
  brand:      'reactDirectorAdmin',
  leftLinks:  [],
  rightLinks: [
    {
      label:      'Home',
      link:       '/',
      view:       'home',
      isRouteBtn: true
    },
    {
      label:      'About',
      link:       '/about',
      view:       'about',
      isRouteBtn: true
    }
  ],
  sideNavMenu: [
    // group menu #1
    {
      id: 1,
      groupe: 'General',
      menus: [
        {
          name: appConfig.views.home.viewName,
          linkTo: '/',
          faIconName: 'fa-home'
        },
        {
          name: appConfig.views.recherche.viewName,
          linkTo: appConfig.views.recherche.path,
          faIconName: 'fa-search'
        }
      ]
    },
    // group menu #2
    {
      id: 2,
      groupe: 'GestBen',
      menus: [
        {
          name: appConfig.views.beneficaires.recherche.viewName,
          linkTo: '/',
          faIconName: 'fa-search'
        },
        {
          name: appConfig.views.beneficaires.maj.viewName,
          linkTo: appConfig.views.beneficaires.maj.path,
          faIconName: 'fa-edit'
        }
      ]
    },
    // group menu #3
    {
      id: 3,
      groupe: 'Activities',
      menus: [
        {
          name: appConfig.views.activites.viewName,
          linkTo: '/',
          faIconName: 'fa-file-o'
        }
      ]
    },
    // group menu #4 (should depend on User mailboxes)
    {
      id: 4,
      groupe: 'MailBoxes',
      // menus content for mailbox should come from backend query
      menus: [
        // {
        //   name: 'MailBox #1',
        //   linkTo: '/',
        //   faIconName: 'fa-inbox',
        //   itemCount: 26
        // },
        // {
        //   name: 'MailBox #2',
        //   linkTo: '/',
        //   faIconName: 'fa-inbox',
        //   itemCount: 2
        // }
      ]
    }
  ]
};
