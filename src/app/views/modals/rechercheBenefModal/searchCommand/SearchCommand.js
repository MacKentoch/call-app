import React, { PropTypes } from 'react';


const SearchCommand = ({}) => {
  return (
    <div className="form-group">
      <label
        className="col-xs-3 control-label"
        style={{
          paddingTop: '7px'
        }}>
        Critères de recherche:
      </label>
      <div className="col-xs-9">
        <ul className="nav nav-pills nav-justified">
          <li className="active">
            <a href="#">
              Identifiant
            </a>
          </li>

          <li>
            <a href="#">
              Nom
            </a>
          </li>

          <li className="">
            <a href="#">
              Prénom
            </a>
          </li>

          <li className="">
            <a href="#">
              NumSS
            </a>
          </li>
        </ul>
      </div>
    </div>


  );
};

SearchCommand.propTypes = {

};

export default SearchCommand;
