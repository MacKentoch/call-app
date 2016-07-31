import React, {
  Component,
  PropTypes
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';

class JustifyLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      command: 'justifyLeft',
      arg: null
    };

    this.handlesOnClick = this.handlesOnClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { commandName } = this.props;
    return (
      <a
        href="#"
        onClick={this.handlesOnClick}>
        {commandName}
      </a>
    );
  }

  handlesOnClick(event) {
    event.preventDefault();

    const { command } = this.state;
    const { onClick } = this.props;

    onClick(command);
  }
}

JustifyLeft.propTypes = {
  onClick: PropTypes.func.isRequired,
  commandName:PropTypes.string.isRequired
};

export default JustifyLeft;
