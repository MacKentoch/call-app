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

const FichesTraitee = ({isFetching, dateMaj, headerText, onRefreshClick, labels, datasets, legend}) => {
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
            <Chart.Bar
              data={{labels, datasets}}
              className="center-block"
              options={{
                responsive : true,
                maintainAspectRatio: true
              }}
              width={dimensions.width}
              height={dimensions.height}
            />
            <div className="spacer_20"></div>
            <Legend
              align={'right'}
              isInLine={true}
              data={legend}
            />
          </div>
        }
      </Body>
    </section>
  );
};

FichesTraitee.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dateMaj: PropTypes.string.isRequired, // deja formatte en string: DD/MM/YYYY HH:ss:mm
  headerText: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  datasets: PropTypes.arrayOf(PropTypes.object).isRequired,
  legend: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRefreshClick: PropTypes.func.isRequired
};

export default FichesTraitee;
