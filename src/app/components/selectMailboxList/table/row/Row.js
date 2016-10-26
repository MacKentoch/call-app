import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Switch         from 'rc-switch';

class Row extends Component {
  constructor(props) {
    super(props);

    this.handlesOnRowClick = this.handlesOnRowClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      id,
      mailBoxName,
      // linkTo,
      unReadsCount
    } = this.props;

    return (
      <tr
        id={id}
        style={{cursor: 'pointer'}}
        onClick={this.handlesOnRowClick}>

        <td style={{width: '150px'}}>
          {mailBoxName}
        </td>

        <td style={{width: '90px'}}>
          {unReadsCount}
        </td>

      </tr>
    );
  }

  handlesOnRowClick(event) {
    event.preventDefault();
    const { id, onRowClick, linkTo } = this.props;
    onRowClick(id, linkTo); // returns mailBox id and linkTo props
  }
}

Row.propTypes = {
  id: PropTypes.number.isRequired,
  mailBoxName: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  unReadsCount: PropTypes.number.isRequired,

  onRowClick: PropTypes.func.isRequired
};

export default Row;
