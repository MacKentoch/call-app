import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { appConfig }  from '../../../../config';


class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editDomaine: appConfig.editableDomaine,
      editRegime: '',
      editSociete: '',
      editNumSte: '',
      editStatutBenef: '',
      editDateEntree: '',
      editDateSortie: '',
      editDateTauxPlein: ''
    };

    this.handlesOnRowClick = this.handlesOnRowClick.bind(this);
    this.handlesOnEditRowClick = this.handlesOnEditRowClick.bind(this);
  }

  componentDidMount() {
    this.refreshStateFromProps(this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillReceiveProps(nextProps) {
    this.refreshStateFromProps(nextProps);
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
      dateTauxPlein,
      isEditing
    } = this.props;

    const {
      editDomaine,
      editRegime,
      editSociete,
      editNumSte,
      editStatutBenef,
      editDateEntree,
      editDateSortie,
      editDateTauxPlein
    } = this.state;

    return (
      <tr
        id={id}
        style={{cursor: 'pointer'}}
        onClick={this.handlesOnRowClick}>

        <td style={{width: '100px'}}>
          {numDossier}
        </td>

        <td style={{width: '90px'}}>
          {
            isEditing
            ?
              <input
                className="form-control"
                id="edit"
                type="text"
                value={editDomaine}
                onChange={this.handlesOnChange}
              />
            :
             <span>
               {domaine}
             </span>
          }
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
            <td
              onClick={this.handlesOnEditRowClick}
              style={{width: '10px'}}>
              <button className="btn orange_button btn-sm">
                <i
                  className="fa fa-pencil"
                  aria-hidden="true">
                </i>
              </button>
            </td>
          :
            <td style={{width: '10px'}}>
              &nbsp;
            </td>
        }
      </tr>
    );
  }

  refreshStateFromProps(props) {
    this.setState({
      editRegime: props.regime,
      editSociete: props.societe,
      editNumSte: props.numSte,
      editStatutBenef: props.statutBenef,
      editDateEntree: props.dateEntreeDispositif,
      editDateSortie: props.dateSortieDispositif,
      editDateTauxPlein: props.dateTauxPlein
    });
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

  handlesOnEditRowClick(event) {
    event.preventDefault();
    event.stopPropagation();

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

      onRowEditClick
    } = this.props;

    onRowEditClick({
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

  onRowClick: PropTypes.func.isRequired,

  onRowEditClick: PropTypes.func.isRequired,
  isEditingDossiers: PropTypes.bool.isRequired,

  isEditing: PropTypes.bool.isRequired
};

export default Row;
