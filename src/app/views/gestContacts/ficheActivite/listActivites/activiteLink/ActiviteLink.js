import React, {
  Component,
  PropTypes
}                           from 'react';
import shallowCompare       from 'react-addons-shallow-compare';
import cx                   from 'classnames';
import {
  limitStringToNChars
}                           from '../../../../../services';

class ActiviteLink extends Component  {
  constructor(props) {
    super(props);

    this.handlesOnClick = this.handlesOnClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {id, label, isSelected, onClick} = this.props;

    return (
      <li className={cx({'active' : isSelected})}>
        <a onClick={this.handlesOnClick}>
          {limitStringToNChars('niveau4')}
        </a>s
      </li>
    );
  }

  handlesOnClick(event) {
    event.preventDefault();
    const { onClick, id } = this.props;
    onClick(id);
  }
}

ActiviteLink.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

ActiviteLink.defaultProps = {
  isSelected: false
};

export default ActiviteLink;
