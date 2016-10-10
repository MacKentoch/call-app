import React, {
  Component,
  PropTypes
}                           from 'react';
import moment               from 'moment';
import { appConfig }        from '../../../config';
import ToggleCollapse       from './toggleCollapse/ToggleCollapse';
import Collapse             from 'react-collapse';
import shallowCompare       from 'react-addons-shallow-compare';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;


class FicheContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedActiviteId: 0,
      selectedActivite: []
    };

    this.handlesOnSelectActivite = this.handlesOnSelectActivite.bind(this);
  }

  componentDidMount() {
    this.initToFirstActivite();
  }

  componentWillReceiveProps(nextProps) {
    const { lastFetchTimeContact } = this.props;
    const activitesAreUpdated = moment(nextProps.lastFetchTimeActivites, formatDate)
                                  .diff(moment(lastFetchTimeContact, formatDate));

    if (activitesAreUpdated > 0) {
      // force all activite to init
      this.initToFirstActivite();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { isCollapsedFicheContact, onCollapseClick } = this.props;
    const { activites } = this.props;

    return (
       <div>
         <div className="page-header">
           <i
             className="fa fa-tasks"
             aria-hidden="true"
             style={{color: '#444444'}}>
           </i>
           &nbsp;
           contact
           <ToggleCollapse
             isCollapsed={isCollapsedFicheContact}
             toggleCollapse={onCollapseClick}
           />
         </div>
         <Collapse
           isOpened={!isCollapsedFicheContact}
           keepCollapsedContent={false}>
           <div style={{ height: '230px' }}>

             <div className="row">

               <div className="col-xs-3">
                 {/* <ListActivites
                   activites={activites}
                   selectedActiviteId={selectedActiviteId}
                   onSelectActivite={this.handlesOnSelectActivite}
                 /> */}
               </div>

               <div className="col-xs-9">
                 {/* <ActiviteContent
                   activites={activites}
                   selectedActiviteId={selectedActiviteId}
                 /> */}
               </div>

             </div>

           </div>
         </Collapse>
       </div>
     );
  }
  /*
    init state (selectedActivite) by default
   */
  initToFirstActivite() {
    const { activites } = this.props;

    if (Array.isArray(activites) && activites.length > 0) {
      // select 1st activite:
      const firstActiviteId = activites[0].id;

      this.setState({
        selectedActiviteId: firstActiviteId,
        selectedActivite: [...this.getActiviteById(firstActiviteId)]
      });
    }
  }

  getActiviteById(id) {
    const { activites } = this.props;

    if (Array.isArray(activites) && activites.length > 0) {
      return activites.filter(activite => activite.id === id);
    }
    return [];
  }

  handlesOnSelectActivite(activiteId) {
    const { activites } = this.props;

    if (Array.isArray(activites) && activites.length > 0) {
      return activites.filter(activite => activite.id === activiteId);
    }
    return [];
  }
}

FicheContact.propTypes = {
  isCollapsedFicheContact: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,

  lastFetchTimeContact: PropTypes.string.isRequired,
  activites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      contactId: PropTypes.number.isRequired,

      libelleActiviteNiv2: PropTypes.string.isRequired,
      libelleActiviteNiv3: PropTypes.string.isRequired,
      libelleActiviteNiv4: PropTypes.string.isRequired,

      dateCreation: PropTypes.string,
      creePar: PropTypes.string,
      traiteePar: PropTypes.string,
      statut: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          libelle: PropTypes.string.isRequired
        })
      ),
      dateCloture: PropTypes.string,
      motif: PropTypes.string,
      canal: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          libelle: PropTypes.string.isRequired
        })
      ),
      piecesJointesEmises: PropTypes.arrayOf(
        PropTypes.shape({
          nomFichier: PropTypes.string,
          extensionFichier: PropTypes.string,
          lienFichier: PropTypes.string
        })
      ),
      commentaires: PropTypes.arrayOf(PropTypes.string)
    })
  )
};


export default FicheContact;
