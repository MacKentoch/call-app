import React, {
  Component,
  PropTypes
}                           from 'react';
import FileInput            from 'react-file-input';
import shallowCompare       from 'react-addons-shallow-compare';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { accept } = this.props;
    return (
      <div className="form-group">
        <div
          className="btn btn-default btn-file"
          style={{width: '220px'}}>
          <i className="fa fa-paperclip"></i>
          &nbsp;
          Ajouter une pièce jointe
          <FileInput
            name="fileUpload"
            accept={accept}
            placeholder="My Image"
            className="upload__file"
            onChange={this.handleChange}
          />
          {/* <input
            type="file"
            name="attachment"
          /> */}
        </div>
        <p
          style={{
            display: 'block',
            marginTop: '5px',
            marginBottom: '10px',
            color: '#737373',
            fontSize: '11px'
          }}>
          Max. 4MB
        </p>
      </div>
    );
  }

  handleChange(event) {
    const { onChange } = this.props;
    const file = event.target.files[0];
    console.log('file prototype: ', Object.getPrototypeOf(file));
    onChange(file);
  }
}

Upload.propTypes = {
  onChange: PropTypes.func,
  accept: PropTypes.string
};

Upload.defaultProps = {
  accept: '.png,.gif.zip,.pdf,.doc,.docx,.xls,.xlsx,.bmp,.txt'
};

export default Upload;
