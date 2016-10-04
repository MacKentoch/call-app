import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { appConfig }  from '../../../../config';
import DatePicker     from 'react-datepicker';
import moment         from 'moment';
import {
  isValidDateOrReturnDefault
}                     from '../../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;


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

        <td style={{width: '150px'}}>
         <span>
           {regime}
         </span>
        </td>
        <td>
        {
          isEditing
          ?
            <input
              className="form-control"
              id="edit"
              type="text"
              value={editSociete}
              onChange={this.handlesOnEditSociete}
            />
          :
           <span>
             {societe}
           </span>
        }
        </td>
        <td style={{width: '80px'}}>
        {
          isEditing
          ?
            <input
              className="form-control"
              id="edit"
              type="text"
              value={editNumSte}
              onChange={this.handlesOnEditNumSte}
            />
          :
           <span>
             {numSte}
           </span>
        }
        </td>
        <td style={{width: '90px'}}>
        {
          isEditing
          ?
            <input
              className="form-control"
              id="edit"
              type="text"
              value={editStatutBenef}
              onChange={this.handlesOnEditStatutBenef}
            />
          :
           <span>
             {statutBenef}
           </span>
        }
        </td>
        <td style={{width: '120px'}}>
        {
          isEditing
          ?
            <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={isValidDateOrReturnDefault(editDateEntree, formatDate)}
              onChange={this.handlesOnDateEntreeDispositifChanged}
            />
          :
           <span>
             {dateEntreeDispositif}
           </span>
        }
        </td>
        <td style={{width: '120px'}}>
        {
          isEditing
          ?
            <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={isValidDateOrReturnDefault(editDateSortie, formatDate)}
              onChange={this.handlesOnDateSortieDispositifChanged}
            />
          :
           <span>
             {dateSortieDispositif}
           </span>
        }
        </td>
        <td style={{width: '120px'}}>
        {
          isEditing
          ?
            <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={moment(editDateTauxPlein, formatDate)}
              onChange={this.handlesOnDateTauxPleinDispositifChanged}
            />
          :
           <span>
             {dateTauxPlein}
           </span>
        }
        </td>
        {/* editable row depends condition: */}
        {
          domaine === appConfig.editableDomaine
          ?
            <td style={{width: '100px'}}>
              {
                !isEditing
                ?
                <button
                  className="btn orange_button btn-sm pull-right"
                  onClick={this.handlesOnEditRowClick}>
                  <i
                    className="fa fa-pencil"
                    aria-hidden="true">
                  </i>
                </button>
                :
                <span>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={this.handlesOnValidEditDossier}>
                    <i
                      className="fa fa-check"
                      aria-hidden="true">
                    </i>
                  </button>
                  <button
                    className="btn btn-default btn-sm"
                    onClick={this.handlesOnCancelEditDossier}>
                    <i
                      className="fa fa-times"
                      aria-hidden="true">
                    </i>
                  </button>
                </span>
              }
            </td>
          :
            <td style={{width: '30px'}}>
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

  handlesOnEditRegime(event) {
    event.preventDefault();
    this.setState({editRegime: event.target.value.trim()});
  }

  handlesOnEditSociete(event) {
    event.preventDefault();
    this.setState({editSociete: event.target.value.trim()});
  }

  handlesOnEditNumSte(event) {
    event.preventDefault();
    this.setState({editNumSte: event.target.value.trim()});
  }

  handlesOnEditStatutBenef(event) {
    event.preventDefault();
    this.setState({editStatutBenef: event.target.value.trim()});
  }

  handlesOnDateEntreeDispositifChanged(value) {
    this.setState({editDateEntree: value});
  }

  handlesOnDateSortieDispositifChanged(value) {
    this.setState({editDateSortie: value});
  }

  handlesOnDateTauxPleinDispositifChanged(value) {
    this.setState({editDateTauxPlein: value});
  }

  handlesOnRowClick(event) {
    event.preventDefault();
    const { isEditing } = this.props;
    if (!isEditing) {
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

  handlesOnValidEditDossier(event) {
    event.preventDefault();
    event.stopPropagation();

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
    const {
      id,
      numDossier,
      onValidEditDossier
    } = this.props;

    const dateEntreeStr = moment(editDateEntree, formatDate).isValid()
                            ? moment(editDateEntree, formatDate).format('DD/MM/YYYY')
                            : '';

    const dateSortieStr = moment(editDateSortie, formatDate).isValid()
                            ? moment(editDateSortie, formatDate).format('DD/MM/YYYY')
                            : '';

    const dateTauxPleinStr = moment(editDateTauxPlein, formatDate).isValid()
                            ? moment(editDateTauxPlein, formatDate).format('DD/MM/YYYY')
                            : '';

    const editedDossier = {
      id,
      numDossier,
      domaine: editDomaine,
      regime: editRegime,
      societe: editSociete,
      numSte: editNumSte,
      statutBenef: editStatutBenef,
      dateEntreeDispositif: dateEntreeStr,
      dateSortieDispositif: dateSortieStr,
      dateTauxPlein: dateTauxPleinStr
    };

    onValidEditDossier(editedDossier);
  }

  handlesOnCancelEditDossier(event) {
    event.preventDefault();
    event.stopPropagation();

    const { onCancelEditDossier } = this.props;

    onCancelEditDossier();
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
