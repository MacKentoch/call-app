import React, {
  Component,
  PropTypes
}                           from 'react';
import shallowCompare       from 'react-addons-shallow-compare';
import Title                from './title/Title';
import To                   from './to/To';
import Subject              from './subject/Subject';
import EditableDiv          from '../editableDiv/EditableDiv';//'react-wysiwyg-editor';

const editorStyle = {
  overflow: 'auto',
  height: 500,
  maxHeight: 1000
};

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

            <To />

            <Subject />


            <div className="form-group">
              <EditableDiv
                style={editorStyle}
                content={content}
                onChange={this.handleContentChange} />
            </div>

            <div className="form-group">
              <div className="btn btn-default btn-file">
                <i className="fa fa-paperclip"></i>
                &nbsp;
                Pièces jointes
                <input
                  type="file"
                  name="attachment"
                />
              </div>
              <p className="help-block">
                Max. 4MB
              </p>
            </div>
          </div>
          {/* <!-- /.box-body --> */}
          <div className="box-footer">
            <div className="pull-right">
              <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Envoyer</button>
            </div>
            <button type="reset" className="btn btn-default"><i className="fa fa-times"></i> Annuler</button>
          </div>
          {/* <!-- /.box-footer --> */}
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
