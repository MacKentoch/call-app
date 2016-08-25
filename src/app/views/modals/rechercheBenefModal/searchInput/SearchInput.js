import React, { PropTypes } from 'react';

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
            Commence par
            &nbsp;
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a href="#">
                Action
              </a>
            </li>
            <li>
              <a href="#">
                Another action
              </a>
            </li>
            <li>
              <a href="#">
                Something else here
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <a href="#">
                Separated link
              </a>
            </li>
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
