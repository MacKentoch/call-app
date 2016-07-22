import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
// import { appConfig }                    from '../../config';


class Recherche extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterRecherche();
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveRecherche();
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
              commande recherche
            </h3>
            <h4>
              options de Recherche
            </h4>
          </div>


          <div className="col-md-9">
            <h2>
              Recherche
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

Recherche.propTypes = {
  actions: PropTypes.shape({
    enterRecherche: PropTypes.func,
    leaveRecherche: PropTypes.func
  })
};

export default Recherche;
