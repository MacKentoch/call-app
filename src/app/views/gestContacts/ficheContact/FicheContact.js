import React, {
  Component,
  PropTypes
}                           from 'react';
import moment               from 'moment';
// import { appConfig }        from '../../../config';
import ToggleCollapse       from './toggleCollapse/ToggleCollapse';
import Collapse             from 'react-collapse';
import shallowCompare       from 'react-addons-shallow-compare';
import Form                 from './form/Form';
import SavingIndicator      from '../savingIndicator/SavingIndicator';

moment.locale('fr');


class FicheContact extends Component {
  constructor(props) {
    super(props);

    this.handlesOnSaveFicheContact = this.handlesOnSaveFicheContact.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      benefId,
      isCollapsedFicheContact,
      onCollapseClick,
      lastFetchTimeFicheContact,
      isFetchingFicheContact,
      isSavingFicheContact,
      dateCreationFicheContact,
      onDateCreationFicheContactChanged,
      creeParFicheContact,
      dateReceptionFicheContact,
      onDateReceptionFicheContactChanged,
      statutIndexFicheContact,
      onStatutIndexFicheContactChanged,
      listStatutFicheContact,
      dateClotureFicheContact,
      // onDateClotureFicheContactChanged,
      clotureParFicheContact,
      // onClotureParFicheContactChanged,
      typeIndexFicheContact,
      onTypeIndexFicheContactChanged,
      listTypeFicheContact,
      canalIndexFicheContact,
      // onCanalIndexFicheContactChanged,
      listCanauxFicheContact,
      // onListCanauxFicheContactChanged,
      numDossierIndexSelected,
      onNumDossierIndexSelectedChanged,
      listNumDossierFicheContact,
      // onListNumDossierFicheContactChanged,
      domaineFicheContact,
      onDomaineFicheContactChanged,
      statutBenefFicheContact,
      // onStatutBenefFicheContactChanged,
      listStatutBenefFicheContact,
      attachmentsFicheContact,
      // onAttachmentsFicheContactChanged,
      commentaireFicheContact,
      onCommentaireFicheContactChanged,
      groupeDestinataireIsActive,
      // onGroupeDestinataireIsActiveChanged,
      groupeDestinataireIdSelected,
      onGroupeDestinataireIdSelectedChanged,
      listGroupeDestinataire,
      // onListGroupeDestinataireChanged,
      activites,

      listMotifsNiveau2,
      listMotifsNiveau3,
      listMotifsNiveau4,

      onAddNewMotifs,
      onRemoveMotifs,

      onChangeNiveau2,
      onChangeNiveau3,
      onChangeNiveau4
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
           <div style={{ height: '670px' }}>
            <div className="row">

              <div className="col-xs-12">

              {
                isSavingFicheContact
                ?
                  <SavingIndicator />
                :
                 <Form
                   benefId={benefId}
                   isCollapsedFicheContact={isCollapsedFicheContact}
                   onCollapseClick={this.handlesOnFicheContactCollapseClick}
                   lastFetchTimeFicheContact={lastFetchTimeFicheContact}
                   isFetchingFicheContact={isFetchingFicheContact}
                   isSavingFicheContact={isSavingFicheContact}

                   dateCreationFicheContact={dateCreationFicheContact}
                   onDateCreationFicheContactChanged={onDateCreationFicheContactChanged}

                   creeParFicheContact={creeParFicheContact}

                   dateReceptionFicheContact={dateReceptionFicheContact}
                   onDateReceptionFicheContactChanged={onDateReceptionFicheContactChanged}

                   statutIndexFicheContact={statutIndexFicheContact}
                   onStatutIndexFicheContactChanged={onStatutIndexFicheContactChanged}

                   listStatutBenefFicheContact={listStatutBenefFicheContact}

                   listStatutFicheContact={listStatutFicheContact}

                   dateClotureFicheContact={dateClotureFicheContact}
                  //  onDateClotureFicheContactChanged={onDateClotureFicheContactChanged}

                   clotureParFicheContact={clotureParFicheContact}
                   // onClotureParFicheContactChanged={onClotureParFicheContactChanged}

                   typeIndexFicheContact={typeIndexFicheContact}
                   onTypeIndexFicheContactChanged={onTypeIndexFicheContactChanged}

                   listTypeFicheContact={listTypeFicheContact}

                   canalIndexFicheContact={canalIndexFicheContact}
                   // onCanalIndexFicheContactChanged={onCanalIndexFicheContactChanged}

                   listCanauxFicheContact={listCanauxFicheContact}
                   // onListCanauxFicheContactChanged={onListCanauxFicheContactChanged}

                   numDossierIndexSelected={numDossierIndexSelected}
                   onNumDossierIndexSelectedChanged={onNumDossierIndexSelectedChanged}

                   listNumDossierFicheContact={listNumDossierFicheContact}
                   // onListNumDossierFicheContactChanged={onListNumDossierFicheContactChanged}

                   domaineFicheContact={domaineFicheContact}
                   onDomaineFicheContactChanged={onDomaineFicheContactChanged}

                   statutBenefFicheContact={statutBenefFicheContact}
                   // onStatutBenefFicheContactChanged= {onStatutBenefFicheContactChanged}

                   attachmentsFicheContact={attachmentsFicheContact}
                   // onAttachmentsFicheContactChanged={onAttachmentsFicheContactChanged}

                   commentaireFicheContact={commentaireFicheContact}
                   onCommentaireFicheContactChanged={onCommentaireFicheContactChanged}

                   groupeDestinataireIsActive={groupeDestinataireIsActive}
                  //  onGroupeDestinataireIsActiveChanged={onGroupeDestinataireIsActiveChanged}

                   groupeDestinataireIdSelected={groupeDestinataireIdSelected}
                   onGroupeDestinataireIdSelectedChanged={onGroupeDestinataireIdSelectedChanged}

                   listGroupeDestinataire={listGroupeDestinataire}
                  //  onListGroupeDestinataireChanged={onListGroupeDestinataireChanged}

                   activites={activites}

                   listMotifsNiveau2={listMotifsNiveau2}
                   listMotifsNiveau3={listMotifsNiveau3}
                   listMotifsNiveau4={listMotifsNiveau4}

                   saveFicheContact={this.handlesOnSaveFicheContact}

                   addNewMotifs={onAddNewMotifs}
                   onRemoveMotifs={onRemoveMotifs}

                   onChangeNiveau2={onChangeNiveau2}
                   onChangeNiveau3={onChangeNiveau3}
                   onChangeNiveau4={onChangeNiveau4}
                 />
              }
              </div>
            </div>
           </div>
         </Collapse>
       </div>
     );
  }

  handlesOnSaveFicheContact(event) {
    event.preventDefault();
    const {
      benefId,
      contactId,
      dateCreationFicheContact,
      creeParFicheContact,
      dateReceptionFicheContact,
      statutIndexFicheContact,
      dateClotureFicheContact,
      clotureParFicheContact,
      typeIndexFicheContact,
      canalIndexFicheContact,
      numDossierIndexSelected,
      domaineFicheContact,
      statutBenefFicheContact,
      // motif TO ADD
      attachmentsFicheContact,
      commentaireFicheContact,

      saveFicheContact
    } = this.props;

    const payload = {
      id: contactId,
      benefId,
      dateCreationFicheContact,
      creeParFicheContact,
      dateReceptionFicheContact,
      statutIndexFicheContact,
      dateClotureFicheContact,
      clotureParFicheContact,
      typeIndexFicheContact,
      canalIndexFicheContact,
      numDossierIndexSelected,
      domaineFicheContact,
      statutBenefFicheContact,
      // motif TO ADD
      attachmentsFicheContact,
      commentaireFicheContact
    };

    saveFicheContact(payload);
  }
}

FicheContact.propTypes = {
  benefId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isCollapsedFicheContact: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,
  lastFetchTimeFicheContact: PropTypes.string.isRequired,
  isFetchingFicheContact: PropTypes.bool.isRequired,
  isSavingFicheContact: PropTypes.bool.isRequired,

  dateCreationFicheContact: PropTypes.string.isRequired,
  onDateCreationFicheContactChanged: PropTypes.func.isRequired,

  creeParFicheContact: PropTypes.string.isRequired,

  dateReceptionFicheContact: PropTypes.string.isRequired,
  onDateReceptionFicheContactChanged: PropTypes.func.isRequired,

  statutIndexFicheContact: PropTypes.number.isRequired,
  onStatutIndexFicheContactChanged: PropTypes.func.isRequired,

  listStatutFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,

  dateClotureFicheContact: PropTypes.string.isRequired,
  // onDateClotureFicheContactChanged: PropTypes.func.isRequired,

  clotureParFicheContact: PropTypes.string.isRequired,
  // onClotureParFicheContactChanged: PropTypes.func.isRequired,

  typeIndexFicheContact: PropTypes.number.isRequired, // index par default du type de fiche contact de listTypeFicheContact
  onTypeIndexFicheContactChanged: PropTypes.func.isRequired,

  listTypeFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired, // tous (enum) les types de fiche de contact

  canalIndexFicheContact: PropTypes.number.isRequired,
  // onCanalIndexFicheContactChanged: PropTypes.func.isRequired,

  listCanauxFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  // onListCanauxFicheContactChanged: PropTypes.func.isRequired,

  numDossierIndexSelected: PropTypes.number.isRequired,
  onNumDossierIndexSelectedChanged: PropTypes.func.isRequired,

  listNumDossierFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  // onListNumDossierFicheContactChanged: PropTypes.func.isRequired,

  domaineFicheContact: PropTypes.string.isRequired,
  onDomaineFicheContactChanged: PropTypes.func.isRequired,

  statutBenefFicheContact: PropTypes.string.isRequired,
  // onStatutBenefFicheContactChanged: PropTypes.func.isRequired,

  listStatutBenefFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,

  attachmentsFicheContact: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['zip', 'rar', '7zip', 'pdf', 'txt', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'png', 'jpg', 'jpeg', 'bmp']),
      name: PropTypes.string.isRequired,
      filePath: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired
    })
  ).isRequired,
  // onAttachmentsFicheContactChanged: PropTypes.func.isRequired,

  commentaireFicheContact: PropTypes.string.isRequired,
  onCommentaireFicheContactChanged: PropTypes.func.isRequired,

  groupeDestinataireIsActive: PropTypes.bool.isRequired,  // la list de choix doit être desactivée si statutIndexFicheContact <> En-cours
  // onGroupeDestinataireIsActiveChanged: PropTypes.func.isRequired,

  groupeDestinataireIdSelected: PropTypes.number.isRequired,
  onGroupeDestinataireIdSelectedChanged: PropTypes.func.isRequired,

  listGroupeDestinataire: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      libelle: PropTypes.string
    })
  ).isRequired, // to fill from server query
  // onListGroupeDestinataireChanged: PropTypes.func.isRequired,
  //
  listMotifsNiveau2: PropTypes.array.isRequired,
  listMotifsNiveau3: PropTypes.array.isRequired,
  listMotifsNiveau4: PropTypes.array.isRequired,

  onAddNewMotifs: PropTypes.func.isRequired,
  onRemoveMotifs: PropTypes.func.isRequired,

  onChangeNiveau2: PropTypes.func.isRequired,
  onChangeNiveau3: PropTypes.func.isRequired,
  onChangeNiveau4: PropTypes.func.isRequired,

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
  ),
  saveFicheContact: PropTypes.func.isRequired
};


export default FicheContact;
