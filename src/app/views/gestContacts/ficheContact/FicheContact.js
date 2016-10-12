import React, {
  Component,
  PropTypes
}                           from 'react';
import moment               from 'moment';
import { appConfig }        from '../../../config';
import ToggleCollapse       from './toggleCollapse/ToggleCollapse';
import Collapse             from 'react-collapse';
import shallowCompare       from 'react-addons-shallow-compare';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;


class FicheContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedActiviteId: 0,
      selectedActivite: []
    };

    this.handlesOnSelectActivite = this.handlesOnSelectActivite.bind(this);
  }

  componentDidMount() {
    this.initToFirstActivite();
  }

  componentWillReceiveProps(nextProps) {
    const { lastFetchTimeContact } = this.props;
    const activitesAreUpdated = moment(nextProps.lastFetchTimeActivites, formatDate)
                                  .diff(moment(lastFetchTimeContact, formatDate));

    if (activitesAreUpdated > 0) {
      // force all activite to init
      this.initToFirstActivite();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      isCollapsedFicheContact,
      onCollapseClick,
      lastFetchTimeFicheContact,
      isFetchingFicheContact,
      isSavingFicheContact,
      dateCreationFicheContact,
      onDateCreationFicheContactChanged,
      creeParFicheContact,
      onCreeParFicheContactChanged,
      dateReceptionFicheContact,
      onDateReceptionFicheContactChanged,
      statutIndexFicheContact,
      onStatutIndexFicheContactChanged,
      listStatutFicheContact,
      onListStatutFicheContactChanged,
      dateClotureFicheContact,
      onDateClotureFicheContactChanged,
      clotureParFicheContact,
      onClotureParFicheContactChanged,
      typeIndexFicheContact,
      onTypeIndexFicheContactChanged,
      listTypeFicheContact,
      onListTypeFicheContactChanged,
      canalIndexFicheContact,
      onCanalIndexFicheContactChanged,
      listCanauxFicheContact,
      onListCanauxFicheContactChanged,
      numDossierIndexSelected,
      onNumDossierIndexSelectedChanged,
      listNumDossierFicheContact,
      onListNumDossierFicheContactChanged,
      domaineFicheContact,
      onDomaineFicheContactChanged,
      statutBenefFicheContact,
      onStatutBenefFicheContactChanged,
      attachmentsFicheContact,
      onAttachmentsFicheContactChanged,
      commentaireFicheContact,
      onCommentaireFicheContactChanged,
      groupeDestinataireIsActive,
      onGroupeDestinataireIsActiveChanged,
      groupeDestinataireIdSelected,
      onGroupeDestinataireIdSelectedChanged,
      listGroupeDestinataire,
      onListGroupeDestinataireChanged,
      activites
    } = this.props;

    return (
       <div>
         <div className="page-header">
           <i
             className="fa fa-tasks"
             aria-hidden="true"
             style={{color: '#444444'}}>
           </i>
           &nbsp;
           contact
           <ToggleCollapse
             isCollapsed={isCollapsedFicheContact}
             toggleCollapse={onCollapseClick}
           />
         </div>
         <Collapse
           isOpened={!isCollapsedFicheContact}
           keepCollapsedContent={false}>
           <div style={{ height: '230px' }}>

             <div className="row">

               <div className="col-xs-3">
                 {/* <ListActivites
                   activites={activites}
                   selectedActiviteId={selectedActiviteId}
                   onSelectActivite={this.handlesOnSelectActivite}
                 /> */}
               </div>

               <div className="col-xs-9">
                 {/* <ActiviteContent
                   activites={activites}
                   selectedActiviteId={selectedActiviteId}
                 /> */}
               </div>

             </div>

           </div>
         </Collapse>
       </div>
     );
  }
  /*
    init state (selectedActivite) by default
   */
  initToFirstActivite() {
    const { activites } = this.props;

    if (Array.isArray(activites) && activites.length > 0) {
      // select 1st activite:
      const firstActiviteId = activites[0].id;

      this.setState({
        selectedActiviteId: firstActiviteId,
        selectedActivite: [...this.getActiviteById(firstActiviteId)]
      });
    }
  }

  getActiviteById(id) {
    const { activites } = this.props;

    if (Array.isArray(activites) && activites.length > 0) {
      return activites.filter(activite => activite.id === id);
    }
    return [];
  }

  handlesOnSelectActivite(activiteId) {
    const { activites } = this.props;

    if (Array.isArray(activites) && activites.length > 0) {
      return activites.filter(activite => activite.id === activiteId);
    }
    return [];
  }
}

FicheContact.propTypes = {
  isCollapsedFicheContact: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,
  lastFetchTimeFicheContact: PropTypes.string.isRequired,
  isFetchingFicheContact: PropTypes.bool.isRequired,
  isSavingFicheContact: PropTypes.bool.isRequired,

  dateCreationFicheContact: PropTypes.string.isRequired,
  onDateCreationFicheContactChanged: PropTypes.func.isRequired,

  creeParFicheContact: PropTypes.string.isRequired,
  onCreeParFicheContactChanged: PropTypes.func.isRequired,

  dateReceptionFicheContact: PropTypes.string.isRequired,
  onDateReceptionFicheContactChanged: PropTypes.func.isRequired,

  statutIndexFicheContact: PropTypes.number.isRequired,
  onStatutIndexFicheContactChanged: PropTypes.func.isRequired,

  listStatutFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  onListStatutFicheContactChanged: PropTypes.func.isRequired,

  dateClotureFicheContact: PropTypes.string.isRequired,
  onDateClotureFicheContactChanged: PropTypes.func.isRequired,

  clotureParFicheContact: PropTypes.string.isRequired,
  onClotureParFicheContactChanged: PropTypes.func.isRequired,

  typeIndexFicheContact: PropTypes.number.isRequired, // index par default du type de fiche contact de listTypeFicheContact
  onTypeIndexFicheContactChanged: PropTypes.func.isRequired,

  listTypeFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired, // tous (enum) les types de fiche de contact
  onListTypeFicheContactChanged: PropTypes.func.isRequired,

  canalIndexFicheContact: PropTypes.number.isRequired,
  onCanalIndexFicheContactChanged: PropTypes.func.isRequired,

  listCanauxFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  onListCanauxFicheContactChanged: PropTypes.func.isRequired,

  numDossierIndexSelected: PropTypes.number.isRequired,
  onNumDossierIndexSelectedChanged: PropTypes.func.isRequired,

  listNumDossierFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  onListNumDossierFicheContactChanged: PropTypes.func.isRequired,

  domaineFicheContact: PropTypes.string.isRequired,
  onDomaineFicheContactChanged: PropTypes.func.isRequired,

  statutBenefFicheContact: PropTypes.string.isRequired,
  onStatutBenefFicheContactChanged: PropTypes.func.isRequired,

  attachmentsFicheContact: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      filePath: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired
    })
  ).isRequired,
  onAttachmentsFicheContactChanged: PropTypes.func.isRequired,

  commentaireFicheContact: PropTypes.string.isRequired,
  onCommentaireFicheContactChanged: PropTypes.func.isRequired,

  groupeDestinataireIsActive: PropTypes.bool.isRequired,  // la list de choix doit être desactivée si statutIndexFicheContact <> En-cours
  onGroupeDestinataireIsActiveChanged: PropTypes.func.isRequired,

  groupeDestinataireIdSelected: PropTypes.number.isRequired,
  onGroupeDestinataireIdSelectedChanged: PropTypes.func.isRequired,

  listGroupeDestinataire: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      libelle: PropTypes.string
    })
  ).isRequired, // to fill from server query
  onListGroupeDestinataireChanged: PropTypes.func.isRequired,

  activites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      contactId: PropTypes.number.isRequired,
      libelleActiviteNiv2: PropTypes.string.isRequired,
      libelleActiviteNiv3: PropTypes.string.isRequired,
      libelleActiviteNiv4: PropTypes.string.isRequired,
      dateCreation: PropTypes.string,
      creePar: PropTypes.string,
      traiteePar: PropTypes.string,
      statut: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          libelle: PropTypes.string.isRequired
        })
      ),
      dateCloture: PropTypes.string,
      motif: PropTypes.string,
      canal: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          libelle: PropTypes.string.isRequired
        })
      ),
      piecesJointesEmises: PropTypes.arrayOf(
        PropTypes.shape({
          nomFichier: PropTypes.string,
          extensionFichier: PropTypes.string,
          lienFichier: PropTypes.string
        })
      ),
      commentaires: PropTypes.arrayOf(PropTypes.string)
    })
  )
};


export default FicheContact;
