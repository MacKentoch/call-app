import React, { PropTypes }               from 'react';
import {
  ListDossiersBeneficaire
}                                         from '../../../../components';

const ContactsEtActivitesTable = ({
  contactsEtActivites,
  isFetchingContactsEtActivites,
  // pagination & search:
  currentPageContactsEtActivites,
  minPage,
  maxPage,
  onPagingPreviousClick,
  onPagingNextClick,
  onSearch
}) => {
  return (
    <div>
      {/* when dossiers not empty */}
      {
        (dossiers.length > 0 && !isFetchingDossiers) &&
        <ListDossiersBeneficaire
          dossiers={currentPageDossiers}

          isEditingDossiers={isEditingDossiers}
          editDossierId={editDossierId}

          minPage={minPage}
          maxPage={maxPage}
          totalDossiers={dossiers.length}

          onPagingPreviousClick={onPagingPreviousClick}
          onPagingNextClick={onPagingNextClick}
          onSearch={onSearch}
          onRowClick={onDossierSelection}
          onRowEditClick={onDossierEdition}
          onValidEditDossier={onDossierValidEdition}
          onCancelEditDossier={onDossierCancelEdition}
        />
      }
      {/* when dossiers is empty */}
      {
        (dossiers.length === 0 && !isFetchingDossiers) &&
        <h3>
          <i>
            Aucun dossier.
          </i>
        </h3>
      }
    </div>
  );
};

ContactsEtActivitesTable.propTypes = {
  // pagination & search:
  currentPageContactsEtActivites: PropTypes.array.isRequired,
  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  onPagingPreviousClick: PropTypes.func.isRequired,
  onPagingNextClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,

  // flags bool
  isFetchingContactsEtActivites: PropTypes.bool.isRequired,
  lastFetchTimeContactsEtActivites: PropTypes.string.isRequired,
  isCollapsedContactsEtActivites: PropTypes.bool.isRequired,
  // data
  contactsEtActivites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      numDossier: PropTypes.string.isRequired,
      numFiche: PropTypes.number.isRequired,
      dateCreation: PropTypes.string.isRequired,
      dateReception: PropTypes.string.isRequired,
      canal: PropTypes.string.isRequired, // one of 'Mail', 'Téléphone', 'Courrier'
      reclamation: PropTypes.bool.isRequired,
      statut: PropTypes.string.isRequired, // one of 'En cours', 'Clôturée', 'Terminée',
      creePar: PropTypes.string.isRequired,
      traiteePar: PropTypes.string.isRequired,
      ficheTransmiseA: PropTypes.string.isRequired,
      motifs: PropTypes.string.isRequired,
      delais: PropTypes.number.isRequired // unit is day
    })
  ).isRequired
};

export default ContactsEtActivitesTable;
