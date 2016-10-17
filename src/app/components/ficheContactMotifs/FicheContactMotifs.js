import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import MotifDropDown  from './motifDropDown/MotifDropDown';
import LabelMotif     from './labelMotif/LabelMotif';


class FicheContactMotifs extends Component {
  constructor(props) {
    super(props);

    this.handlesOnChangeNiveau2 = this.handlesOnChangeNiveau2.bind(this);
    this.handlesOnChangeNiveau3 = this.handlesOnChangeNiveau3.bind(this);
    this.handlesOnChangeNiveau4 = this.handlesOnChangeNiveau4.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      saveMotifs,
      addNewMotifs,

      listMotifs,

      labelNiveau2,
      labelNiveau3,
      labelNiveau4,

      listMotifsNiveau3,
      listMotifsNiveau2,
      listMotifsNiveau4,

      onChangeNiveau2,
      onChangeNiveau3,
      onChangeNiveau4
    } = this.props;

    return (
      <div className="row">
        <div className="col-xs-3">
          <div className="row">
            <div className="col-xs-12">
              <label
                className="control-label"
                htmlFor="inputDateCreation">
                Motifs
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              {
                this.oneMotifAtLeastIsEditing() &&
                <a
                  className="btn btn-primary btn-block mailBoxNewEmailButton_button"
                  style={{width: '120px'}}
                  onClick={saveMotifs}>
                  <i className="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;
                  Enregister
                </a>
              }
              {
                !this.oneMotifAtLeastIsEditing() &&
                <a
                  className="btn btn-primary btn-block mailBoxNewEmailButton_button"
                  style={{width: '120px'}}
                  onClick={addNewMotifs}>
                  <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;
                  Ajouter
                </a>
              }
            </div>
          </div>
        </div>
        <div className="col-xs-9">
          {
            listMotifs.map(
              (motif, MotifIdx) => {
                const {
                  isEditable,

                  selectMotifLevel2IdFicheContact,
                  selectMotifLevel3IdFicheContact,
                  selectMotifLevel4IdFicheContact
                } = motif;

                if (isEditable) {
                  return (
                    <div
                      key={MotifIdx}
                      className="row">
                      <div className="col-xs-4">
                        <MotifDropDown
                          id={selectMotifLevel2IdFicheContact}
                          label={labelNiveau2}
                          value={selectMotifLevel2IdFicheContact}
                          onChange={onChangeNiveau2}
                          listMotifsRef={listMotifsNiveau2}
                        />
                      </div>
                      <div className="col-xs-4">
                        <MotifDropDown
                          id={selectMotifLevel3IdFicheContact}
                          label={labelNiveau3}
                          value={selectMotifLevel3IdFicheContact}
                          onChange={onChangeNiveau3}
                          listMotifsRef={listMotifsNiveau3}
                        />
                      </div>
                      <div className="col-xs-4">
                        <MotifDropDown
                          id={selectMotifLevel4IdFicheContact}
                          label={labelNiveau4}
                          value={selectMotifLevel4IdFicheContact}
                          onChange={onChangeNiveau4}
                          listMotifsRef={listMotifsNiveau4}
                        />
                      </div>
                    </div>
                  );
                } else {
                  // console.log('list motif level 2: ', listMotifsNiveau2);
                  // console.log('value: ', selectMotifLevel2IdFicheContact);
                  // console.log('label', listMotifsNiveau2[selectMotifLevel2IdFicheContact]);
                  return (
                    <div
                      key={MotifIdx}
                      className="row">
                      <div className="col-xs-4">
                        <LabelMotif
                          id={selectMotifLevel2IdFicheContact}
                          label={labelNiveau2}
                          value={selectMotifLevel2IdFicheContact}
                        />
                      </div>
                      <div className="col-xs-4">
                        <LabelMotif
                          id={selectMotifLevel3IdFicheContact}
                          label={labelNiveau3}
                          value={selectMotifLevel3IdFicheContact}
                        />
                      </div>
                      <div className="col-xs-4">
                        <LabelMotif
                          id={selectMotifLevel4IdFicheContact}
                          label={labelNiveau4}
                          value={selectMotifLevel4IdFicheContact}
                        />
                      </div>
                    </div>
                  );
                }
              }
            )
          }
        </div>
      </div>
    );
  }

  oneMotifAtLeastIsEditing() {
    const { listMotifs } = this.props;
    return listMotifs.some(motif => motif.isEditing);
  }

  handlesOnChangeNiveau2() {

  }

  handlesOnChangeNiveau3() {

  }

  handlesOnChangeNiveau4() {

  }
}

FicheContactMotifs.propTypes = {
  saveMotifs: PropTypes.func.isRequired,
  addNewMotifs: PropTypes.func.isRequired,

  listMotifs: PropTypes.arrayOf(
    PropTypes.shape({
      isEditable: PropTypes.bool,

      selectMotifLevel2IdFicheContact: PropTypes.number.isRequired,
      selectMotifLevel3IdFicheContact: PropTypes.number.isRequired,
      selectMotifLevel4IdFicheContact: PropTypes.number.isRequired
    })
  ).isRequired,

  labelNiveau2: PropTypes.string.isRequired,
  labelNiveau3: PropTypes.string.isRequired,
  labelNiveau4: PropTypes.string.isRequired,

  listMotifsNiveau3: PropTypes.arrayOf(PropTypes.string).isRequired,
  listMotifsNiveau2: PropTypes.arrayOf(PropTypes.string).isRequired,
  listMotifsNiveau4: PropTypes.arrayOf(PropTypes.string).isRequired,

  onChangeNiveau2: PropTypes.func.isRequired,
  onChangeNiveau3: PropTypes.func.isRequired,
  onChangeNiveau4: PropTypes.func.isRequired
};

export default FicheContactMotifs;
