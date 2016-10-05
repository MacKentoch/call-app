import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import moment         from 'moment';

moment.locale('fr');


class Row extends Component {
  constructor(props) {
    super(props);

    this.handlesOnRowClick = this.handlesOnRowClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
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
    } = this.props;

    return (
      <tr
        id={id}
        style={{cursor: 'pointer'}}
        onClick={this.handlesOnRowClick}>

        <td style={{width: '90px'}}>
          {numDossier}
        </td>

        <td style={{width: '120px'}}>
         <span>
           {domaine}
         </span>
        </td>

        <td style={{width: '150px'}}>
         <span>
           {regime}
         </span>
        </td>

        <td>
         <span>
           {societe}
         </span>
        </td>

        <td style={{width: '80px'}}>
         <span>
           {numSte}
         </span>
        </td>

        <td style={{width: '90px'}}>
         <span>
           {statutBenef}
         </span>
        </td>

        <td style={{width: '120px'}}>
         <span>
           {dateEntreeDispositif}
         </span>
        </td>

        <td style={{width: '120px'}}>
         <span>
           {dateSortieDispositif}
         </span>
        </td>

        <td style={{width: '120px'}}>
         <span>
           {dateTauxPlein}
         </span>
        </td>

      </tr>
    );
  }

  handlesOnRowClick(event) {
    event.preventDefault();

    const {
      id,
      numDossier,
      domaine,
      regime,
      societe,
      numSte,
      statutBenef,
      dateEntreeDispositif,
      dateSortieDispositif,
      dateTauxPlein,

      onRowClick
    } = this.props;

    onRowClick({
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
    });
  }
}

Row.propTypes = {
  id: PropTypes.number,
  numDossier: PropTypes.string,
  domaine: PropTypes.string,
  regime: PropTypes.string,
  societe: PropTypes.string,
  numSte: PropTypes.string,
  statutBenef: PropTypes.string,
  dateEntreeDispositif: PropTypes.string,
  dateSortieDispositif: PropTypes.string,
  dateTauxPlein: PropTypes.string,

  onRowClick: PropTypes.func.isRequired
};

export default Row;
