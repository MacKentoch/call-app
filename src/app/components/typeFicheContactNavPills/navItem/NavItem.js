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

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { itemText, isSelected } = this.props;
    return (
      <li
        className={cx({
          'active': isSelected,
          'col-xs-5': true
        })}
        style={{
          cursor: 'default'
        }}>
        <a
          onClick={this.handlesOnClick}
          style={{textAlign: 'center'}}>
          {itemText}
        </a>
      </li>
    );
  }

  handlesOnClick(event) {
    event.preventDefault();
    const { onClick, itemId } = this.props;
    onClick(itemId);
  }
}

NavItem.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  itemText: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NavItem;
