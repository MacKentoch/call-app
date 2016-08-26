import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';


class SearchInputFilter extends Component {
  constructor(props) {
    super(props);
    this.handlesOnClick = this.handlesOnClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { filterId, libelle } = this.props;

    return (
      <li
        id={filterId}
        onClick={this.handlesOnClick}>
        <a href="#">
          {libelle}
        </a>
      </li>
    );
  }

  handlesOnClick(event) {
    event.preventDefault();
    const { filterId, libelle, onClick } = this.props;
    onClick(filterId, libelle);
  }
}

SearchInputFilter.propTypes = {
  filterId: PropTypes.string.isRequired,
  libelle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchInputFilter;
