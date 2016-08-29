import React, { PropTypes } from 'react';
import Row from './row/Row';

const Table  = ({benefs, consultLinkTo}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>
            Nom
          </th>

          {/* <th>
            Nom de jeune fille
          </th> */}

          <th>
            Prénom
          </th>

          <th>
            Numéro de sécu.
          </th>

          {/* <th>
            <i className="fa fa-calendar" aria-hidden="true"></i>
            &nbsp;
            naissance
          </th> */}

          {/* <th>
            <i className="fa fa-calendar" aria-hidden="true"></i>
            &nbsp;
            décès
          </th> */}

          <th>
            Statut activité
          </th>

          <th>
            Retraite
          </th>

          <th>
            Pré-retraire
          </th>
        </tr>
      </thead>
      <tbody>
        {
          benefs.map(
            ({
              id,
              nom,
              nomJeuneFille,
              prenom,
              numss,
              dateNaissance,
              dateDeces,
              statutActivite,
              isRet,
              isPreRet
            },
            benefIdx) => {
              return (
                <Row
                  key={benefIdx}
                  consultLinkTo={`${consultLinkTo}`}
                  id={id}
                  nom={nom}
                  nomJeuneFille={nomJeuneFille}
                  prenom={prenom}
                  numss={numss}
                  dateNaissance={dateNaissance}
                  dateDeces={dateDeces}
                  statutActivite={statutActivite}
                  isRet={isRet}
                  isPreRet={isPreRet}
                />
              );
            }
          )
        }
      </tbody>
    </table>
  );
};

Table.propTypes = {
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
  consultLinkTo: PropTypes.string.isRequired
};

export default Table;
