import React, { PropTypes } from 'react';
import ToggleCollapse       from './toggleCollapse/ToggleCollapse';
import Form                 from './form/Form';
import Collapse             from 'react-collapse';


const Contact = ({
  isCollapsedContact,
  onCollapseClick,

  fixedPhone,
  mobilePhone,
  email,
  numAdress,
  voie,
  complementAdr,
  codePostal,
  ville,
  pays
}) => {
  return (
      <div>
        <div className="page-header">
          <i
            className="fa fa-comments"
            aria-hidden="true"
            style={{color: '#444444'}}>
          </i>
          &nbsp;
          Informations "contact" du bénéficiaire
          <ToggleCollapse
            isCollapsed={isCollapsedContact}
            toggleCollapse={onCollapseClick}
          />
        </div>
        <Collapse
          isOpened={!isCollapsedContact}
          keepCollapsedContent={false}>
          <div style={{ height: '250px' }}>
            <Form
              fixedPhone={fixedPhone}
              mobilePhone={mobilePhone}
              email={email}
              numAdress={numAdress}
              voie={voie}
              complementAdr={complementAdr}
              codePostal={codePostal}
              ville={ville}
              pays={pays}
            />
          </div>
        </Collapse>
      </div>
  );
};

Contact.propTypes = {
  isCollapsedContact: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,

  fixedPhone: PropTypes.string.isRequired,
  mobilePhone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  numAdress: PropTypes.string.isRequired,
  voie: PropTypes.string.isRequired,
  complementAdr: PropTypes.string.isRequired,
  codePostal: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
  pays: PropTypes.string.isRequired
};


export default Contact;
