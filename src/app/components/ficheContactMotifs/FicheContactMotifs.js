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
      addnewMotifs,

      listMotifs
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
                  onClick={addnewMotifs}>
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
                  isEditing,
                  idNiveau2,
                  labelNiveau2,
                  valueNiveau2,
                  listMotifsNiveau2,
                  onChangeNiveau2,
                  idNiveau3,
                  labelNiveau3,
                  valueNiveau3,
                  listMotifsNiveau3,
                  onChangeNiveau3,
                  idNiveau4,
                  labelNiveau4,
                  valueNiveau4,
                  listMotifsNiveau4,
                  onChangeNiveau4
                } = motif;

                if (isEditing) {
                  return (
                    <div
                      key={MotifIdx}
                      className="row">
                      <div className="col-xs-4">
                        <MotifDropDown
                          id={idNiveau2}
                          label={labelNiveau2}
                          value={valueNiveau2}
                          onChange={onChangeNiveau2}
                          listMotifsRef={listMotifsNiveau2}
                        />
                      </div>
                      <div className="col-xs-4">
                        <MotifDropDown
                          id={idNiveau3}
                          label={labelNiveau3}
                          value={valueNiveau3}
                          onChange={onChangeNiveau3}
                          listMotifsRef={listMotifsNiveau3}
                        />
                      </div>
                      <div className="col-xs-4">
                        <MotifDropDown
                          id={idNiveau4}
                          label={labelNiveau4}
                          value={valueNiveau4}
                          onChange={onChangeNiveau4}
                          listMotifsRef={listMotifsNiveau4}
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={MotifIdx}
                      className="row">
                      <div className="col-xs-4">
                        <LabelMotif
                          id={idNiveau2}
                          label={labelNiveau2}
                          value={valueNiveau2}
                        />
                      </div>
                      <div className="col-xs-4">
                        <LabelMotif
                          id={idNiveau3}
                          label={labelNiveau3}
                          value={valueNiveau3}
                        />
                      </div>
                      <div className="col-xs-4">
                        <LabelMotif
                          id={idNiveau4}
                          label={labelNiveau4}
                          value={valueNiveau4}
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
}

FicheContactMotifs.propTypes = {
  saveMotifs: PropTypes.func.isRequired,
  addnewMotifs: PropTypes.func.isRequired,

  listMotifs: PropTypes.arrayOf(
    PropTypes.shape({
      isEditing: PropTypes.bool,

      idNiveau2: PropTypes.string.isRequired,
      labelNiveau2: PropTypes.string.isRequired,
      valueNiveau2: PropTypes.string,
      listMotifsNiveau2: PropTypes.arrayOf(PropTypes.string).isRequired,
      onChangeNiveau2: PropTypes.func.isRequired,

      idNiveau3: PropTypes.string.isRequired,
      labelNiveau3: PropTypes.string.isRequired,
      valueNiveau3: PropTypes.string,
      listMotifsNiveau3: PropTypes.arrayOf(PropTypes.string).isRequired,
      onChangeNiveau3: PropTypes.func.isRequired,

      idNiveau4: PropTypes.string.isRequired,
      labelNiveau4: PropTypes.string.isRequired,
      valueNiveau4: PropTypes.string,
      listMotifsNiveau4: PropTypes.arrayOf(PropTypes.string).isRequired,
      onChangeNiveau4: PropTypes.func.isRequired
    })
  ).isRequired
};

export default FicheContactMotifs;
