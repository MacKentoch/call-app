import React, { PropTypes } from 'react';
// import Title                from './title/Title';
import HeaderTools          from './headerTools/HeaderTools';
import ListControl          from './listControl/ListControl';
import Table                from './table/Table';

const ListDossiersBeneficaire = ({
  benefs,
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
                benefs={benefs}
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
  benefs: PropTypes.arrayOf(
    PropTypes.shape({
      // generic
      id: PropTypes.number.isRequired,
      numDossier: PropTypes.string.isRequired,
      nom: PropTypes.string,
      nomJeuneFille: PropTypes.string,
      prenom: PropTypes.string,
      numss: PropTypes.string,
      dateNaissance: PropTypes.string,
      dateDeces: PropTypes.string,
      statutActivite: PropTypes.string,
      // specific 1
      isRet: PropTypes.bool.isRequired,
      // regimeRattachement: PropTypes.string,
      // profilFinancementRattache: PropTypes.string,
      // specific2
      isPreRet: PropTypes.bool.isRequired // ,
      // dateEntreePreRet: PropTypes.string,
      // dateSortiePreRet: PropTypes.string,
      // dateTauxPlein: PropTypes.string,
      // numeroEntrepriseCliente: PropTypes.string,
      // libelleEntrepriseCliente: PropTypes.string,
      // numMatriculeSAG: PropTypes.string
    })
  ),
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
