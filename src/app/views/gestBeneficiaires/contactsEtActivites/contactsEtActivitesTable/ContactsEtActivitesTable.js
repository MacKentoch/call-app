import React, { PropTypes }               from 'react';
import {
  ListContactsEtActivitesBeneficaire
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
      {/* when contactsEtActivites not empty */}
      {
        (contactsEtActivites.length > 0 && !isFetchingContactsEtActivites) &&
        <ListContactsEtActivitesBeneficaire
          contactsEtActivites={currentPageContactsEtActivites}

          minPage={minPage}
          maxPage={maxPage}
          totalContactsEtDossiers={contactsEtActivites.length}

          onPagingPreviousClick={onPagingPreviousClick}
          onPagingNextClick={onPagingNextClick}
          onSearch={onSearch}
        />
      }
      {/* when dossiers is empty */}
      {
        (contactsEtActivites.length === 0 && !isFetchingContactsEtActivites) &&
        <h3>
          <i>
            Aucun contact.
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
