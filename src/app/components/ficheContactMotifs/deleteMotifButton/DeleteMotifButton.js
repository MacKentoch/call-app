import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';


class DeleteMotifButton extends Component {
  constructor(props) {
    super(props);

    this.handlesOnRemoveMotifs = this.handlesOnRemoveMotifs.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return(
      <div
        style={{
          height: '70px'
        }}>
        <button
          className="btn mailBoxNewEmailButton_button pull-right"
          style={{color: '#F1F1F1'}}
          onClick={this.handlesOnRemoveMotifs}>
          <i className="fa fa-eraser" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  handlesOnRemoveMotifs(event) {
    event.preventDefault();
    const { onRemoveMotifs, rowIdx } = this.props;
    onRemoveMotifs(rowIdx);
  }
}

DeleteMotifButton.propTypes = {
  rowIdx: PropTypes.number.isRequired,
  onRemoveMotifs: PropTypes.func.isRequired
};

export default DeleteMotifButton;
