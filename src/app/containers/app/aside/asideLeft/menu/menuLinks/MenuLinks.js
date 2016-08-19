import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import ViewLink       from './viewLink/ViewLink';

class MenuLinks extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { activeView, views } = this.props;
    return (
      <ul className="sidebar-menu sidebar-menu__marginTop">
        {
          views.map(
            (viewName, idx) => {
              return (
                <ViewLink
                  key={idx}
                  isActive={activeView === viewName}
                  viewName={viewName}
                  faIconName={''}
                />
              );
            }
          )
        }
      </ul>
    );
  }
}

MenuLinks.propTypes = {
  activeView: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string)
};

export default MenuLinks;
