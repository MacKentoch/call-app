import React, {PropTypes} from 'react';
import { ThreeBounce }    from 'better-react-spinkit';

const FetchingAllContent = ({size, color}) => {
  return (
    <div
      className="center-block"
      style={{width: `${size + 90}px`}}>
      <ThreeBounce
        size={size}
        color={color}
      />
    </div>
  );
};

FetchingAllContent.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

FetchingAllContent.defaultProps = {
  color: '#f9690e',
  size: 32
};

export default FetchingAllContent;
