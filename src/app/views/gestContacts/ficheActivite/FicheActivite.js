import React, {
  Component,
  PropTypes
}                           from 'react';
import ToggleCollapse       from './toggleCollapse/ToggleCollapse';
import Collapse             from 'react-collapse';


class FicheActivite extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedActiviteId: 0,
      selectedActivite: []
    };

    this.handlesOnSelectActivite = this.handlesOnSelectActivite.bind(this);
  }

  componentDidMount() {
    const { activites } = this.props;
    // select 1 st activite:
    const firstActiviteId = activites[0].id;
    this.getActiviteById(firstActiviteId);
  }

  render() {
    const { isCollapsedIdentite, onCollapseClick } = this.props;
    const { selectedActiviteId, activites } = this.props;

    return (
       <div>
         <div className="page-header">
           <i
             className="fa fa-user"
             aria-hidden="true"
             style={{color: '#444444'}}>
           </i>
           &nbsp;
           activités
           <ToggleCollapse
             isCollapsed={isCollapsedIdentite}
             toggleCollapse={onCollapseClick}
           />
         </div>
         <Collapse
           isOpened={!isCollapsedIdentite}
           keepCollapsedContent={false}>
           <div style={{ height: '230px' }}>

             <div className="row">

               <div className="col-xs-3">
                 <ListActivites
                   activites={activites}
                   selectedActiviteId={selectedActiviteId}
                   onSelectActivite={this.handlesOnSelectActivite}
                 />
               </div>

               <div className="col-xs-9">
                 <ActiviteContent
                   activites={activites}
                   selectedActiviteId={selectedActiviteId}
                 />
               </div>

             </div>

           </div>
         </Collapse>
       </div>
     );
  }

  handlesOnSelectActivite() {

  }

  getActiviteById(id) {
    const { activites } = this.props;
    return activites.filter(activite => activite.id === id);
  }
}

FicheActivite.propTypes = {
  isCollapsedIdentite: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,

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


export default FicheActivite;
