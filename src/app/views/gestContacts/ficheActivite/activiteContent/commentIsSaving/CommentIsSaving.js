import React, {PropTypes} from 'react';
import { ThreeBounce }    from 'better-react-spinkit';

const CommentIsSaving = ({size, color}) => {
  return (
    <ThreeBounce
      size={size}
      color={color}
    />
  );
};

CommentIsSaving.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

CommentIsSaving.defaultProps = {
  color: '#f9690e',
  size: 12
};

export default CommentIsSaving;
