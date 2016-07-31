import React from 'react';

const Title = () => {
  return (
    <div
      style={{
        color: '4A4A4A',
        borderBottomWidth: '1px',
        borderBottomColor: '#F1F2F4',
        borderBottomStyle: 'solid',
        paddingBottom: '5px'
      }}>
      <h2
        className="box-title">
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        &nbsp;
        Composer un nouveau message
      </h2>
    </div>
  );
};

export default Title;
