import React, {
  Component,
  PropTypes
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';


class ActionsBoite extends Component {
  constructor(props, context) {
    super(props, context);
    this.handlesOnReceptionClick = this.handlesOnReceptionClick.bind(this);
    this.handlesOnEnvoyesClick= this.handlesOnEnvoyesClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <ul
        style={{
          borderLeftColor: '#F4F4F4',
          borderLeftWidth: '1px',
          borderLeftStyle: 'outset'
        }}
        className="list-unstyled">
        <li
          style={{
            paddingLeft: '15px'
          }}
          onClick={this.handlesOnReceptionClick}>
          <i className="fa fa-inbox" aria-hidden="true"></i>
          &nbsp;
          Boîte de réception
        </li>
        <li
          style={{
            paddingLeft: '15px'
          }}
          onClick={this.handlesOnEnvoyesClick}>
          <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          &nbsp;
          Envoyés
        </li>
      </ul>
    );
  }

  handlesOnReceptionClick(event) {
    event.preventDefault();
    const {boiteId, onReceptionClick} = this.props;
    onReceptionClick(boiteId);
  }

  handlesOnEnvoyesClick(event) {
    event.preventDefault();
    const {boiteId, onEnvoyesClick} = this.props;
    onEnvoyesClick(boiteId);
  }
}

ActionsBoite.propTypes = {
  boiteId: PropTypes.number,
  onReceptionClick: PropTypes.func,
  onEnvoyesClick: PropTypes.func
};

export default ActionsBoite;
