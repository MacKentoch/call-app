import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import {
  FichesTraitee,
  FichesParCanal,
  PrincipauxMotifs,
  MailsLink,
  EmailsLink,
  TelephoneLink,
  PersonnesLink,
  ActiviteGroupe,
  ListBoitesMails
}                                       from '../../components';
import { appConfig }                    from '../../config';

const boiteReceptionPath = appConfig.views.mailbox.reception.path;
const boiteEnvoiPath = appConfig.views.mailbox.envoi.path;
const mockListBoiteMail = [
  {
    id: 1,
    titre: 'Boite #1',
    receptionRoute: 'route1',
    envoyesRoute: 'route1'
  },
  {
    id: 2,
    titre: 'Boite #2',
    receptionRoute: 'route2',
    envoyesRoute: 'route2'
  },
  {
    id: 3,
    titre: 'Boite #3',
    receptionRoute: 'route3',
    envoyesRoute: 'route3'
  }
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };

    this.handlesOnFichesTraiteesRefreshClick = this.handlesOnFichesTraiteesRefreshClick.bind(this);
    this.handlesOnFichesParCanalRefreshClick = this.handlesOnFichesParCanalRefreshClick.bind(this);
    this.handlesOnPrincipauxMotifRefreshClick = this.handlesOnPrincipauxMotifRefreshClick.bind(this);
    this.handlesOnUserGroupActivityRefreshClick = this.handlesOnUserGroupActivityRefreshClick.bind(this);
  }

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterHome();
    actions.fetchFichesTraiteeDataIfNeeded();
    actions.fetchFichesParCanalDataIfNeeded();
    actions.fetchPrincipauxMotifsDataIfNeeded();
    actions.fetchUserGroupActivityDataIfNeeded();
  }

  componentWillUnmount() {
    this.props.actions.leaveHome();
  }

  render() {
    const { animated } = this.state;
    const { fichesTraiteesLabels, fichesTraiteesDataset, fichesTraiteesLegend, fichesTraiteesIsFetching, fichesTraiteesLastFetch } = this.props;
    const { fichesParCanalData, fichesParCanalLegend, fichesParCanalIsFetching, fichesParCanalLastFetch } = this.props;
    const { principauxMotifsLabels, principauxMotifsDataset, principauxMotifsLegend, principauxMotifsIsFetching, principauxMotifsLastFetch } = this.props;
    const { createFicheContactCourier, createFicheContactMail, createFicheContactTelephone, createFicheContactPersonnes } = appConfig.views;
    const { userGroupActivityData, userGroupActivityIsFetching, userGroupActivityLastFetch } = this.props;

    return(
      <section
        className={cx({
          'content':        true,
          'animatedViews':  animated,
          'view-enter':     animated
        })}>
        {/* shortcuts */}
        <div
          className="row"
          style={{marginBottom: '5px'}}>
          <div className="col-md-3">
            <MailsLink
              linkTo={createFicheContactCourier.path}
              title={'Courier'}
              details={'Créer une fiche contact courier'}
              icon={<i className="fa fa-envelope-o" aria-hidden="true"></i>}
              backColor={'#F9690E'}
            />
          </div>
          <div className="col-md-3">
            <EmailsLink
              linkTo={createFicheContactMail.path}
              title={'Mails'}
              details={'Créer une fiche contact mail'}
              icon={<i className="fa fa-paper-plane-o" aria-hidden="true"></i>}
              backColor={'#F9690E'}
            />
          </div>
          <div className="col-md-3">
            <TelephoneLink
              linkTo={createFicheContactTelephone.path}
              title={'Téléphone'}
              details={'Créer une fiche contact téléphone'}
              icon={<i className="fa fa-phone" aria-hidden="true"></i>}
              backColor={'#F9690E'}
            />
          </div>
          <div className="col-md-3">
            <PersonnesLink
              linkTo={createFicheContactPersonnes.path}
              title={'Personnes'}
              details={'Créer une fiche contact personne'}
              icon={<i className="fa fa-users" aria-hidden="true"></i>}
              backColor={'#F9690E'}
            />
          </div>
        </div>

        {/* activité ces 3 derniers mois */}
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

        {/* activité groupe et boîtes mails */}
        <div className="row">
          <div className="col-md-8">
            <h1>
              Activité de mes groupes
            </h1>
            <ActiviteGroupe
              isFetching={userGroupActivityIsFetching}
              dateMaj={userGroupActivityLastFetch}
              groupActivity={userGroupActivityData}
              headerText={'Mes groupes'}
              onRefreshClick={this.handlesOnUserGroupActivityRefreshClick}
            />
          </div>
          <div className="col-md-4">
            <h1>
              Mes boîtes mails
            </h1>
            <ListBoitesMails
              isFetching={false}
              dateMaj={'01/01/2016 12:00'}
              headerText={'Boîtes Mail'}
              boitesMails={mockListBoiteMail}
              boiteReceptionPath={boiteReceptionPath}
              boiteEnvoiPath={boiteEnvoiPath}
              onRefreshClick={()=>console.log('todo')}
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

  handlesOnUserGroupActivityRefreshClick(event) {
    const { actions } = this.props;
    event.preventDefault();
    actions.fetchUserGroupActivityDataIfNeeded();
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

  userGroupActivityData: PropTypes.arrayOf(PropTypes.object),
  userGroupActivityIsFetching: PropTypes.bool,
  userGroupActivityLastFetch: PropTypes.string,

  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,

    fetchFichesTraiteeDataIfNeeded: PropTypes.func,

    fetchFichesParCanalDataIfNeeded: PropTypes.func,

    fetchPrincipauxMotifsDataIfNeeded: PropTypes.func,

    fetchUserGroupActivityDataIfNeeded: PropTypes.func
  })
};

export default Home;
