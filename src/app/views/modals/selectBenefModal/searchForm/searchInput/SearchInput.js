import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import SearchInputFilter  from './searchInputFilter/SearchInputFilter';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.handlesSelectFilter = this.handlesSelectFilter.bind(this);
    this.handlesOnValueChanged = this.handlesOnValueChanged.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {showLabel, labelText, showHelpBlock, helpBlockText} = this.props;
    const { selectedfilter, listFilters } = this.props;
    const { value } = this.props;

    return (
      <div
        className="form-group remove-margin-bottom">
        {
          showLabel &&
          <label htmlFor="labelText">
            {labelText}
          </label>
        }
        <div className="input-group m-b-10">
          <div className="input-group-btn">
            <button
              type="button"
              className="btn btn-white dropdown-toggle"
              data-toggle="dropdown">
              {selectedfilter}
              &nbsp;
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              {
                listFilters.map(
                  (filter, idx) => {
                    return (
                      <SearchInputFilter
                        key={idx}
                        filterId={filter.id}
                        libelle={filter.libelle}
                        onClick={this.handlesSelectFilter}
                      />
                    );
                  }
                )
              }
            </ul>
          </div>
          <input
            type="text"
            value={value}
            onChange={this.handlesOnValueChanged}
            placeholder={`${labelText}...`}
            className="form-control"
          />
        </div>
        {
          showHelpBlock &&
          <p
            className="help-block remove-margin-bottom"
            style={{fontSize : '11px'}}>
            {helpBlockText}
          </p>
        }
        <br />
      </div>
    );
  }

  handlesSelectFilter(filterId, filterLibelle) {
    const { onfilterChange } = this.props;
    onfilterChange(filterId, filterLibelle);
  }

  handlesOnValueChanged(event) {
    const value = event.target.value.trim();
    const { onValueChanged } = this.props;
    onValueChanged(value);
  }
}

SearchInput.propTypes = {
  // label:
  showLabel: PropTypes.bool,
  labelText: PropTypes.string,
  // value:
  value: PropTypes.string,
  onValueChanged: PropTypes.func,
  // help block text:
  showHelpBlock: PropTypes.bool,
  helpBlockText: PropTypes.string,
  // selectedfilter
  listFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      libelle: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedfilter: PropTypes.string.isRequired, // filter libelle
  onfilterChange: PropTypes.func
};

SearchInput.defaultProps = {
  // label:
  showLabel: true,
  labelText: 'val1',
  // help block text:
  showHelpBlock: true,
  helpBlockText: 'val2',
  // selectedfilter
  onSelectFilter: PropTypes.func
};

export default SearchInput;
