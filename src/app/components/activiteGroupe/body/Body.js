import React, { PropTypes } from 'react';

const Body = ({children}) => {
  return (
    <div className="panel-body">
      {children}
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node.isRequired
};

export default Body;
