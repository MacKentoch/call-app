
export const gestBenefMock = [
  {
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
      }
    ]
  }
]
;
