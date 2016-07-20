export const appConfig = {
  // dev mode to mock async data for instance
  DEV_MODE: true,
  // When you need some kind "console spam" to debug
  DEBUG_ENABLED: true,
  // fake delay to mock async
  FAKE_ASYNC_DELAY: 1000,


  APP_NAME: 'Outil Call',

  // views (pour config redux views actions et store view.currentView)
  views: {
    home: {
      viewName: 'Accueil',
      path: '/'
    },
    mailbox: {
      reception: {
        viewName: 'Boîte de réception',
        path: '/mailbox/reception'
      },
      envoi: {
        viewName: 'Boîte d\'envoi',
        path: '/mailbox/envoi'
      }
    },
    recherche: {
      viewName: 'Recherche',
      path: '/recherche'
    },
    createFicheContactCourier: {
      viewName: 'Céation Fiche Contact Courier',
      path: '/create/ficheContactCourier'
    },
    createFicheContactMail: {
      viewName: 'Céation Fiche Contact Mail',
      path: '/create/ficheContactMail'
    },
    createFicheContactTelephone: {
      viewName: 'Céation Fiche Contact Telephone',
      path: '/create/ficheContactTelephone'
    },
    createFicheContactPersonnes: {
      viewName: 'Céation Fiche Contact Personnes',
      path: '/create/ficheContactPersonnes'
    }
  },

  formatDate: {
    defaut: 'DD/MM/YYYY-HH:mm:ss'
  },

  // connection status text references
  CONNECTION_STATUS: {
    online: 'online',
    disconnected: 'disconnected'
  },
  // fiche traitees dont en retard data API
  fichesTraitees: {
    data: {
      API: 'api/fichestraitees'
    }
  },
  // fiche par canal API
  fichesParCanal: {
    data: {
      API: 'api/fichesparcanal'
    }
  },
  // princiapux motifs stats API
  principauxMotifs: {
    data: {
      API: 'api/principauxmotifs'
    }
  },
  // eaningGraph config
  earningGraph: {
    data: {
      API: 'api/earnigGraphData'
    }
  },
  teamMates:{
    data: {
      API: 'api/teamMates'
    }
  },
  // stats config
  stats: {
    // pas de donnee de legende ou initialState
    legendeInit: [{
      label: 'légende non disponible',
      color: '#ECECEC'
    }],
    labelNonDef: 'non défini',
    colorNonDef: '#ECECEC'
  },

  // userInfos config
  userInfos: {
    data: {
      API: 'api/userInfos'
    }
  },

  // userGroupActivity config
  userGroupActivity: {
    data: {
      API: 'api/userGroupActivity'
    }
  },

  HELLO_WORD: 'Bonjour'

};
