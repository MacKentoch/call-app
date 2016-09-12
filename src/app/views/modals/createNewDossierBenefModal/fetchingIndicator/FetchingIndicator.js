import React            from 'react';
import { ChasingDots }  from 'better-react-spinkit';

const size = 60;
const color= '#f9690e';

const FetchingIndicator = () => {
  return (
    <div
      className="center-block"
      style={{width: `${size + 20}px`}}>
      <div className="spacer_20"></div>
        <small>
          <i>
            Enregistrement...
          </i>
        </small>
      <div className="spacer_20"></div>
      <ChasingDots
        size={size}
        color={color}
      />
    </div>
  );
};

export default FetchingIndicator;
