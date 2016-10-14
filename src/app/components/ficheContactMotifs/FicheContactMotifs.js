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
    } = this.props;

    return (
      <div className="row">
        <div className="col-xs-3">
          
        </div>
        <div className="col-xs-9">

        </div>
      </div>
    );
  }
}

FicheContactMotifs.propTypes = {
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
};

FicheContactMotifs.defaultProps = {
  isEditing: false
};

export default FicheContactMotifs;
