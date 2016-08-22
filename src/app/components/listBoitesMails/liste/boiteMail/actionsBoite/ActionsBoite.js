import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import { Link }           from 'react-router';


class ActionsBoite extends Component {
  constructor(props, context) {
    super(props, context);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { boiteReceptionPath, receptionCount, boiteEnvoiPath, boiteId } = this.props;
    return (
      <ul
        style={{
          borderLeftColor: '#F4F4F4',
          borderLeftWidth: '1px',
          borderLeftStyle: 'outset'
        }}
        className="list-unstyled">
        <li
          className="boite_mail_link"
          >
          <Link
            to={`${boiteReceptionPath}/${boiteId}`}
            style={{
              color:'rgb(51, 51, 51) !important',
              width: '100%',
              display: 'block'
            }}>
            <i className="fa fa-inbox" aria-hidden="true"></i>
            &nbsp;
            Boîte de réception
            &nbsp;
            ({receptionCount})
          </Link>
        </li>
        <li
          className="boite_mail_link"
          >
          <Link
            to={`${boiteEnvoiPath}/${boiteId}`}
            style={{
              width: '100%',
              display: 'block'
            }}>
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            &nbsp;
            Envoyés
          </Link>
        </li>
      </ul>
    );
  }
}

ActionsBoite.propTypes = {
  boiteId: PropTypes.number,
  receptionCount: PropTypes.number.isRequired,
  boiteReceptionPath: PropTypes.string.isRequired,
  boiteEnvoiPath: PropTypes.string.isRequired
};

export default ActionsBoite;
