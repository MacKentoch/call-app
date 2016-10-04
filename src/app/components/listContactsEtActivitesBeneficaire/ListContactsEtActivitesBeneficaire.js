import React, { PropTypes } from 'react';
import ListControl          from './listControl/ListControl';
import Table                from './table/Table';

const ListContactsEtActivitesBeneficaire = ({
  contactsEtActivites,
  onPagingPreviousClick,
  onPagingNextClick,
  onSearch,
  minPage,
  maxPage,
  totalContactsEtActivites
}) => {
  return (
    <div className="panel">
      <div
        className="panel-body"
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: '0px',
          paddingRight: '0px'
        }}>
        {/* <Title
          mailBoxName={mailBoxName}
        /> */}
        <div className="box box-primary">
          <div
            className="box-body no-padding">

            <ListControl
              onSearch={onSearch}
              showCheckToggle={false}
              minPage={minPage}
              maxPage={maxPage}
              totalPages={totalContactsEtActivites}
              onPagingPreviousClick={onPagingPreviousClick}
              onPagingNextClick={onPagingNextClick}
            />
            <div className="table-responsive mailbox-messages">
              <Table
                contactsEtActivites={contactsEtActivites}
                // onRowClick={onRowClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ListContactsEtActivitesBeneficaire.propTypes = {
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
  ).isRequired,

  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,

  totalContactsEtActivites: PropTypes.number.isRequired,

  onPagingPreviousClick: PropTypes.func.isRequired,
  onPagingNextClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default ListContactsEtActivitesBeneficaire;
