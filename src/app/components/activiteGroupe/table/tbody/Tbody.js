import React, { PropTypes } from 'react';

const Tbody = ({groupActivity}) => {
  return (
    <tbody>
      {
        groupActivity.map(
          (group, groupIdx) => {
            return (
              <tr key={groupIdx}>
                <td>
                  {group.groupName}
                </td>
                <td>
                  {group.nbFichesEnCours}
                </td>
                <td>
                  {group.nbFichesEnRetard}
                </td>
                <td>
                  <span className={`badge bg-${group.colorFicheRetard}`}>
                    {`${group.pourcentageFicheRetard}%`}
                  </span>
                </td>
                <td>
                  {group.nbFichesNonAffectees}
                </td>
              </tr>
            );
          }
        )
      }
    </tbody>
  );
};

Tbody.propTypes = {
  groupActivity: PropTypes.arrayOf(
    PropTypes.shape({
      groupId: PropTypes.number.isRequired,
      groupName: PropTypes.string.isRequired,
      nbFichesEnCours: PropTypes.number.isRequired,
      nbFichesEnRetard: PropTypes.number.isRequired,
      nbFichesNonAffectees: PropTypes.number.isRequired,
      pourcentageFicheRetard: PropTypes.number.isRequired,
      colorFicheRetard: PropTypes.string.isRequired
    })
  )
};

export default Tbody;
