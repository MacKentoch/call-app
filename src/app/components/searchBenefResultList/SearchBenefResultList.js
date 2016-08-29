import React, { PropTypes } from 'react';
import Title                from './title/Title';
import HeaderTools          from './headerTools/HeaderTools';
import ListControl          from './listControl/ListControl';
import Table                from './table/Table';

const SearchBenefResultList = ({
  benefs,
  onPagingPreviousClick,
  onPagingNextClick,
  onSearch,
  minPage,
  maxPage,
  totalBenefs,
  consultLinkTo
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
            onBackButtonClick={()=>console.log('to implement')}
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
                consultLinkTo={consultLinkTo}
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

SearchBenefResultList.propTypes = {
  benefs: PropTypes.arrayOf(
    PropTypes.shape({
      // generic
      id: PropTypes.number.isRequired,
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

  consultLinkTo: PropTypes.string.isRequired
};

export default SearchBenefResultList;
