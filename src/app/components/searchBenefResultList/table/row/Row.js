import React, { PropTypes } from 'react';
import { Link }             from 'react-router';
import Switch               from 'rc-switch';

const Row  = ({
  id,
  nom,
  nomJeuneFille,
  prenom,
  numss,
  dateNaissance,
  dateDeces,
  statutActivite,
  isRet,
  isPreRet,
  //
  consultLinkTo
}) => {
  return (
    <tr
      id={id}
      style={{cursor: 'pointer'}}>

      <td style={{width: '90px'}}>
        {nom}
      </td>

      {/* <td>
        {nomJeuneFille}
      </td> */}

      <td>
        {prenom}
      </td>

      <td>
        {numss}
      </td>

      {/* <td>
        {dateNaissance}
      </td> */}

      {/* <td>
        {dateDeces}
      </td> */}

      <td>
        {statutActivite}
      </td>

      <td>
        <Switch
          disabled={true}
          checked={isRet === true ? true : false}
        />
      </td>

      <td>
        <Switch
          disabled={true}
          checked={isPreRet === true ? true : false}
        />
      </td>

      <td>
        <Link to={consultLinkTo}>
          <i
            className="fa fa-angle-right"
            aria-hidden="true">
          </i>
        </Link>
      </td>

    </tr>
  );
};

Row.propTypes = {
  consultLinkTo: PropTypes.string.isRequired,

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
};

export default Row;
