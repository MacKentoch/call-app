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
      viewName: 'Accueil'
    },
    recherche: {
      viewName: 'Recherche'
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

  // userInfos config
  userInfos: {
    data: {
      API: 'api/userInfos'
    }
  },

  HELLO_WORD: 'Bonjour'

};
