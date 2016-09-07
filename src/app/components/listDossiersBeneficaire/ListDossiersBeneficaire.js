import React, { PropTypes } from 'react';
// import Title                from './title/Title';
import HeaderTools          from './headerTools/HeaderTools';
import ListControl          from './listControl/ListControl';
import Table                from './table/Table';

const ListDossiersBeneficaire = ({
  dossiers,
  onPagingPreviousClick,
  onPagingNextClick,
  onSearch,
  onBackToForm,
  minPage,
  maxPage,
  totalBenefs,
  onRowClick
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

          <HeaderTools
            title={''}
            onSearch={onSearch}
            onBackButtonClick={onBackToForm}
          />
          <hr />
          <div
            className="box-body no-padding">

            <ListControl
              showCheckToggle={false}
              minPage={minPage}
              maxPage={maxPage}
              totalPages={totalBenefs}
              onPagingPreviousClick={onPagingPreviousClick}
              onPagingNextClick={onPagingNextClick}
            />

            <div className="table-responsive mailbox-messages">
              <Table
                benefs={dossiers}
                onRowClick={onRowClick}
              />
            </div>

            <ListControl
              showCheckToggle={false}
              minPage={minPage}
              maxPage={maxPage}
              totalPages={totalBenefs}
              onPagingPreviousClick={onPagingPreviousClick}
              onPagingNextClick={onPagingNextClick}
            />
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

  totalBenefs: PropTypes.number.isRequired,

  onPagingPreviousClick: PropTypes.func.isRequired,
  onPagingNextClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onBackToForm: PropTypes.func.isRequired,
  onRowClick: PropTypes.func.isRequired
};

export default ListDossiersBeneficaire;
