import React, { PropTypes } from 'react';
import SearchCriteria       from './SearchCriteria/SearchCriteria';

const SearchCommand = ({criterias, onCriteriaClick}) => {
  return (
    <div className="form-group">
      <label
        className="col-xs-3 control-label"
        style={{
          paddingTop: '7px'
        }}>
        Critères de recherche:
      </label>
      <div
        className="col-xs-9 ">
        <ul
          className="nav nav-pills nav-justified">
          {/* <SearchCriteria
            isActive={active}
            libelle={label}
            onClick={onCriteriaClick}
          />
          <SearchCriteria
            isActive={active}
            libelle={label}
            onClick={onCriteriaClick}
          />
          <SearchCriteria
            isActive={active}
            libelle={label}
            onClick={onCriteriaClick}
          />
          <SearchCriteria
            isActive={active}
            libelle={label}
            onClick={onCriteriaClick}
          /> */}
          {
            criterias.map(
              ({active, label}, idx) => {
                return (
                  <SearchCriteria
                    key={idx}
                    isActive={active}
                    libelle={label}
                    onClick={onCriteriaClick}
                  />
                );
              }
            )
          }
        </ul>
      </div>
    </div>


  );
};

SearchCommand.propTypes = {
  criterias: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onCriteriaClick: PropTypes.func
};

export default SearchCommand;
