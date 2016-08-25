import React, { PropTypes } from 'react';
import { appConfig } from '../../../../config';

const searchInputBenefFilters = [...appConfig.searchBenefInputFilters];
const seachBenefDefaultFilter = searchInputBenefFilters[0].libelle;


const SearchInput = ({showLabel, labelText, showHelpBlock, helpBlockText}) => {
  return (
    <div className="form-group">
      {
        showLabel &&
        <label htmlFor="exampleInputEmail1">
          {labelText}
        </label>
      }
      <div className="input-group m-b-10">
        <div className="input-group-btn">
          <button
            type="button"
            className="btn btn-white dropdown-toggle"
            data-toggle="dropdown">
            {seachBenefDefaultFilter}
            &nbsp;
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            {
              searchInputBenefFilters.map(
                (filter, idx) => {
                  return (
                    <li key={idx}>
                      <a href="#">
                        {filter.libelle}
                      </a>
                    </li>
                  );
                }
              )
            }
          </ul>
        </div>
        <input
          type="text"
          placeholder="saisir la rechercher..."
          className="form-control"
        />
      </div>
      {
        showHelpBlock &&
        <p className="help-block">
          {helpBlockText}
        </p>
      }
    </div>
  );
};

SearchInput.propTypes = {
  // label:
  showLabel: PropTypes.bool,
  labelText: PropTypes.string,
  // help block text:
  showHelpBlock: PropTypes.bool,
  helpBlockText: PropTypes.string
};

SearchInput.defaultProps = {
  // label:
  showLabel: true,
  labelText: 'val1',
  // help block text:
  showHelpBlock: true,
  helpBlockText: 'val2'
};

export default SearchInput;
