import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { appConfig }  from '../../../../config';


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
        <td style={{width: '100px'}}>
          {numDossier}
        </td>
        <td style={{width: '90px'}}>
          {domaine}
        </td>
        <td style={{width: '120px'}}>
          {regime}
        </td>
        <td style={{width: '90px'}}>
          {societe}
        </td>
        <td style={{width: '80px'}}>
          {numSte}
        </td>
        <td style={{width: '90px'}}>
          {statutBenef}
        </td>
        <td style={{width: '80px'}}>
          {dateEntreeDispositif}
        </td>
        <td style={{width: '80px'}}>
          {dateSortieDispositif}
        </td>
        <td style={{width: '80px'}}>
          {dateTauxPlein}
        </td>
        {/* editable row depends condition: */}
        {
          domaine === appConfig.editableDomaine
          ?
            <td style={{width: '10px'}}>
              <i
                className="fa fa-pencil"
                aria-hidden="true">
              </i>
            </td>
          :
            <td style={{width: '10px'}}>
              &nbsp;
            </td>
        }
      </tr>
    );
  }

  handlesOnRowClick(event) {
    event.preventDefault();
    const { id, onRowClick } = this.props;
    onRowClick(id);
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
