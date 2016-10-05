import React, { PropTypes } from 'react';
import SearchInput        from './searchInput/SearchInput';
import SearchButton       from './searchButton/SearchButton';
import SearchCommand      from './searchCommand/SearchCommand';
import Collapse           from 'react-collapse';

const SearchForm = ({
  criterias,
  onCriteriaClick,

  searchInputBenefFilters,
  // identifiant
  identActive,
  identValue,
  identSelectedFilter,
  onIndentValueChanged,
  onIdentFilterChange,
  // nom
  NomActive,
  nomValue,
  onNomValueChanged,
  NomSelectedFilter,
  onNomFilterChange,
  // prenom
  PrenomActive,
  prenomValue,
  onPrenomValueChanged,
  PrenomSelectedFilter,
  onPrenomFilterChange,
  // numss
  NumSSActive,
  numssValue,
  onNumssValueChanged,
  numssSelectedFilter,
  onNumssFilterChange,

  onSearch
}) => {
  return (
    <div>

      <SearchCommand
        criterias={criterias}
        onCriteriaClick={onCriteriaClick}
      />
      <div style={{height: '20px'}}></div>
      <hr />
      <form role="form">
        <Collapse
          isOpened={identActive}
          keepCollapsedContent={true}>
          <SearchInput
           // label:
           showLabel={true}
           labelText={'Identifiant'}
           // value
           value={identValue}
           onValueChanged={onIndentValueChanged}
           // help block text:
           showHelpBlock={true}
           helpBlockText={'Identifiant de dossier et non celui du bénéficiaire'}
           // filter
           listFilters={searchInputBenefFilters}
           selectedfilter={identSelectedFilter}
           onfilterChange={onIdentFilterChange}
          />
       </Collapse>

       <Collapse
          isOpened={NomActive}
          keepCollapsedContent={true}>
          <SearchInput
            // label:
            showLabel={true}
            labelText={'Nom'}
            // value
            value={nomValue}
            onValueChanged={onNomValueChanged}
            // help block text:
            showHelpBlock={true}
            helpBlockText={'Le nom du bénéficiaire'}
            // filter
            listFilters={searchInputBenefFilters}
            selectedfilter={NomSelectedFilter}
            onfilterChange={onNomFilterChange}
          />
        </Collapse>

        <Collapse
          isOpened={PrenomActive}
          keepCollapsedContent={true}>
          <SearchInput
            // label:
            showLabel={true}
            labelText={'Prénom'}
            // value
            value={prenomValue}
            onValueChanged={onPrenomValueChanged}
            // help block text:
            showHelpBlock={true}
            helpBlockText={'Le prénom du bénéficiaire'}
            // filter
            listFilters={searchInputBenefFilters}
            selectedfilter={PrenomSelectedFilter}
            onfilterChange={onPrenomFilterChange}
          />
        </Collapse>

        <Collapse
           isOpened={NumSSActive}
           keepCollapsedContent={true}>
           <SearchInput
             // label:
             showLabel={true}
             labelText={'NumSS'}
             // value
             value={numssValue}
             onValueChanged={onNumssValueChanged}
             // help block text:
             showHelpBlock={true}
             helpBlockText={'A renseigner sur 13 ou 15 caractères'}
             // filter
             listFilters={searchInputBenefFilters}
             selectedfilter={numssSelectedFilter}
             onfilterChange={onNumssFilterChange}
           />
        </Collapse>
       <div style={{height: '40px'}}></div>

       <SearchButton
        buttonText={'Rechercher'}
        onClick={onSearch}
       />
      </form>
    </div>

  );
};

SearchForm.propTypes = {
  criterias: PropTypes.array.isRequired,
  onCriteriaClick: PropTypes.func.isRequired,

  searchInputBenefFilters: PropTypes.array.isRequired,
  // identifiant
  identActive: PropTypes.bool.isRequired,
  identValue: PropTypes.string.isRequired,
  identSelectedFilter: PropTypes.string.isRequired,
  onIndentValueChanged: PropTypes.func.isRequired,
  onIdentFilterChange: PropTypes.func.isRequired,
  // nom
  NomActive: PropTypes.bool.isRequired,
  nomValue: PropTypes.string.isRequired,
  onNomValueChanged: PropTypes.func.isRequired,
  NomSelectedFilter: PropTypes.string.isRequired,
  onNomFilterChange: PropTypes.func.isRequired,
  // prenom
  PrenomActive: PropTypes.bool.isRequired,
  prenomValue: PropTypes.string.isRequired,
  onPrenomValueChanged: PropTypes.func.isRequired,
  PrenomSelectedFilter: PropTypes.string.isRequired,
  onPrenomFilterChange: PropTypes.func.isRequired,
  // numss
  NumSSActive: PropTypes.bool.isRequired,
  numssValue: PropTypes.string.isRequired,
  onNumssValueChanged: PropTypes.func.isRequired,
  numssSelectedFilter: PropTypes.string.isRequired,
  onNumssFilterChange: PropTypes.func.isRequired,

  onSearch: PropTypes.func.isRequired
};

export default SearchForm;
