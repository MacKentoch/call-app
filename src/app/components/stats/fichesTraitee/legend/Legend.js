import React, {PropTypes} from 'react';
import LegendItem         from './legendItem/LegendItem';
import cx                 from 'classnames';

const legendMinWidth = 100;


const Legend = ({isInLine, align, data}) => {
  return (
    <div
      className={cx({
        'pull-left': align === 'left',
        'pull-right': align === 'right'
      })}
      style={{
        minWidth: `${legendMinWidth}px`
      }}>
      <small>
        <u>
          Légende:
        </u>
      </small>
      <ul
        className={cx({
          'list-unstyled': true,
          'text-left': true,
          'list-inline': isInLine
        })}>
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
  align: PropTypes.oneOf(['left', 'right']),
  isInLine: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

Legend.defaultProps = {
  isInLine: true,
  align: 'right'
};

export default Legend;
