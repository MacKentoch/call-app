import React, {PropTypes} from 'react';
import { ThreeBounce }    from 'better-react-spinkit';

const FetchingAllContent = ({size, color}) => {
  return (
    <ThreeBounce
      size={size}
      color={color}
    />
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
