import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
// import { appConfig }                    from '../../config';


class FicheContactTelephone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterCreateFicheContactTelephone();
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveCreateFicheContactTelephone();
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
              liste contacts Telephone
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

FicheContactTelephone.propTypes = {
  actions: PropTypes.shape({
    enterCreateFicheContactTelephone: PropTypes.func,
    leaveCreateFicheContactTelephone: PropTypes.func
  })
};

export default FicheContactTelephone;
