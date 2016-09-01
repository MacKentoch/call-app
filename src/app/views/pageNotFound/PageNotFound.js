import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';

class PageNotFound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions } =  this.props;
    // actions.enterRecherche();
  }

  componentWillUnmount() {
    const { actions } = this.props;
    // actions.leaveRecherche();
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

          <div className="col-md-12">
            <h2>
              Page non trouvée
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

PageNotFound.propTypes = {
  actions: PropTypes.shape({
    // enterRecherche: PropTypes.func,
    // leaveRecherche: PropTypes.func
  })
};

export default PageNotFound;
