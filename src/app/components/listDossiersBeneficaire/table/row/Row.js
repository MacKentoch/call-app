import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { appConfig }  from '../../../../config';
import DatePicker     from 'react-datepicker';
import moment         from 'moment';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;


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
    this.handlesOnValidEditDossier = this.handlesOnValidEditDossier.bind(this);
    this.handlesOnCancelEditDossier = this.handlesOnCancelEditDossier.bind(this);

    this.handlesOnEditRowClick = this.handlesOnEditRowClick.bind(this);
    this.handlesOnEditRegime = this.handlesOnEditRegime.bind(this);
    this.handlesOnEditSociete = this.handlesOnEditSociete.bind(this);
    this.handlesOnEditNumSte = this.handlesOnEditNumSte.bind(this);
    this.handlesOnEditStatutBenef = this.handlesOnEditStatutBenef.bind(this);
    this.handlesOnDateEntreeDispositifChanged = this.handlesOnDateEntreeDispositifChanged.bind(this);
    this.handlesOnDateSortieDispositifChanged = this.handlesOnDateSortieDispositifChanged.bind(this);
    this.handlesOnDateTauxPleinDispositifChanged = this.handlesOnDateTauxPleinDispositifChanged.bind(this);
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

        <td style={{width: '90px'}}>
          {numDossier}
        </td>

        <td style={{width: '120px'}}>
         <span>
           {domaine}
         </span>
        </td>

        <td style={{width: '150px'}}>
        {
          isEditing
          ?
            <input
              className="form-control"
              id="edit"
              type="text"
              value={editRegime}
              onChange={this.handlesOnEditRegime}
            />
          :
           <span>
             {regime}
           </span>
        }
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
              selected={moment(editDateEntree, formatDate)}
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
              selected={moment(editDateSortie, formatDate)}
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
      onValidEditDossier
    } = this.props;

    const editedDossier = {
      id,
      // numDossier,
      domaine: editDomaine,
      regime: editRegime,
      societe: editSociete,
      numSte: editNumSte,
      statutBenef: editStatutBenef,
      dateEntreeDispositif: editDateEntree,
      dateSortieDispositif: editDateSortie,
      dateTauxPlein: editDateTauxPlein
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

  isEditing: PropTypes.bool.isRequired,

  onValidEditDossier: PropTypes.func.isRequired,
  onCancelEditDossier: PropTypes.func.isRequired
};

export default Row;
