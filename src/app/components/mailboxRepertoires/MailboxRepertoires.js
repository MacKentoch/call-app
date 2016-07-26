import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MailboxRepertoires = ({recuLink, envoyeLink}) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <div className="row">
          <div
            className="col-xs-12"
            style={{
              marginLeft: '5px',
              borderBottomWidth : '1px',
              borderBottomColor: '#F1F1F1',
              borderBottomStyle: 'solid'
            }}>
            <h4 style={{fontWeight: '500'}}>
              Répertoires
            </h4>
          </div>
        </div>
      </div>
      <div
        className="panel-body"
        style={{padding: 0}}>
        <div className="box-body no-padding">
          <ul className="nav nav-pills nav-stacked">
            <li className="active">
              <Link to={recuLink}>
                <i className="fa fa-inbox"></i>
                &nbsp;
                Reçus
                <span className="label label-primary pull-right">
                  12
                </span>
              </Link>
            </li>
            <li>
              <Link to={envoyeLink}>
                <i className="fa fa-envelope-o"></i>
                &nbsp;
                Envoyés
              </Link>
            </li>
            {/*<li>
              <a href="#">
                <i className="fa fa-trash-o"></i>
                &nbsp;
                Corbeille
              </a>
            </li>*/}
          </ul>
        </div>
      </div>
    </div>
  );
};

MailboxRepertoires.propTypes = {
  recuLink: PropTypes.string.isRequired,
  envoyeLink: PropTypes.string.isRequired
}

export default MailboxRepertoires;
