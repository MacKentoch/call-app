import React, {
  Component,
  PropTypes
}                           from 'react';
import cx                   from 'classnames';
// import moment               from 'moment';
// import { appConfig }        from '../../../../config';
import shallowCompare       from 'react-addons-shallow-compare';
import {
  limitStringToNChars
}                           from '../../../../services';

class ListActivites extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
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

              <li className="active">
                <a href="#">
                  {limitStringToNChars('niveau4')}
                </a>
              </li>

              <li><a href="#">Menu 1</a></li>
              <li><a href="#">Menu 2</a></li>
              <li><a href="#">Menu 3</a></li>

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

export default ListActivites;
