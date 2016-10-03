export const gestBenefDossierActiviteMock = [
  {
    id: 1,
    numDossier: '1543',
    numFiche: 65,
    dateCreation: '01/01/2016',
    dateReception: '31/12/2015',
    canal: 'Mail', // one of 'Mail', 'Téléphone', 'Courrier'
    reclamation: false,
    statut: 'En cours', // one of 'En cours', 'Clôturée', 'Terminée',
    creePar: 'John Doe',
    traiteePar: 'John Doe',
    ficheTransmiseA: 'Jannette Doe',
    motifs: 'multiples',
    delais: 3 // unit is day
  },
  {
    id: 2,
    numDossier: '5673',
    numFiche: 112,
    dateCreation: '01/01/2016',
    dateReception: '31/12/2015',
    canal: 'Courrier', // one of 'Mail', 'Téléphone', 'Courrier'
    reclamation: true,
    statut: 'Clôturée', // one of 'En cours', 'Clôturée', 'Terminée',
    creePar: 'John Doing',
    traiteePar: 'John Doing',
    ficheTransmiseA: 'Jane Doing',
    motifs: 'autres',
    delais: 1 // unit is day
  },
  {
    id: 3,
    numDossier: '45',
    numFiche: 113,
    dateCreation: '01/01/2016',
    dateReception: '31/12/2015',
    canal: 'Téléphone', // one of 'Mail', 'Téléphone', 'Courrier'
    reclamation: true,
    statut: 'Clôturée', // one of 'En cours', 'Clôturée', 'Terminée',
    creePar: 'Doug Doing',
    traiteePar: 'John Doe',
    ficheTransmiseA: 'John Doe',
    motifs: 'autres',
    delais: 1 // unit is day
  },
  {
    id: 4,
    numDossier: '1543',
    numFiche: 65,
    dateCreation: '01/01/2016',
    dateReception: '31/12/2015',
    canal: 'Téléphone', // one of 'Mail', 'Téléphone', 'Courrier'
    reclamation: false,
    statut: 'En cours', // one of 'En cours', 'Clôturée', 'Terminée',
    creePar: 'John Doe',
    traiteePar: 'John Doe',
    ficheTransmiseA: 'Jannette Doe',
    motifs: 'multiples',
    delais: 3 // unit is day
  },
  {
    id: 5,
    numDossier: '1543',
    numFiche: 65,
    dateCreation: '01/01/2016',
    dateReception: '31/12/2015',
    canal: 'Courrier', // one of 'Mail', 'Téléphone', 'Courrier'
    reclamation: true,
    statut: 'En cours', // one of 'En cours', 'Clôturée', 'Terminée',
    creePar: 'John Doe',
    traiteePar: 'John Doe',
    ficheTransmiseA: 'Jannette Doe',
    motifs: 'test autre',
    delais: 3 // unit is day
  }
];
