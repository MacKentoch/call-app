import React, { PropTypes, Component }  from 'react';
import moment                           from 'moment';
// import { appConfig }                    from '../../../config';
import cx                               from 'classnames';
// import {
//   IsFetching
// }                                       from '../../../components';

moment.locale('fr');

// const formatDate = appConfig.formatDate.defaut;

class MailWriteNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxWriteNew(`mailbox #${mailboxId}`);
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.leaveMailboxWriteNew(`mailbox #${mailboxId}`);
  }

  render() {
    const { animated } = this.state;
    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        {
          // (sentbox.length > 0 && !sentboxIsFetching) &&
          <div className="col-md-9">
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">
                  Composer un nouveau message
                </h3>
              </div>
              {/* <!-- /.box-header --> */}
              <div className="box-body">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="à:"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Objet:"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="compose-textarea"
                    className="form-control"
                    style={{height: '300px'}}>
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
            {/* <!-- /. box --> */}
          </div>
        }
        {
          // sentboxIsFetching &&
          // <div>
          //   <p className="text-center">
          //     <i style={{color: '#4A4A4A'}}>
          //       Chargement...
          //     </i>
          //   </p>
          //   <IsFetching />
          // </div>
        }
      </div>
    );
  }
}

MailWriteNew.propTypes = {
  params: PropTypes.object, // react router
  location: PropTypes.object,  // react router

  mail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    receptionDate: PropTypes.string.isRequired,
    notRead: PropTypes.bool.isRequired,
    subject: PropTypes.string.isRequired,
    from: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired,
    to: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired,
    body: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }),

  actions: PropTypes.shape({
    enterMailboxWriteNew: PropTypes.func,
    leaveMailboxWriteNew: PropTypes.func
  })
};

export default MailWriteNew;
