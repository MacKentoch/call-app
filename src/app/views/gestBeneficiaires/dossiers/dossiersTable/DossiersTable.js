import React, { PropTypes }               from 'react';
import {
  ListDossiersBeneficaire
}                                         from '../../../../components';

const DossiersTable = ({
  dossiers,
  isFetchingDossiers,

  onDossierSelection,
  onDossierEdition,
  // pagination & search:
  currentPageDossiers,
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

          minPage={minPage}
          maxPage={maxPage}
          totalDossiers={dossiers.length}

          onPagingPreviousClick={onPagingPreviousClick}
          onPagingNextClick={onPagingNextClick}
          onSearch={onSearch}
          onRowClick={onDossierSelection}
          onRowEditClick={onDossierEdition}
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

DossiersTable.propTypes = {
  // pagination & search:
  currentPageDossiers: PropTypes.number.isRequired,
  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  onPagingPreviousClick: PropTypes.func.isRequired,
  onPagingNextClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,

  // flags bool
  isFetchingDossiers: PropTypes.bool.isRequired,
  lastFetchTimeDossiers: PropTypes.string.isRequired,
  isEditingDossiers: PropTypes.bool.isRequired,
  isSavingDossiers: PropTypes.bool.isRequired,
  isCollapsedDossiers: PropTypes.bool.isRequired,
  // data
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
  onDossierSelection: PropTypes.func.isRequired,
  onDossierEdition: PropTypes.func.isRequired
};

export default DossiersTable;
