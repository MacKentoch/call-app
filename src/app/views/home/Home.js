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

    this.handlesOnFichesTraiteesRefreshClick = this.handlesOnFichesTraiteesRefreshClick.bind(this);
    this.handlesOnFichesParCanalRefreshClick = this.handlesOnFichesParCanalRefreshClick.bind(this);
    this.handlesOnPrincipauxMotifRefreshClick = this.handlesOnPrincipauxMotifRefreshClick.bind(this);
  }

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterHome();
    actions.fetchFichesTraiteeDataIfNeeded();
    actions.fetchFichesParCanalDataIfNeeded();
    actions.fetchPrincipauxMotifsDataIfNeeded();
  }

  componentWillUnmount() {
    this.props.actions.leaveHome();
  }

  render() {
    const { animated } = this.state;
    const { fichesTraiteesLabels, fichesTraiteesDataset, fichesTraiteesLegend, fichesTraiteesIsFetching, fichesTraiteesLastFetch } = this.props;
    const { fichesParCanalData, fichesParCanalLegend, fichesParCanalIsFetching, fichesParCanalLastFetch } = this.props;
    const { principauxMotifsLabels, principauxMotifsDataset, principauxMotifsLegend, principauxMotifsIsFetching, principauxMotifsLastFetch } = this.props;
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
              legend={fichesTraiteesLegend}
              onRefreshClick={this.handlesOnFichesTraiteesRefreshClick}
            />
          </div>
          <div className="col-md-4">
            <FichesParCanal
              headerText={'Fiches par canal'}
              isFetching={fichesParCanalIsFetching}
              dateMaj={fichesParCanalLastFetch}
              data={fichesParCanalData}
              legend={fichesParCanalLegend}
              onRefreshClick={this.handlesOnFichesParCanalRefreshClick}
            />
          </div>
          <div className="col-md-4">
            <PrincipauxMotifs
              headerText={'Principaux motifs'}
              isFetching={principauxMotifsIsFetching}
              dateMaj={principauxMotifsLastFetch}
              labels={principauxMotifsLabels}
              datasets={principauxMotifsDataset}
              legend={principauxMotifsLegend}
              onRefreshClick={this.handlesOnPrincipauxMotifRefreshClick}
            />
          </div>
        </div>
      </section>
    );
  }

  handlesOnFichesTraiteesRefreshClick(event) {
    const { actions } = this.props;
    event.preventDefault();
    actions.fetchFichesTraiteeDataIfNeeded();
  }

  handlesOnFichesParCanalRefreshClick(event) {
    const { actions } = this.props;
    event.preventDefault();
    actions.fetchFichesParCanalDataIfNeeded();
  }

  handlesOnPrincipauxMotifRefreshClick(event) {
    const { actions } = this.props;
    event.preventDefault();
    actions.fetchPrincipauxMotifsDataIfNeeded();
  }
}

Home.propTypes = {
  fichesTraiteesLabels: PropTypes.arrayOf(PropTypes.string),
  fichesTraiteesDataset: PropTypes.arrayOf(PropTypes.object),
  fichesTraiteesLegend: PropTypes.arrayOf(PropTypes.object),
  fichesTraiteesIsFetching: PropTypes.bool,
  fichesTraiteesLastFetch: PropTypes.string,

  fichesParCanalData: PropTypes.arrayOf(PropTypes.object),
  fichesParCanalLegend: PropTypes.arrayOf(PropTypes.object),
  fichesParCanalIsFetching: PropTypes.bool,
  fichesParCanalLastFetch: PropTypes.string,

  principauxMotifsLabels: PropTypes.arrayOf(PropTypes.string),
  principauxMotifsDataset: PropTypes.arrayOf(PropTypes.object),
  principauxMotifsLegend: PropTypes.arrayOf(PropTypes.object),
  principauxMotifsIsFetching: PropTypes.bool,
  principauxMotifsLastFetch: PropTypes.string,

  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,

    fetchFichesTraiteeDataIfNeeded: PropTypes.func,

    fetchFichesParCanalDataIfNeeded: PropTypes.func,

    fetchPrincipauxMotifsDataIfNeeded: PropTypes.func
  })
};

export default Home;
