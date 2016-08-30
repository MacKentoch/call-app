import React, {
  Component,
  PropTypes
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';
import ViewLink         from './viewLink/ViewLink';
import SearchBenefLink  from './searchBenefLink/SearchBenefLink';
import { appConfig }    from '../../../../../../config';

const searchBenefViewName = appConfig.views.beneficaires.recherche.viewName || 'not defined';

class MenuLinks extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { activeView, views, onSearchClick } = this.props;
    return (
      <ul className="sidebar-menu sidebar-menu__marginTop">
        {
          views.map(
            ({name, linkTo, faIconName, itemCount}, idx) => {
              if (name === searchBenefViewName) {
                // special case for search benef modal:
                return (
                  <SearchBenefLink
                    key={idx}
                    isActive={activeView === name}
                    onSearchClick={onSearchClick}
                    viewName={name}
                    faIconName={faIconName}
                  />
                );
              }

              return (
                <ViewLink
                  key={idx}
                  isActive={activeView === name}
                  linkTo={linkTo}
                  viewName={name}
                  faIconName={faIconName}
                  itemCount={itemCount ? itemCount : 0}
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
  onSearchClick: PropTypes.func, // optional since only concerns search benef
  views: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
      faIconName: PropTypes.string.isRequired,
      itemCount: PropTypes.number
    })
  ).isRequired
};

export default MenuLinks;
