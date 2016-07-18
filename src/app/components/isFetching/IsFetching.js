import React, {PropTypes} from 'react';
import { ChasingDots }    from 'better-react-spinkit';

const IsFetching = ({size, color}) => {
  return (
    <div
      className="center-block"
      style={{width: `${size + 20}px`}}>
      <ChasingDots
        size={size}
        color={color}
      />
    </div>
  );
};

IsFetching.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IsFetching.defaultProps = {
  color: '#f9690e',
  size: 24
};

export default IsFetching;
