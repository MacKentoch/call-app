import React, {
  Component,
  PropTypes
}                           from 'react';
import moment               from 'moment';
import { appConfig }        from '../../../config';
import ToggleCollapse       from './toggleCollapse/ToggleCollapse';
import Collapse             from 'react-collapse';
import shallowCompare       from 'react-addons-shallow-compare';
import ListActivites        from './listActivites/ListActivites';
import ActiviteContent      from './activiteContent/ActiviteContent';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;


class FicheActivite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedActiviteId: 0,
      selectedActivite: [],

      selectedActiviteCommentBeingEditingFlag: false, // if comment is editing force (use notification to alert) save or cancel comment before switching activiteId
      selectedActiviteCommentBeingEditingValue: ''    // value of comment being editing => return to empty string when saved or canceled
    };

    this.handlesOnSelectActivite = this.handlesOnSelectActivite.bind(this);
    this.handlesOnFicheActiviteCommentSetEdition = this.handlesOnFicheActiviteCommentSetEdition.bind(this);
    this.handlesOnFicheActiviteCommentCancelEdition = this.handlesOnFicheActiviteCommentCancelEdition.bind(this);
    this.handlesOnFicheActiviteCommentChange = this.handlesOnFicheActiviteCommentChange.bind(this);
    this.handlesOnFicheActiviteCommentSaveEdition = this.handlesOnFicheActiviteCommentSaveEdition.bind(this);
  }

  componentDidMount() {
    this.initToFirstActivite(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { lastFetchTimeActivites } = this.props;
    const activitesAreUpdated = moment(nextProps.lastFetchTimeActivites, formatDate)
                                  .diff(moment(lastFetchTimeActivites, formatDate));

    if (activitesAreUpdated > 0) {
      // force all activite to init
      this.initToFirstActivite(nextProps);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      isCollapsedFicheActivite,
      onCollapseClick,
      lastFetchTimeActivites,
      listMotifsNiveau4,
      listStatutFicheActivite,
      listCanauxFicheActivite,
      activites,
      isSavingFicheNewActiviteNewComment,
      onGestContactsFicheActiviteCanalChange,
      onSaveFicheActiviteNewComment
    } = this.props;

    const {
      selectedActiviteId,
      selectedActiviteCommentBeingEditingFlag,
      selectedActiviteCommentBeingEditingValue
    } = this.state;

    return (
       <div>
         <div className="page-header">
           <i
             className="fa fa-sort-numeric-asc"
             aria-hidden="true"
             style={{color: '#444444'}}>
           </i>
           &nbsp;
           activités
           <ToggleCollapse
             isCollapsed={isCollapsedFicheActivite}
             toggleCollapse={onCollapseClick}
           />
         </div>
         <Collapse
           isOpened={!isCollapsedFicheActivite}
           keepCollapsedContent={false}>
           <div style={{ height: '230px' }}>

             <div className="row">

               <div className="col-xs-4">
                 <ListActivites
                   activites={activites}
                   selectedActiviteId={selectedActiviteId}
                   onSelectActivite={this.handlesOnSelectActivite}
                   listMotifsNiveau4={listMotifsNiveau4}
                   lastFetchTimeActivites={lastFetchTimeActivites}
                 />
               </div>

               <div className="col-xs-8">
                 <ActiviteContent
                   activites={activites}
                   selectedActiviteId={selectedActiviteId}

                   selectedActiviteCommentBeingEditingFlag={selectedActiviteCommentBeingEditingFlag}
                   selectedActiviteCommentBeingEditingValue={selectedActiviteCommentBeingEditingValue}
                   onFicheActiviteCommentSetEdition={this.handlesOnFicheActiviteCommentSetEdition}
                   onFicheActiviteCommentCancelEdition={this.handlesOnFicheActiviteCommentCancelEdition}
                   onFicheActiviteCommentChange={this.handlesOnFicheActiviteCommentChange}
                   onFicheActiviteCommentSaveEdition={this.handlesOnFicheActiviteCommentSaveEdition}

                   lastFetchTimeActivites={lastFetchTimeActivites}
                   listMotifsNiveau4={listMotifsNiveau4}

                   listStatutFicheActivite={listStatutFicheActivite}

                   listCanauxFicheActivite={listCanauxFicheActivite}

                   activites={activites}
                   listMotifsNiveau4={listMotifsNiveau4}

                   onGestContactsFicheActiviteCanalChange={onGestContactsFicheActiviteCanalChange}

                   isSavingFicheNewActiviteNewComment={isSavingFicheNewActiviteNewComment}
                 />
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
  initToFirstActivite(props) {
    const { activites } = props;

    if (Array.isArray(activites) && activites.length > 0) {
      // select 1st activite:
      const firstActiviteId = activites[0].activiteId;
      this.setState({
        selectedActiviteId: firstActiviteId,
        selectedActivite: {...this.getActiviteById(firstActiviteId)}
      });
    }
  }

  getActiviteById(id) {
    const { activites } = this.props;
    if (Array.isArray(activites) && activites.length > 0) {
      return activites.filter(activite => activite.activiteId === id);
    }
    return [];
  }

  handlesOnSelectActivite(activiteId) {
    const { activites } = this.props;

    if (Array.isArray(activites) && activites.length > 0) {
      this.handlesOnFicheActiviteCommentCancelEdition();
      this.setState({
        selectedActiviteId: activiteId,
        selectedActivite: {...this.getActiviteById(activiteId)}
      });
    }
  }

  handlesOnFicheActiviteCommentSetEdition() {
    this.setState({
      selectedActiviteCommentBeingEditingFlag: true,
      selectedActiviteCommentBeingEditingValue: ''
    });
  }

  handlesOnFicheActiviteCommentCancelEdition() {
    const { addNotificationMessage } = this.props;
    const { selectedActiviteCommentBeingEditingValue } = this.state;

    if (selectedActiviteCommentBeingEditingValue.trim().length > 0) {
      addNotificationMessage({
        message: 'Création d\'un nouveau commentaire annulée',
        level: 'info'
      });
    }

    this.setState({
      selectedActiviteCommentBeingEditingFlag: false,
      selectedActiviteCommentBeingEditingValue: ''
    });
  }

  handlesOnFicheActiviteCommentChange(newComment) {
    const { selectedActiviteCommentBeingEditingValue } = this.state;
    if (newComment !== selectedActiviteCommentBeingEditingValue) {
      this.setState({
        selectedActiviteCommentBeingEditingValue: newComment
      });
    }
  }

  handlesOnFicheActiviteCommentSaveEdition(event) {
    event.preventDefault();
    const { selectedActiviteCommentBeingEditingValue, selectedActiviteId } = this.state;
    const { onSaveFicheActiviteNewComment } = this.props;
    // save to backend dispatch: will set isSavingFicheNewActiviteNewComment during fetch then false after fectch done
    onSaveFicheActiviteNewComment(selectedActiviteId, selectedActiviteCommentBeingEditingValue);
    // resets state: during saving it will display a loding since isSavingFicheNewActiviteNewComment will be true:
    this.setState({
      selectedActiviteCommentBeingEditingFlag: false,
      selectedActiviteCommentBeingEditingValue: ''
    });
  }
}

FicheActivite.propTypes = {
  isCollapsedFicheActivite: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,

  lastFetchTimeActivites: PropTypes.string.isRequired,
  listMotifsNiveau4: PropTypes.array.isRequired,

  isSavingFicheNewActiviteNewComment: PropTypes.bool.isRequired,
  onSaveFicheActiviteNewComment: PropTypes.func.isRequired,

  listStatutFicheActivite: PropTypes.arrayOf(PropTypes.string).isRequired,

  listCanauxFicheActivite: PropTypes.arrayOf(PropTypes.string).isRequired,

  addNotificationMessage: PropTypes.func.isRequired,

  onGestContactsFicheActiviteCanalChange: PropTypes.func.isRequired,

  activites: PropTypes.arrayOf(
    PropTypes.shape({
      activiteId: PropTypes.number.isRequired, // nouvelle activite sans id tant que pas enregister en BDD
      isEditable: true, // si activiteId === 0 alors reste editable (on peut changer les motifs) sinon plus editable et les motifs sont bloqués
      selectMotifLevel2IdFicheContact: -1, // from listMotifLevel2
      selectMotifLevel3IdFicheContact: -1, // from listMotifLevel3
      selectMotifLevel4IdFicheContact: -1, // from listMotifLevel4
      // affiche libelle d emotif niveau 4 dna sle champs motif des activites
      dateCreation: '',
      creePar: '',
      traiteePar: '',
      statutIndex: 1, // En-cours
      dateCloture: '',
      cloturePar: '',
      // libelle motif de niveau 4 a afficher dans motif
      canalIndexFicheActivite: 1,
      listAttachements: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.oneOf(['zip', 'rar', '7zip', 'pdf', 'txt', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'png', 'jpg', 'jpeg', 'bmp']),
          name: PropTypes.string.isRequired,
          filePath: PropTypes.string.isRequired,
          size: PropTypes.string.isRequired
        })
      ).isRequired,
      listCommentaire: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          commentaire: PropTypes.string,
          par: PropTypes.string,
          dateCreation: PropTypes.string
        })
      )
    })
  )
};

export default FicheActivite;
