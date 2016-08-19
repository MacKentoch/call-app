import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Collapse       from 'react-collapse';
import MenuHeader     from './menuHeader/MenuHeader';
import MenuLinks      from './menuLinks/MenuLinks';

const views = ['Accueil', 'Recherche'];
const activeView = 'Accueil';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {isCollapsed: false};
    this.handlesCollapseClick = this.handlesCollapseClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { headerTitle  } = this.props;
    const { isCollapsed } = this.state;
    return (
      <div>
        <MenuHeader
          title={headerTitle}
          isCollapsed={!isCollapsed}
          onClick={this.handlesCollapseClick}
        />
        <Collapse
          isOpened={!isCollapsed}
          keepCollapsedContent={false}>
          <MenuLinks
            activeView={activeView}
            views={views}
          />
        </Collapse>
      </div>
    );
  }

  handlesCollapseClick(evt) {
    evt.preventDefault();
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  }
}

Menu.propTypes = {
  headerTitle: PropTypes.string.isRequired
};

export default Menu;
