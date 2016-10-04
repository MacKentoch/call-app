// canaux de contact et activités
const canaux = ['Téléphone', 'Email', 'Courrier', ''];
const contactActiviteStatuts = ['En cours', 'Clôturée'];
const motifsContactEtActivites = ['Multiple', 'Demande justificatifs'];


export const gestBenefMock = {
  // general fields
  id: 1,
  // identité
  civilite: 'M.',
  nom: 'Nom1',
  nomJeuneFille: '',
  prenom: 'Prenom1',
  dateNaissance: '01/01/2016',
  numss: '000000000000001',
  dateDeces: '',
  maritalStatus: 'marié',
  // contact data
  fixedPhone: '0100000002',
  mobilePhone: '0600000003',
  email: 'test@test.test',
  // contact data > sub: adress
  numAdress: '7',
  voie: 'rue du test',
  complementAdr: 'quartier testé',
  codePostal: '0000',
  ville: 'Test',
  pays: 'France',
  // dossiers:
  dossiers: [
    {
      id: 1,
      numDossier: '1543',
      domaine: 'Ret',
      regime: 'reg-test',
      societe: 'societe test',
      numSte: '123',
      statutBenef: 'ret',
      dateEntreeDispositif: '01/04/2015',
      dateSortieDispositif: '',
      dateTauxPlein: '03/08/2015'
    },
    {
      id: 2,
      numDossier: '5673',
      domaine: 'preRet',
      regime: 'reg-pre-ret',
      societe: 'societe test2',
      numSte: '321',
      statutBenef: 'pre-ret',
      dateEntreeDispositif: '08/02/2015',
      dateSortieDispositif: '',
      dateTauxPlein: ''
    },
    {
      id: 3,
      numDossier: '45',
      domaine: 'ssh',
      regime: 'reg ssh',
      societe: 'demo',
      numSte: '007',
      statutBenef: 'none',
      dateEntreeDispositif: '17/11/2015',
      dateSortieDispositif: '',
      dateTauxPlein: '01/01/2022'
    }
  ],
  contactsEtActivites: [
    // => numDossier: '1543'
    {
      id: 1,
      numDossier: '1543',
      numFiche: '500',

      dateCreation: '01/04/2015 10:23:43',
      dateReception: '01/04/2015 10:23:43',
      canal: canaux[0],
      reclamation: false,

      statut: contactActiviteStatuts[0],
      creePar: 'T. Test',
      traiteePar: 'A. Autre',
      ficheTransmiseA: '',

      motif: motifsContactEtActivites[0],

      delais: '2' // en jours
    },
    {
      id: 2,
      numDossier: '1543',
      numFiche: '900',

      dateCreation: '03/04/2015 16:01:03',
      dateReception: '02/04/2015 08:27:12',
      canal: canaux[1],
      reclamation: true,

      statut: contactActiviteStatuts[1],
      creePar: 'T. Test',
      traiteePar: 'A. Autre',
      ficheTransmiseA: '',

      motif: motifsContactEtActivites[1],

      delais: '4' // en jours
    },


    // => numDossier: '1543'
    {
      id: 3,
      numDossier: '5673',
      numFiche: '400',

      dateCreation: '01/04/2014 18:23:43',
      dateReception: '01/04/2014 18:23:43',
      canal: canaux[1],
      reclamation: true,

      statut: contactActiviteStatuts[1],
      creePar: 'T. Test',
      traiteePar: 'A. Autre',
      ficheTransmiseA: '',

      motif: motifsContactEtActivites[0],

      delais: '1' // en jours
    },
    {
      id: 4,
      numDossier: '5673',
      numFiche: '401',

      dateCreation: '03/04/2015 16:01:03',
      dateReception: '02/04/2015 08:27:12',
      canal: canaux[1],
      reclamation: false,

      statut: contactActiviteStatuts[1],
      creePar: 'T. Test',
      traiteePar: 'A. Autre',
      ficheTransmiseA: '',

      motif: motifsContactEtActivites[1],

      delais: '4' // en jours
    }
  ]
};
