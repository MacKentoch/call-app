import React, {
  Component,
  PropTypes
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';

class StrikeThrough extends Component {
  constructor(props) {
    super(props);

    this.state = {
      command: 'strikeThrough',
      arg: null
    };

    this.handlesOnClick = this.handlesOnClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-default"
        style={{width: '30px'}}
        onClick={this.handlesOnClick}>
        <i className="fa fa-strikethrough"></i>
      </button>
    );
  }

  handlesOnClick(event) {
    event.preventDefault();

    const { command } = this.state;
    const { onClick } = this.props;

    onClick(command);
  }
}

StrikeThrough.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default StrikeThrough;
