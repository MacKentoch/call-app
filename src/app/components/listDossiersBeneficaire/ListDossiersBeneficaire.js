import React, { PropTypes } from 'react';
import ListControl          from './listControl/ListControl';
import Table                from './table/Table';

const ListDossiersBeneficaire = ({
  dossiers,
  onPagingPreviousClick,
  onPagingNextClick,
  onSearch,
  minPage,
  maxPage,
  totalDossiers,
  onRowClick,
  onRowEditClick,
  isEditingDossiers,
  editDossierId
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
              totalPages={totalDossiers}
              onPagingPreviousClick={onPagingPreviousClick}
              onPagingNextClick={onPagingNextClick}
              isEditingDossiers={isEditingDossiers}
            />
            <div className="table-responsive mailbox-messages">
              <Table
                dossiers={dossiers}
                onRowClick={onRowClick}
                onRowEditClick={onRowEditClick}
                isEditingDossiers={isEditingDossiers}
                editDossierId={editDossierId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ListDossiersBeneficaire.propTypes = {
  dossiers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      numDossier: PropTypes.string,
      domaine: PropTypes.string,
      regime: PropTypes.string,
      societe: PropTypes.string,
      numSte: PropTypes.string,
      statutBenef: PropTypes.string,
      dateEntreeDispositif: PropTypes.string,
      dateSortieDispositif: PropTypes.string,
      dateTauxPlein: PropTypes.string
    })
  ).isRequired,

  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,

  totalDossiers: PropTypes.number.isRequired,

  onPagingPreviousClick: PropTypes.func.isRequired,
  onPagingNextClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,

  onRowClick: PropTypes.func.isRequired,
  onRowEditClick: PropTypes.func.isRequired,
  isEditingDossiers: PropTypes.bool.isRequired,
  editDossierId: PropTypes.number.isRequired
};

export default ListDossiersBeneficaire;
