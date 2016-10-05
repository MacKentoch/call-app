import React, { PropTypes } from 'react';
import Row from './row/Row';

const Table  = ({
  dossiers,
  onRowClick
}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>
            N°Dossier ou matricule
          </th>
          <th>
            Domaine
          </th>
          <th>
            Régime
          </th>
          <th>
            Société
          </th>
          <th>
            N°STE
          </th>
          <th>
            Statut bénéficiaire
          </th>
          <th>
            Dispositif date entrée
          </th>
          <th>
            Dispositif date sortie
          </th>
          <th>
            Date taux plein
          </th>
        </tr>
      </thead>
      <tbody>
        {
          dossiers.map(
            ({
              id,
              numDossier,
              domaine,
              regime,
              societe,
              numSte,
              statutBenef,
              dateEntreeDispositif,
              dateSortieDispositif,
              dateTauxPlein
            },
            dossierIdx) => {
              return (
                <Row
                  key={dossierIdx}
                  onRowClick={onRowClick}

                  id={id}
                  numDossier={numDossier}
                  domaine={domaine}
                  regime={regime}
                  societe={societe}
                  numSte={numSte}
                  statutBenef={statutBenef}
                  dateEntreeDispositif={dateEntreeDispositif}
                  dateSortieDispositif={dateSortieDispositif}
                  dateTauxPlein={dateTauxPlein}
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
  onRowClick: PropTypes.func.isRequired,

  dossiers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      numDossier: PropTypes.string,
      domaine: PropTypes.string,
      regime: PropTypes.string,
      societe: PropTypes.string,
      numSte: PropTypes.string,
      statutBenef: PropTypes.string,
      dateEntreeDispositif: PropTypes.string,
      dateSortieDispositif: PropTypes.string,
      dateTauxPlein: PropTypes.string
    })
  )
};

export default Table;
