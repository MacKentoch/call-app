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
import ValidButton          from './validButton/ValidButton';
import CancelButton         from './cancelButton/CancelButton';

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

class MailboxWriteMail extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handlesOnAttachmentsChanged = this.handlesOnAttachmentsChanged.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { destinataires,  onDestinatairesChange } = this.props;
    const { subject,  onSubjectChanged } = this.props;
    const { content } = this.props;
    const { attachments,  onAttachmentsChanged } = this.props;
    const { onCancel, onSend } = this.props;

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
            <To
              destinataires={destinataires}
              onDestinatairesChange={onDestinatairesChange}
            />
            <Subject
              value={subject}
              onChange={onSubjectChanged}
            />
            {/* mail body */}
            <div className="form-group">
              <EditableDiv
                style={editorStyle}
                content={content}
                onChange={this.handleContentChange}
              />
            </div>
            {/* upload attachments */}
            <Upload
              onChange={this.handlesOnAttachmentsChanged}
            />
            {/* displays attachments */}
            <Attachments
              attachments={attachments}
            />
          </div>
          <div className="box-footer">
            <div className="pull-right">
              <CancelButton onClick={onCancel} />
              <ValidButton onClick={onSend} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleContentChange(event) {
    const { onContentChanged } = this.props;
    onContentChanged(event.value.trim());
  }

  handlesOnAttachmentsChanged(file) {
    // is add an attachement
    const { addAttachement, mailboxId } = this.props;
    // debug
    // console.log('handlesOnAttachmentsChanged, file: ', file);
    addAttachement(mailboxId, file);
  }
}

MailboxWriteMail.propTypes = {
  mailboxId: PropTypes.string.isRequired,
  destinataires: PropTypes.array.isRequired,
  onDestinatairesChange: PropTypes.func.isRequired,
  subject: PropTypes.string.isRequired,
  onSubjectChanged: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  onContentChanged: PropTypes.func.isRequired,
  attachments: PropTypes.array.isRequired,
  addAttachement: PropTypes.func.isRequired,
  removeAttachement: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired
};

export default MailboxWriteMail;
