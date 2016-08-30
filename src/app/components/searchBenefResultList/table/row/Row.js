import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Switch         from 'rc-switch';

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
      nom,
      // nomJeuneFille,
      prenom,
      numss,
      dateNaissance,
      // dateDeces,
      statutActivite,
      isRet,
      isPreRet
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
          {nom}
        </td>

        {/* <td>
          {nomJeuneFille}
        </td> */}

        <td>
          {prenom}
        </td>

        <td style={{width: '100px'}}>
          {dateNaissance}
        </td>

        <td style={{width: '100px'}}>
          {numss}
        </td>

        {/* <td>
          {dateDeces}
        </td> */}

        <td style={{width: '80px'}}>
          {statutActivite}
        </td>

        <td style={{width: '90px'}}>
          <Switch
            disabled={true}
            checkedChildren={'O'}
            unCheckedChildren={'N'}
            checked={isRet === true ? true : false}
          />
        </td>

        <td style={{width: '90px'}}>
          <Switch
            disabled={true}
            checkedChildren={'O'}
            unCheckedChildren={'N'}
            checked={isPreRet === true ? true : false}
          />
        </td>

        <td style={{width: '10px'}}>
          <i
            className="fa fa-angle-right"
            aria-hidden="true">
          </i>
        </td>

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
  // generic
  id: PropTypes.number.isRequired,
  numDossier: PropTypes.string.isRequired,
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
  isPreRet: PropTypes.bool.isRequired,
  // dateEntreePreRet: PropTypes.string,
  // dateSortiePreRet: PropTypes.string,
  // dateTauxPlein: PropTypes.string,
  // numeroEntrepriseCliente: PropTypes.string,
  // libelleEntrepriseCliente: PropTypes.string,
  // numMatriculeSAG: PropTypes.string
  //
  onRowClick: PropTypes.func.isRequired
};

export default Row;
