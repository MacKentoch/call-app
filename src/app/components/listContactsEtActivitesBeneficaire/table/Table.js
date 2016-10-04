import React, { PropTypes } from 'react';
import Row from './row/Row';

const Table  = ({ contactsEtActivites }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>
            N°Dossier
          </th>
          <th>
            N°Fiche
          </th>
          <th>
            Date création
          </th>
          <th>
            Date réception
          </th>
          <th>
            Canal
          </th>
          <th>
            Réclamation
          </th>
          <th>
            Statut
          </th>
          <th>
            Créé Par
          </th>
          <th>
            Traîté Par
          </th>
          <th>
            Fiche Transmise à
          </th>
          <th>
            Motifs
          </th>
          <th>
            Délais
          </th>
        </tr>
      </thead>
      <tbody>
        {
          contactsEtActivites.map(
            ({
              id,
              numDossier,
              numFiche,
              dateCreation,
              dateReception,
              canal,
              reclamation,
              statut,
              creePar,
              traiteePar,
              ficheTransmiseA,
              motifs,
              delais
            },
            contactsEtActivitesIdx) => {
              return (
                <Row
                  key={contactsEtActivitesIdx}
                  // contactsEtActivites props:
                  id={id}
                  numDossier={numDossier}
                  numFiche={numFiche}
                  dateCreation={dateCreation}
                  dateReception={dateReception}
                  canal={canal}
                  reclamation={reclamation}
                  statut={statut}
                  creePar={creePar}
                  traiteePar={traiteePar}
                  ficheTransmiseA={ficheTransmiseA}
                  motifs={motifs}
                  delais={delais}
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
  contactsEtActivites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      numDossier: PropTypes.string.isRequired,
      numFiche: PropTypes.number.isRequired,
      dateCreation: PropTypes.string.isRequired,
      dateReception: PropTypes.string.isRequired,
      canal: PropTypes.string.isRequired, // one of 'Mail', 'Téléphone', 'Courrier'
      reclamation: PropTypes.bool.isRequired,
      statut: PropTypes.string.isRequired, // one of 'En cours', 'Clôturée', 'Terminée',
      creePar: PropTypes.string.isRequired,
      traiteePar: PropTypes.string.isRequired,
      ficheTransmiseA: PropTypes.string.isRequired,
      motifs: PropTypes.string.isRequired,
      delais: PropTypes.number.isRequired // unit is day
    })
  )
};

export default Table;
