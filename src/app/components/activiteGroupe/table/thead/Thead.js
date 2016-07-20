import React from 'react';

const Thead = () => {
  return (
    <thead>
      <tr>
        <th>Groupe</th>
        <th>Nb. Fiches en cours</th>
        <th>Nb. Fiches en retard</th>
        <th style={{width: '80px'}}>% retard</th>
        <th>Nb. Fiches non affectées</th>
      </tr>
    </thead>
  );
};

export default Thead;
