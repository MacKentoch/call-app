import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
// import { appConfig }                    from '../../config';


class FicheContactMail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterCreateFicheContactMail();
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveCreateFicheContactMail();
  }

  render() {
    const { animated } = this.state;
    return(
      <section
        className={cx({
          'content':        true,
          'animatedViews':  animated,
          'view-enter':     animated
        })}>
        {/* TODO */}
        <div
          className="row"
          style={{marginBottom: '5px'}}>


          <div className="col-md-3">
            <h3>
              commands
            </h3>
          </div>


          <div className="col-md-9">
            <h2>
              liste Mails
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

FicheContactMail.propTypes = {
  actions: PropTypes.shape({
    enterCreateFicheContactMail: PropTypes.func,
    leaveCreateFicheContactMail: PropTypes.func
  })
};

export default FicheContactMail;
