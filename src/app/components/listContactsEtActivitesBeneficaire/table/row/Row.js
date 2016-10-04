import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class Row extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
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
    } = this.props;

    return (
      <tr
        id={id}
        style={{cursor: 'pointer'}}>

        <td style={{width: '90px'}}>
          {numDossier}
        </td>

        <td style={{width: '90px'}}>
         <span>
           {numFiche}
         </span>
        </td>

        <td style={{width: '110px'}}>
         <span>
           {dateCreation}
         </span>
        </td>

        <td style={{width: '110px'}}>
         <span>
           {dateReception}
         </span>
        </td>

        <td style={{width: '110px'}}>
         <span>
           {canal}
         </span>
        </td>

        <td style={{width: '110px'}}>
         <span>
           {reclamation}
         </span>
        </td>

        <td style={{width: '110px'}}>
         <span>
           {statut}
         </span>
        </td>

        <td style={{width: '110px'}}>
         <span>
           {creePar}
         </span>
        </td>

        <td style={{width: '110px'}}>
         <span>
           {traiteePar}
         </span>
        </td>

        <td style={{width: '110px'}}>
         <span>
           {ficheTransmiseA}
         </span>
        </td>

        <td style={{width: '110px'}}>
         <span>
           {motifs}
         </span>
        </td>

        <td style={{width: '110px'}}>
         <span>
           {delais}
         </span>
        </td>

      </tr>
    );
  }
}

Row.propTypes = {
  id: PropTypes.number.isRequired,
  numDossier: PropTypes.string.isRequired,
  numFiche: PropTypes.number.isRequired,
  dateCreation: PropTypes.string.isRequired,
  dateReception: PropTypes.string.isRequired,
  canal: PropTypes.string.isRequired,
  reclamation: PropTypes.bool.isRequired,
  statut: PropTypes.string.isRequired,
  creePar: PropTypes.string.isRequired,
  traiteePar: PropTypes.string.isRequired,
  ficheTransmiseA: PropTypes.string.isRequired,
  motifs: PropTypes.string.isRequired,
  delais: PropTypes.number.isRequired
};

export default Row;
