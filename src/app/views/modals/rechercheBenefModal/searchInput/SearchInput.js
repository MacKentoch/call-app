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
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {showLabel, labelText, showHelpBlock, helpBlockText} = this.props;
    const { selectedfilter, listFilters } = this.props;
    return (
      <div className="form-group">
        {
          showLabel &&
          <label htmlFor="exampleInputEmail1">
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
            placeholder="saisir la rechercher..."
            className="form-control"
          />
        </div>
        {
          showHelpBlock &&
          <p className="help-block">
            {helpBlockText}
          </p>
        }
      </div>
    );
  }

  handlesSelectFilter(filterId, filterLibelle) {
    const { onfilterChange } = this.props;
    console.log(`filterid: ${filterId}, libelle: ${filterLibelle}`);
    onfilterChange(filterId, filterLibelle);
  }
}

SearchInput.propTypes = {
  // label:
  showLabel: PropTypes.bool,
  labelText: PropTypes.string,
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
