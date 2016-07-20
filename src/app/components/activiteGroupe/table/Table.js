import React, { PropTypes } from 'react';
import Thead from './thead/Thead';
import Tbody from './tbody/Tbody';

const Table = ({groupActivity}) => {
  return (
    <div className="panel">
      <div className="panel-body">
      <table className="table table-striped">
        <Thead
          groupActivity= {groupActivity}
        />
        <Tbody
          groupActivity= {groupActivity}
        />
      </table>
      </div>
    </div>
  );
};

Table.propTypes = {
  groupActivity: PropTypes.arrayOf(
    PropTypes.shape({
      groupId: PropTypes.number.isRequired,
      groupName: PropTypes.string.isRequired,
      nbFichesEnCours: PropTypes.number.isRequired,
      nbFichesEnRetard: PropTypes.number.isRequired,
      nbFichesNonAffectees: PropTypes.number.isRequired,
      pourcentageFicheRetard: PropTypes.number.isRequired
    })
  )
};

export default Table;
