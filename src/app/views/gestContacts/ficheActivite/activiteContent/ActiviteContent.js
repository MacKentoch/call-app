import React, { PropTypes } from 'react';
import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  StatutFicheDropDown,
  CanalDropDown,
  FormLabel,
  DateInput
}                           from '../../../../components';
import {
  isValidDateOrReturnDefault
}                           from '../../../../services';
import ListAttachments      from './listAttachments/ListAttachments';
import Comment              from './comment/Comment';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

const ActiviteContent = ({
  selectedActiviteId,
  // lastFetchTimeActivites,
  listMotifsNiveau4,
  listStatutFicheActivite,
  listCanauxFicheActivite,
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
            id={'inputDateCreationFicheActivite' + '-' + selectedActiviteId}
            label={'Date de création'}
            value={isValidDateOrReturnDefault(currentActivite.dateCreation, formatDate)}
            onChange={()=>console.log('TODO: onDateCreationFicheActiviteChanged')}
          />
        </div>

        {/* créé par */}
        <div className="col-md-4">
          <FormLabel
            id={'inputCreeParFicheActivite'  + '-' + selectedActiviteId}
            label={'créé par'}
            value={currentActivite.creePar}
          />
        </div>

        {/* date de réception */}
        <div className="col-md-4">
          <FormLabel
            id={'inputTraiteeParFicheActivite'  + '-' + selectedActiviteId}
            label={'Traitée par'}
            value={currentActivite.traiteePar}
          />
        </div>
      </div>

      {/* 2nd row */}
      <div className="row">
        {/* statut fiche activite */}
        <div className="col-md-4">
          <StatutFicheDropDown
            id={'statutFicheFicheActivite' + '-' + selectedActiviteId}
            label={'Statut'}
            value={currentActivite.statutIndex}
            onChange={()=>console.log('TODO: onStatutIndexFicheActiviteChanged')}
            listeStatutFiche={listStatutFicheActivite}
          />
        </div>
        {/* date de cloture */}
        <div className="col-md-4">
          {/* <DateInput
            id={'inputDateClotureFicheActivite' + '-' + selectedActiviteId}
            label={'Date de clôture'}
            value={isValidDateOrReturnDefault(currentActivite.dateCloture, formatDate)}
            onChange={()=>console.log('TODO: onDateClotureFicheActiviteChanged')}
          /> */}
          <FormLabel
            id={'inputDateClotureFicheActivite' + '-' + selectedActiviteId}
            label={'Date de clôture'}
            value={isValidDateOrReturnDefault(currentActivite.dateCloture, formatDate)}
          />
        </div>
        {/* cloture par */}
        <div className="col-md-4">
          <FormLabel
            id={'inputClotureParFicheActivite' + '-' + selectedActiviteId}
            label={'Clôturée par'}
            value={currentActivite.cloturePar}
          />
        </div>
      </div>

      {/* 3rd row */}
      <div className="row">
        {/* canal */}
        <div className="col-md-2">
          <CanalDropDown
            id={'inputCanalFicheActivite' + '-' + selectedActiviteId}
            label={'Canal'}
            value={
              listCanauxFicheActivite[currentActivite.canalIndexFicheActivite]
                ? listCanauxFicheActivite[currentActivite.canalIndexFicheActivite]
                : ' --- '
            }
            onChange={()=>console.log('TODO: onCanalFicheActiviteChange')}
            listCanaux={listCanauxFicheActivite}
          />
        </div>
        {/* motif : libelle level4 */}
        <div className="col-md-10">
          <FormLabel
            id={'labelLibelleMotifFicheActivite' + '-' + selectedActiviteId}
            label={'Motif'}
            value={
              listMotifsNiveau4[currentActivite.selectMotifLevel4IdFicheContact]
                ? listMotifsNiveau4[currentActivite.selectMotifLevel4IdFicheContact]
                : ' --- '
              }
          />
        </div>
      </div>

      <div style={{height: '20px'}}></div>
      {/* 4th row */}
      <div className="row">
        {/* attachements */}
        <div className="col-md-12">
          <ListAttachments
            id={'ficheActivitePJ' + '-' + selectedActiviteId}
            label={
              currentActivite.listAttachements.length > 0
                ?  `Pièces jointes reçus (${currentActivite.listAttachements.length})`
                : 'Pièces jointes reçus'
              }
            attachments={currentActivite.listAttachements}
            onDelete={()=>console.log('on fiche activite delete attachments: disabled')}
          />
        </div>
      </div>

      {/* 5th row to N: comments */}
      <div className="row">
        {/* attachements */}
        <div className="col-md-12">
          {
            currentActivite.listCommentaire.length === 0 &&
            <div>
              <h4>
                Aucun commentaire pour cette activité.
              </h4>
            </div>
          }
          {
            currentActivite.listCommentaire.length > 0 &&
            <div>

              <label
                className="control-label pull-left">
                Commentaires:
              </label>

              <div className="pull-right">
                <button
                  className="btn btn-xs mailBoxNewEmailButton_button">
                  <i
                    className="fa fa-plus"
                    style={{color: '#F1F1F1'}}
                    ariaHidden="true">
                  </i>
                </button>
              </div>

              <div className="row">
                <div className="col-xs-12">

                  {/* existing comments */}
                  {
                    currentActivite.listCommentaire.map(
                      ({id, commentaire, par, dateCreation }, commentaireIdx) => {
                        return (
                         <Comment
                          key={commentaireIdx}
                          disabled={true}
                          label={par + ' - ' + dateCreation}
                          id={'textAreaComment'  + '-' + selectedActiviteId + '-' +  commentaireIdx}
                          value={commentaire}
                          onChange={()=>console.log('TODO: ficheActivite comment changed')}
                         />
                        );
                      }
                    )
                  }

                  {/* new comment */}
                  {/* <Comment
                   disabled={false}
                   label={par + ' - ' + dateCreation}
                   id={'textAreaComment'  + '-' + selectedActiviteId + '-' +  commentaireIdx}
                   value={''}
                   onChange={()=>console.log('TODO: ficheActivite comment changed')}
                  /> */}

                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </form>
  );
};

ActiviteContent.propTypes = {
  selectedActiviteId: PropTypes.number.isRequired,
  // isCollapsedFicheActivite: PropTypes.bool.isRequired,
  // onCollapseClick: PropTypes.func.isRequired,

  lastFetchTimeActivites: PropTypes.string.isRequired,
  listMotifsNiveau4: PropTypes.array.isRequired,

  listStatutFicheActivite: PropTypes.arrayOf(PropTypes.string).isRequired,

  listCanauxFicheActivite: PropTypes.arrayOf(PropTypes.string).isRequired,

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
      listCommentaire: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          commentaire: PropTypes.string,
          par: PropTypes.string,
          dateCreation: PropTypes.string
        })
      )
    })
  )
};

export default ActiviteContent;