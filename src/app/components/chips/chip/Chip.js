import React, {
  Component,
  PropTypes
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';

class Chip extends Component {
  constructor(props) {
    super(props);

    this.handlesOnClick = this.handlesOnClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { chip } = this.props;
    return (
      <span
        className="chip">
        <span className="chip-value">
          {chip}
        </span>
        <button
          type="button"
          className="chip-delete-button"
          onClick={this.handlesOnClick}>
          x
        </button>
      </span>
    );
  }

  handlesOnClick(event) {
    event.preventDefault();
    const { deleteChip, chip } = this.props;
    deleteChip(chip);
  }
}

Chip.propTypes = {
  chip: PropTypes.string,
  deleteChip: PropTypes.func.isRequired
};

export default Chip;
