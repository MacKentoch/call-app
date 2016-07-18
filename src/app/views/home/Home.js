'use strict';

import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import {
  StatsCard,
  FichesTraitee,
  FichesParCanal,
  PrincipauxMotifs
}                                       from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };

    this.handlesOnRefreshClick = this.handlesOnRefreshClick.bind(this);
  }

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterHome();
    actions.fetchFichesTraiteeDataIfNeeded();
    console.log('actions.fetchFichesParCanalDataIfNeeded: ', actions.fetchFichesParCanalDataIfNeeded);
    actions.fetchFichesParCanalDataIfNeeded();
  }

  componentWillUnmount() {
    this.props.actions.leaveHome();
  }

  render() {
    const { animated } = this.state;
    const { fichesTraiteesLabels, fichesTraiteesDataset, fichesTraiteesIsFetching, fichesTraiteesLastFetch } = this.props;
    const { fichesParCanalLabels, fichesParCanalDataset, fichesParCanalIsFetching, fichesParCanalLastFetch } = this.props;
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
          <div className="col-md-3">
            <StatsCard
              statValue={'3200'}
              statLabel={'Total Tasks'}
              icon={<i className="fa fa-check-square-o"></i>}
              backColor={'red'}
            />
          </div>
          <div className="col-md-3">
            <StatsCard
              statValue={'2200'}
              statLabel={'Total Messages'}
              icon={<i className="fa fa-envelope-o"></i>}
              backColor={'violet'}
            />
          </div>
          <div className="col-md-3">
            <StatsCard
              statValue={'100,320'}
              statLabel={'Total Profit'}
              icon={<i className="fa fa-dollar"></i>}
              backColor={'blue'}
            />
          </div>
          <div className="col-md-3">
            <StatsCard
              statValue={'4567'}
              statLabel={'Total Documents'}
              icon={<i className="fa fa-paperclip"></i>}
              backColor={'green'}
            />
          </div>
        </div>

        <h1>
          Mon activité ces 3 derniers mois
        </h1>
        <div className="row">
          <div className="col-md-4">
            <FichesTraitee
              headerText={'Fiches traîtées'}
              isFetching={fichesTraiteesIsFetching}
              dateMaj={fichesTraiteesLastFetch}
              labels={fichesTraiteesLabels}
              datasets={fichesTraiteesDataset}
              onRefreshClick={this.handlesOnRefreshClick}
            />
          </div>
          <div className="col-md-4">
            <FichesParCanal
              headerText={'Fiches par canal'}
              isFetching={fichesParCanalIsFetching}
              dateMaj={fichesParCanalLastFetch}
              labels={fichesParCanalLabels}
              datasets={fichesParCanalDataset}
              onRefreshClick={this.handlesOnRefreshClick}
            />
          </div>
          <div className="col-md-4">
            {/*<PrincipauxMotifs
              headerText={'Principaux motifs'}
              isFetching={fichesTraiteesIsFetching}
              dateMaj={fichesTraiteesLastFetch}
              labels={fichesTraiteesLabels}
              datasets={fichesTraiteesDataset}
              onRefreshClick={this.handlesOnRefreshClick}
            />*/}
          </div>
        </div>
      </section>
    );
  }

  handlesOnRefreshClick(event) {
    const { actions } = this.props;
    event.preventDefault();
    actions.fetchFichesTraiteeDataIfNeeded();
  }
}

Home.propTypes = {
  fichesTraiteesLabels: PropTypes.arrayOf(PropTypes.string),
  fichesTraiteesDataset: PropTypes.arrayOf(PropTypes.object),
  fichesTraiteesIsFetching: PropTypes.bool,
  fichesTraiteesLastFetch: PropTypes.string,

  fichesParCanalLabels: PropTypes.arrayOf(PropTypes.string),
  fichesParCanalDataset: PropTypes.arrayOf(PropTypes.object),
  fichesParCanalIsFetching: PropTypes.bool,
  fichesParCanalLastFetch: PropTypes.string,

  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,

    fetchFichesTraiteeDataIfNeeded: PropTypes.func,

    fetchFichesParCanalDataIfNeeded: PropTypes.func
  })
};

export default Home;
