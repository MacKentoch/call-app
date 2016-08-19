import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  Motion,
  spring
}                     from 'react-motion';
import MenuHeader     from './menuHeader/MenuHeader';
import MenuLinks      from './menuLinks/MenuLinks';

const views = ['Accueil', 'Recherche'];
const activeView = 'Accueil';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      minHeight: 0,
      maxHeight: 100 // by default: will be changed with real hight
    };
    this.handlesCollapseClick = this.handlesCollapseClick.bind(this);
  }

  componentDidMount() {
    if (this.MenuLinkComponent) {
      this.getMenuLinkFullHeight();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { headerTitle  } = this.props;
    const { isCollapsed, minHeight, maxHeight } = this.state;
    return (
      <div>
        <MenuHeader
          title={headerTitle}
          onClick={this.handlesCollapseClick}
        />
        <Motion style={{height: spring(isCollapsed ? minHeight: maxHeight)}}>
          {
            ({height}) =>
              <MenuLinks
                ref={(ref)=>{
                  this.MenuLinkComponent = ref;
                }}
                activeView={activeView}
                views={views}
                style={{
                  height: `${height}px`
                }}
              />
          }
        </Motion>
      </div>
    );
  }

  handlesCollapseClick(evt) {
    evt.preventDefault();
    console.log('handlesCollapseClick event');
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  }

  getMenuLinkFullHeight() {
    
    // get MenuLinkComponent height ans store to state as maxHeight
  }
}

Menu.propTypes = {
  headerTitle: PropTypes.string.isRequired
};

export default Menu;
