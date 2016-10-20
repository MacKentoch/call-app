import React, {
  Component,
  PropTypes
}                           from 'react';
// import moment               from 'moment';
// import { appConfig }        from '../../../../config';
import shallowCompare       from 'react-addons-shallow-compare';
import {
  limitStringToNChars
}                           from '../../../../services';
import ActiviteLink         from './activiteLink/ActiviteLink';


class ListActivites extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { activites, listMotifsNiveau4, selectedActiviteId } = this.props;

    return (
      <div className="panel">
        <div className="panel-header">
          <div
            className="row"
            style={{
              marginRight: '0px',
              marginLeft: '0px'
            }}>
            <div
              className="col-xs-12"
              style={{
                marginLeft: '5px',
                borderBottom: '1px solid rgb(241, 241, 241)'
              }}>
              <h4 style={{fontWeight: 500}}>
                Activités de ce contact:
              </h4>
            </div>
          </div>
        </div>
        <div className="panel-body">
          <div className="box-body no-padding">
            <ul className="nav nav-pills nav-stacked">
              {
                activites.map(
                  (activite, activiteIdx) => {
                    const { activiteId, selectMotifLevel4IdFicheContact } = activite;
                    // console.log('activite', activite);
                    return (
                      <ActiviteLink
                        key={activiteIdx}
                        id={activiteId}
                        label={limitStringToNChars(listMotifsNiveau4[selectMotifLevel4IdFicheContact])}
                        isSelected={activiteId === selectedActiviteId}
                        onClick={()=>console.log('TODO: onActiviteSelection')}
                      />
                    );
                  }
                )
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ListActivites.propTypes = {
  lastFetchTimeActivites: PropTypes.string.isRequired,

  selectedActiviteId: PropTypes.number.isRequired,
  onSelectActivite: PropTypes.func.isRequired,

  listMotifsNiveau4: PropTypes.array.isRequired,

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
      listCommenatire: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default ListActivites;
