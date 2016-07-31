import React, { PropTypes } from 'react';
import Title                from './title/Title';
import To                   from './to/To';
import Subject              from './subject/Subject';

const MailboxWriteMail = ({}) => {
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
            <textarea
              id="compose-textarea"
              className="form-control"
              style={{minHeight: '300px'}}>
            </textarea>
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
};

export default MailboxWriteMail;
