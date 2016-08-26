import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';


class SearchCriteria extends Component {
  constructor(props) {
    super(props);
    this.handlesOnClick = this.handlesOnClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { libelle, isActive } = this.props;
    return (
      <li
        className={`${isActive === true ? 'active' : ''}`}
        onClick={this.handlesOnClick}>
        <a
          href="#">
          {libelle}
        </a>
      </li>
    );
  }

  handlesOnClick(event) {
    event.preventDefault();
    const { onClick, libelle } = this.props;
    onClick(libelle);
  }
}


SearchCriteria.propTypes = {
  isActive: PropTypes.bool,
  libelle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

SearchCriteria.defaultProps = {
  isActive: false
};

export default SearchCriteria;
