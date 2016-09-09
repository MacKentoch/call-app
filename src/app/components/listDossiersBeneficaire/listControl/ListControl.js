import React, {
  Component,
  PropTypes
}                           from 'react';
import shallowCompare       from 'react-addons-shallow-compare';

class ListControl extends Component {
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
    const {
      minPage,
      maxPage,
      totalPages,
      onPagingPreviousClick,
      onPagingNextClick,
      isEditingDossiers
    } = this.props;
    const { searchValue } = this.state;

    return (
      <div
        className="row"
        style={{marginLeft: '5px', marginRight: '5px'}}>
        <div
          className="col-xs-12"
          style={{display: 'block', padding: '5px'}}>
          {/* search */}
          <div className="has-feedback pull-left">
            <input
              type="text"
              readOnly={isEditingDossiers}
              className="form-control input-sm"
              style={{width: '250px'}}
              placeholder="Rechercher"
              value={searchValue}
              onChange={this.handlesOnSearchChange}
              onKeyPress={this.handlesOnSearchKeyPress}
            />
            <span className="glyphicon glyphicon-search form-control-feedback"></span>
          </div>
          {/* paginate */}
          <div className="pull-right">
            {minPage}-{maxPage}/{totalPages}
            &nbsp;
            <div className="btn-group">
              <button
                type="button"
                disabled={isEditingDossiers}
                className="btn btn-default btn-sm"
                onClick={onPagingPreviousClick}>
                <i className="fa fa-chevron-left"></i>
              </button>
              <button
                type="button"
                disabled={isEditingDossiers}
                className="btn btn-default btn-sm"
                onClick={onPagingNextClick}>
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
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

ListControl.propTypes = {
  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,

  onPagingPreviousClick: PropTypes.func.isRequired,
  onPagingNextClick: PropTypes.func.isRequired,

  showCheckToggle: PropTypes.bool,

  onSearch: PropTypes.func.isRequired,

  isEditingDossiers: PropTypes.bool.isRequired
};

ListControl.defaultProps  ={
  showCheckToggle: false,
  showReply: false,
  showForward: false
};

export default ListControl;
