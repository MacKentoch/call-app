import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import cx             from 'classnames';

class NavItem extends Component {
  constructor(props) {
    super(props);

    this.handlesOnClick = this.handlesOnClick.bind(this);
  }

  render() {
    const { itemText, isSelected  } = this.props;
    return (
      <li className="active">
        <a href="#">
          Home
        </a>
      </li>
    );
  }

  handlesOnClick(event) {
    event.preventDefault()
    const { onClick, itemId } = this.props;
    onClick(itemId);
  }
}

NavItem.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  itemText: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NavItem;
