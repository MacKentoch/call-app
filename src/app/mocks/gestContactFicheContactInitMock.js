export const gestContactFicheContactInitMock = {
  dateCreationFicheContact: '01/01/2016',
  creeParFicheContact: 'test',
  dateReceptionFicheContact: '02/01/2016',
  statutIndexFicheContact: 0, // En-cours
  dateClotureFicheContact: '',
  clotureParFicheContact: '',
  typeIndexFicheContact: 0, // information
  canalIndexFicheContact: 0, // téléphone
  numDossierIndexSelected: 0,
  listNumDossierFicheContact: ['0123', '0321'],
  domaineFicheContact: '',
  statutBenefFicheContact: '',
  attachmentsFicheContact: [
    {
      type: 'pdf',
      name: 'fake.pdf',
      filePath: '#',
      size: '1.23kb'
    },
    {
      type: 'doc',
      name: 'fakeDoc.pdf',
      filePath: '#',
      size: '100.87kb'
    },
    {
      type: 'xlsx',
      name: 'fakeXlsx.pdf',
      filePath: '#',
      size: '21.00kb'
    },
    {
      type: 'pdf',
      name: 'fake.pdf',
      filePath: '#',
      size: '1.23kb'
    },
    {
      type: 'pdf',
      name: 'fake.pdf',
      filePath: '#',
      size: '1.23kb'
    }
  ],
  commentaireFicheContact: '',
  groupeDestinataireIsActive: true,  // la list de choix doit être desactivée si statutIndexFicheContact <> En-cours
  groupeDestinataireIdSelected: 0,
  listGroupeDestinataire: [
    {
      id: 1,
      libelle: 'group1'
    },
    {
      id: 2,
      libelle: 'group2'
    }
  ],
  activiteIdBeingEditing: 0,

  selectedActiviteId: 0,
  activites: [
    {
      activiteId: 1, // activite est un combinaison de motifLevel2+motifLevel3+motifLevel4
      isEditable: false, // si activiteId === 0 alors reste editable (on peut changer les motifs) sinon plus editable et les motifs sont bloqués
      selectMotifLevel2IdFicheContact: 0, // from listMotifLevel2
      selectMotifLevel3IdFicheContact: 0, // from listMotifLevel3
      selectMotifLevel4IdFicheContact: 0, // from listMotifLevel4
      // affiche libelle d emotif niveau 4 dna sle champs motif des activites
      dateCreation: '01/01/2016',
      creePar: 'test',
      traiteePar: 'personne',
      statutIndex: 0, // En-cours
      // listStatut: ['En-cours', 'Clôturée'], // tous (enum) les statuts de fiche de contact
      dateCloture: '',
      cloturePar: '',
      // libelle motif de niveau 4 a afficher dans motif
      canalIndexFicheActivite: 0,
      listAttachements: [
        {
          type: 'pdf',
          name: 'fake.pdf',
          filePath: '#',
          size: '1.23kb'
        },
        {
          type: 'xlsx',
          name: 'fakeXlsx.pdf',
          filePath: '#',
          size: '21.00kb'
        },
        {
          type: 'pdf',
          name: 'fake.pdf',
          filePath: '#',
          size: '1.23kb'
        },
        {
          type: 'pdf',
          name: 'fake.pdf',
          filePath: '#',
          size: '1.23kb'
        }
      ],
      listCommentaire: [
        {
          id: 1,
          commentaire: 'premier commentaire',
          par: 'test1',
          dateCreation: '02/02/2016'
        },
        {
          id: 2,
          commentaire: 'deuxième commentaire',
          par: 'test2',
          dateCreation: '03/03/2016'
        }
      ]
    },
    {
      activiteId: 2, // activite est un combinaison de motifLevel2+motifLevel3+motifLevel4
      isEditable: false, // si activiteId === 0 alors reste editable (on peut changer les motifs) sinon plus editable et les motifs sont bloqués
      selectMotifLevel2IdFicheContact: 0, // from listMotifLevel2
      selectMotifLevel3IdFicheContact: 0, // from listMotifLevel3
      selectMotifLevel4IdFicheContact: 0, // from listMotifLevel4
      // affiche libelle d emotif niveau 4 dna sle champs motif des activites
      dateCreation: '02/01/2016',
      creePar: 'test2',
      traiteePar: 'personne2',
      statutIndex: 1, // En-cours
      // listStatut: ['En-cours', 'Clôturée'], // tous (enum) les statuts de fiche de contact
      dateCloture: '',
      cloturePar: '',
      // libelle motif de niveau 4 a afficher dans motif
      canalIndexFicheActivite: 1,
      listAttachements: [
        {
          type: 'pdf',
          name: 'fake2.pdf',
          filePath: '#',
          size: '1.23kb'
        },
        {
          type: 'xlsx',
          name: 'fakeXlsx.pdf',
          filePath: '#',
          size: '21.00kb'
        },
        {
          type: 'pdf',
          name: 'fake.pdf',
          filePath: '#',
          size: '1.23kb'
        },
        {
          type: 'pdf',
          name: 'fake.pdf',
          filePath: '#',
          size: '1.23kb'
        }
      ],
      listCommentaire: [
        {
          id: 3,
          commentaire: 'troisieme commentaire',
          par: 'test3',
          dateCreation: '04/04/2016'
        },
        {
          id: 4,
          commentaire: 'quatrième commentaire',
          par: 'test4',
          dateCreation: '05/05/2016'
        }
      ]
    }
  ]

};
