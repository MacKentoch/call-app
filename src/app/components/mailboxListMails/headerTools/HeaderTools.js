import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class HeaderTools extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
    this.handlesOnSearchChange = this.handlesOnSearchChange.bind(this);
    this.handlesOnSearchKeyPress = this.handlesOnSearchKeyPress.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {title} = this.props;
    const {searchValue} = this.state;
    return (
      <div className="box-header with-border">
        <h3 className="box-title">
          {title}
        </h3>
        <div className="box-tools pull-right">
          <div className="has-feedback">
            <input
              type="text"
              className="form-control input-sm"
              placeholder="Rechercher"
              value={searchValue}
              onChange={this.handlesOnSearchChange}
              onKeyPress={this.handlesOnSearchKeyPress}
            />
            <span className="glyphicon glyphicon-search form-control-feedback"></span>
          </div>
        </div>
      </div>
    );
  }

  handlesOnSearchChange(event) {
    event.preventDefault();
    const {onSearch} = this.props;
    const newValue = event.target.value.trim();
    this.setState({ searchValue: newValue });

    if (newValue) {
      onSearch(newValue);
    }
    
    if (newValue.trim().length === 0) {
      // remove search filter
      onSearch('');
    }
  }

  handlesOnSearchKeyPress(event) {
    const key = event.which || event.keyCode;
    if (key === 13) {
      const {onSearch} = this.props;
      const value = event.target.value.trim();
      if (value) {
        onSearch(value);
      }
    }
  }
}

HeaderTools.propTypes = {
  title: PropTypes.oneOf(['Reçus', 'Envoyés']).isRequired,
  onSearch: PropTypes.func.isRequired
};

export default HeaderTools;
