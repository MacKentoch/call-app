import React, {
  PropTypes
}                       from 'react';
import Chart            from 'react-chartjs';
import cx               from 'classnames';
import {IsFetching}     from '../../../components';
import Header           from './header/Header';
import Body             from './body/Body';
import Legend           from './legend/Legend';


const dimensions = {
  width: '300',
  height: '250'
};

const FichesParCanal = ({isFetching, dateMaj, headerText, onRefreshClick, data, legend}) => {
  return (
    <section className="panel">
      <Header
        headerText={headerText}
        dateMaj={dateMaj}
        onRefreshClick={onRefreshClick}
      />
      <Body>
        {
          isFetching &&
          <div
            className={cx({
              'animated': true,
              'fadeIn': true
            })}
            style={{
              minHeight: `${dimensions.height}px`
            }}>
            <IsFetching
              style={{
                marginTop: '50px'
              }}
              size={24}
              color={'#f9690e'}
            />
          </div>
        }
        {
          !isFetching &&
          <div
            className={cx({
              'animated': true,
              'fadeIn': true,
              'center-block': true
            })}>
            <Chart.Doughnut
              data={data}
              className="center-block"
              options={{
                responsive : true,
                maintainAspectRatio: true
              }}
              width={dimensions.width}
              height={dimensions.height}
            />
            <Legend
              data={legend}
            />
          </div>
        }
      </Body>
    </section>
  );
};

FichesParCanal.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dateMaj: PropTypes.string.isRequired, // deja formatte en string: DD/MM/YYYY HH:ss:mm
  headerText: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  legend: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRefreshClick: PropTypes.func.isRequired
};

export default FichesParCanal;
