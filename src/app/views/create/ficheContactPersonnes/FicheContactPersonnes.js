import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
// import { appConfig }                    from '../../config';


class FicheContactPersonnes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterCreateFicheContactPersonnes();
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveCreateFicheContactPersonnes();
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
              liste contacts Personnes
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

FicheContactPersonnes.propTypes = {
  actions: PropTypes.shape({
    enterCreateFicheContactPersonnes: PropTypes.func,
    leaveCreateFicheContactPersonnes: PropTypes.func
  })
};

export default FicheContactPersonnes;
