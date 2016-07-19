import React, {PropTypes} from 'react';
import { ChasingDots }    from 'better-react-spinkit';

const IsFetching = ({size, color, showText}) => {
  return (
    <div
      className="center-block"
      style={{width: `${size + 20}px`}}>
      <div className="spacer_20"></div>
      {
        showText &&
        <small>
          <i>
            chargement...
          </i>
        </small>
      }
      <div className="spacer_20"></div>
      <ChasingDots
        size={size}
        color={color}
      />
    </div>
  );
};

IsFetching.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  showText: PropTypes.bool
};

IsFetching.defaultProps = {
  color: '#f9690e',
  size: 24,
  showText: false
};

export default IsFetching;
