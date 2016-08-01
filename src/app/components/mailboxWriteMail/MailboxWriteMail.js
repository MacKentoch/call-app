import React, {
  Component,
  PropTypes
}                           from 'react';
import shallowCompare       from 'react-addons-shallow-compare';
import Title                from './title/Title';
import To                   from './to/To';
import Subject              from './subject/Subject';
import EditableDiv          from '../editableDiv/EditableDiv';
import Upload               from './upload/Upload';
import Attachments          from './attachments/Attachments';


const editorStyle = {
  overflow: 'auto',
  height: 500,
  maxHeight: 1000
};

const mockAttachments = [{
  type: 'pdf',
  filename: 'test',
  filePath: './',
  size: '238 octets'
}];
const mockDestinataires = ['test@test.test'];

class MailboxWriteMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {  } = this.props;
    const { content } = this.state;
    return (
      <div className="panel">
      <div
        className="panel-body"
        style={{
          paddingTop: 0,
          paddingBottom: '10px',
          paddingLeft: '10px',
          paddingRight: '10px'
        }}>
          <Title />
          <div
            style={{marginTop: '10px'}}
            className="box-body no-padding">

            <To destinataires={mockDestinataires} />

            <Subject />

            <div className="form-group">
              <EditableDiv
                style={editorStyle}
                content={content}
                onChange={this.handleContentChange}
              />
            </div>

            <Upload
              onChange={(file)=>console.log('Upload file: ', file)}
            />
            <Attachments
              attachments={mockAttachments}
            />
          </div>

          <div className="box-footer">
            <div className="pull-right">
              <button
                type="reset"
                className="btn btn-default"
                onClick={()=>console.log('Annuler envoi mail event')}>
                <i className="fa fa-times"></i>
                &nbsp;
                Annuler
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={()=>console.log('Envoyer mail event')}>
                <i className="fa fa-envelope-o"></i>
                &nbsp;
                Envoyer
              </button>
            </div>

          </div>

        </div>
      </div>
    );
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }
}

MailboxWriteMail.propTypes = {

};

export default MailboxWriteMail;
