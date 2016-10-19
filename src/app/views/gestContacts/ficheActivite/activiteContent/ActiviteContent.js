import React, { PropTypes } from 'react';
import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  StatutFicheDropDown,
  TextAreaInput,
  FormLabel,
  DateInput,
  NumsDossiersDropDown,
  TypeFicheContactNavPills,
  // StatutBenefFicheContactDropDown,
  FicheContactGroupeDestinataireDropDown,
  FicheContactMotifs
}                           from '../../../../components';
import {
  isValidDateOrReturnDefault
}                           from '../../../../services';
import ListAttachments      from './listAttachments/ListAttachments';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

const ActiviteContent = ({
  dateCreationFicheContact,
  onDateCreationFicheContactChanged,

}) => {
  return (
    <form role="form">

      {/* 1st row */}
      <div className="row">
        {/* date de création */}
        <div className="col-md-4">
          <DateInput
            id="inputDateCreationFicheActivite"
            label={'Date de création'}
            value={isValidDateOrReturnDefault(dateCreationFicheActivite, formatDate)}
            onChange={onDateCreationFicheContactChanged}
          />
        </div>

        {/* créé par */}
        <div className="col-md-4">

        </div>

        {/* date de réception */}
        <div className="col-md-4">

        </div>
      </div>

    </form>
  );
};

ActiviteContent.propTypes = {
  benefId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isCollapsedFicheContact: PropTypes.bool.isRequired,
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
      type: PropTypes.string.isRequired,
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

  listMotifsNiveau2: PropTypes.array.isRequired,
  listMotifsNiveau3: PropTypes.array.isRequired,
  listMotifsNiveau4: PropTypes.array.isRequired,

  addNewMotifs: PropTypes.func.isRequired,
  saveMotifs: PropTypes.func.isRequired,
  onRemoveMotifs: PropTypes.func.isRequired,
  isSavingFicheNewActivite: PropTypes.bool.isRequired,

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

export default ActiviteContent;
