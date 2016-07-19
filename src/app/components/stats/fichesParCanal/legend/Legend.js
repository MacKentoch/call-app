import React, {PropTypes} from 'react';
import LegendItem from './legendItem/LegendItem';

const legendMinWidth = 100;

const Legend = ({data}) => {
  return (
    <div
      className="pull-right"
      style={{
        minWidth: `${legendMinWidth}px`
      }}>
      <small>
        <u>
          Légende:
        </u>
      </small>
      <ul className="list-unstyled text-left">
        {
          data.map(
            (item, idx) => {
              return (
                <LegendItem
                  key={idx}
                  label={item.label}
                  color={item.color}
                />
              );
            }
          )
        }
      </ul>
    </div>
  );
};

Legend.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Legend;
