import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
// import { appConfig }                    from '../../config';


class GestBeneficiaires extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterGestBeneficiaires();
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveGestBeneficiaires();
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

        <div
          className="row"
          style={{marginBottom: '5px'}}>

          <div className="col-md-12">
            <h2>
              GestBeneficiaires
            </h2>
          </div>

        </div>
      </section>
    );
  }
}

GestBeneficiaires.propTypes = {
  actions: PropTypes.shape({
    enterGestBeneficiaires: PropTypes.func,
    leaveGestBeneficiaires: PropTypes.func
  })
};

export default GestBeneficiaires;
