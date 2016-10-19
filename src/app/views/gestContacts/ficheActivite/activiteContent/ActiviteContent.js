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
  selectedActiviteId,
  lastFetchTimeActivites,
  listMotifsNiveau4,

  listStatutFicheActivite,

  listCanauxFicheContact,

  activites

}) => {
  if (activites.length === 0) {
    return (
      <div>
        <h2>
          Aucune activité pour ce contact.
        </h2>
      </div>
    );
  }

  const currentActivite = activites[selectedActiviteId];

  return (
    <form role="form">

      {/* 1st row */}
      <div className="row">
        {/* date de création */}
        <div className="col-md-4">
          <DateInput
            id="inputDateCreationFicheActivite"
            label={'Date de création'}
            value={isValidDateOrReturnDefault(currentActivite.dateCreation, formatDate)}
            onChange={()=>console.log('TODO: onDateCreationFicheActiviteChanged')}
          />
        </div>

        {/* créé par */}
        <div className="col-md-4">
          <FormLabel
            id="inputCreeParFicheActivite"
            label={'créé par'}
            value={currentActivite.creePar}
          />
        </div>

        {/* date de réception */}
        <div className="col-md-4">
          <FormLabel
            id="inputTraiteeParFicheActivite"
            label={'Traitée par'}
            value={currentActivite.traiteePar}
          />
        </div>
      </div>

      {/* 2nd row */}
      <div className="row">
        {/* statut fiche activite */}
        <div className="col-md-4">

        </div>
        {/* date de cloture */}
        <div className="col-md-4">

        </div>
        {/* cloture par */}
        <div className="col-md-4">

        </div>
      </div>

      {/* 3rd row */}
      <div className="row">
        {/* canal */}
        <div className="col-md-2">

        </div>
        {/* motif : libelle level4 */}
        <div className="col-md-10">

        </div>
      </div>

      {/* 4th row */}
      <div className="row">
        {/* attachements */}
        <div className="col-md-12">

        </div>
      </div>


      {/* 5th row to N: comments */}
      <div className="row">
        {/* attachements */}
        <div className="col-md-12">
        
        </div>
      </div>

    </form>
  );
};

ActiviteContent.propTypes = {
  selectedActiviteId: PropTypes.number.isRequired,
  isCollapsedFicheActivite: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,

  lastFetchTimeActivites: PropTypes.string.isRequired,
  listMotifsNiveau4: PropTypes.array.isRequired,

  listStatutFicheActivite: PropTypes.arrayOf(PropTypes.string).isRequired,

  listCanauxFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,

  activites: PropTypes.arrayOf(
    PropTypes.shape({
      activiteId: PropTypes.number.isRequired, // nouvelle activite sans id tant que pas enregister en BDD
      isEditable: true, // si activiteId === 0 alors reste editable (on peut changer les motifs) sinon plus editable et les motifs sont bloqués
      selectMotifLevel2IdFicheContact: -1, // from listMotifLevel2
      selectMotifLevel3IdFicheContact: -1, // from listMotifLevel3
      selectMotifLevel4IdFicheContact: -1, // from listMotifLevel4
      // affiche libelle d emotif niveau 4 dna sle champs motif des activites
      dateCreation: '',
      creePar: '',
      traiteePar: '',
      statutIndex: 1, // En-cours
      dateCloture: '',
      cloturePar: '',
      // libelle motif de niveau 4 a afficher dans motif
      canalIndexFicheActivite: 1,
      listAttachements: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.oneOf(['zip', 'rar', '7zip', 'pdf', 'txt', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'png', 'jpg', 'jpeg', 'bmp']),
          name: PropTypes.string.isRequired,
          filePath: PropTypes.string.isRequired,
          size: PropTypes.string.isRequired
        })
      ).isRequired,
      listCommenatire: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default ActiviteContent;
