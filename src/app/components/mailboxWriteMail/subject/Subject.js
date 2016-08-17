import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class Subject extends Component {
  constructor(props) {
    super(props);
    this.handlesOnChange = this.handlesOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { value } = this.props;
    return (
      <div className="form-group">
        <input
          className="form-control"
          placeholder="Objet:"
          value={value}
          onChange={this.handlesOnChange}
        />
      </div>
    );
  }

  handlesOnChange(evt) {
    const {target: {value}} = evt;
    const { onChange } = this.props;
    onChange(value.trim());
  }
}

Subject.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Subject;
