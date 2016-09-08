export const appConfig = {
  // dev mode to mock async data for instance
  DEV_MODE: true,
  // When you need some kind "console spam" to debug
  DEBUG_ENABLED: true,
  // fake delay to mock async
  FAKE_ASYNC_DELAY: 1000,

  APP_NAME: 'Call App',

  searchBenefInputFilters: [
    {
      id: 'START_WITH',
      libelle: 'Commence par'
    },
    {
      id: 'EQUALS',
      libelle: 'est égale à'
    },
    {
      id: 'END_WITH',
      libelle: 'termine par'
    }
  ],
  // do not change label or update match in RechercheBenefModal -> method handlesOnCriteriaClick
  searchCriterias: [
    {
      active: false,
      label: 'Identifiant'
    },
    {
      active: true,
      label: 'Nom'
    },
    {
      active: false,
      label: 'Prénom'
    },
    {
      active: false,
      label: 'Numéro sécu.'
    }
  ],

  fileMimeTypes: [
    // txt:
    'txt',
    'text/plain',
    // zip:
    'zip',
    'application/x-compressed',
    'application/x-zip-compressed',
    'application/zip',
    'multipart/x-zip',
    // rar
    'rar',
    // 7zip:
    '7zip',
    // pdf:
    'pdf',
    'application/pdf',
    // doc:
    'doc',
    'application/msword',
    'docx',
    // excel:
    'xls',
    'application/excel',
    'application/vnd.ms-excel',
    'application/x-excel',
    'application/x-msexcel',
    'xlsx',
    // csv:
    'csv',
    // images:
    'png',
    'image/png',
    'jpg',
    'jpeg',
    'image/jpeg',
    'image/pjpeg',
    'bmp',
    'image/bmp',
    'image/x-windows-bmp'
  ],

  // views (pour config redux views actions et store view.currentView)
  views: {
    home: {
      viewName: 'Accueil',
      path: '/'
    },
    mailbox: {
      root: {
        viewName: 'Boîte mail',
        path: 'mailbox'
      },
      reception: {
        viewName: 'Boîte de réception',
        path: 'reception'
      },
      envoi: {
        viewName: 'Boîte d\'envoi',
        path: 'envoi'
      },
      consult: {
        viewName: 'Consultation d\'email',
        path: 'consult'
      },
      writeNew: {
        viewName: 'Rédaction nouvel email',
        path: 'writeNew'
      },
      reply: {
        viewName: 'Réponse',
        path: 'replyMail'
      }
    },
    recherche: {
      viewName: 'Recherche',
      path: 'recherche'
    },
    createFicheContactCourier: {
      viewName: 'Céation Fiche Contact Courier',
      path: 'create/ficheContactCourier'
    },
    createFicheContactMail: {
      viewName: 'Céation Fiche Contact Mail',
      path: 'create/ficheContactMail'
    },
    createFicheContactTelephone: {
      viewName: 'Céation Fiche Contact Telephone',
      path: 'create/ficheContactTelephone'
    },
    createFicheContactPersonnes: {
      viewName: 'Céation Fiche Contact Personnes',
      path: 'create/ficheContactPersonnes'
    },
    beneficaires: {
      recherche: {
        viewName: 'Recherche ben.',
        path: 'recherche/benef'
      },
      maj: {
        viewName: 'Mise à jour ben.',
        path: 'maj/benef'
      }
    },
    activites: {
      viewName: 'Fiche groupe',
      path: 'consult/fichGroup'
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

  gestBenef: {
    getData: {
      API: 'api/gestBenef'
    },
    getIdentite: {
      API: 'api/gestBenefIdentite'
    },
    postIdentite: {
      API: 'api/gestBenefIdentite'
    },
    getContactData: {
      API: 'api/gestBenefContactData'
    },
    postContactData: {
      API: 'api/gestBenefContactData'
    },
    getDossiers: {
      API: 'api/gestBenefDossiers'
    },
    addNewDossier: {
      API: 'api/gestBenefAddDossier'
    },
    updateDossier: {
      API: 'api/gestBenefUpdateDossier'
    }
  },

  // userGroupActivity config
  userGroupActivity: {
    data: {
      API: 'api/userGroupActivity'
    }
  },

  // user mailboxes list
  userBoitesMails: {
    data: {
      API: 'api/userBoitesMails'
    }
  },

  // inbox content
  inbox: {
    data: {
      API: 'api/inbox'
    }
  },

  // inbox content
  sentbox: {
    data: {
      API: 'api/sentbox'
    }
  },

  // inbox content
  consultMail: {
    data: {
      API: 'api/consultMail'
    }
  },

  // send new mail API (POST with or without files attachements)
  sendNewMail: {
    POST: {
      API: 'api/sendNewMail'
    }
  },

  // home stats : fiche par canal
  statsFichesParCanal: {
    data: {
      API: 'api/statsFichesParCanal'
    }
  },

  // search benef
  searchBenef: {
    POST: {
      API: 'api/search'
    }
  },

  editableDomaine: 'ssh',

  HELLO_WORD: 'Bonjour'

};
