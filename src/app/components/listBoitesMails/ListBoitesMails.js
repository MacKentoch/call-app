import React, {
  PropTypes
}                       from 'react';
import cx               from 'classnames';
import { IsFetching }   from '../../components';
import Header           from './header/Header';
import Body             from './body/Body';
import Liste            from './liste/Liste';

const dimensions = {
  width: '300',
  height: '400'
};

const ListBoitesMails = ({isFetching, headerText, dateMaj, onRefreshClick}) => {
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
              showText={true}
              size={24}
              color={'#f9690e'}
            />
          </div>
        }
        {
          !isFetching &&
          <div
            style={{
              minHeight: `${dimensions.height}px`
            }}
            className={cx({
              'animated': true,
              'fadeIn': true,
              'center-block': true
            })}>
            <Liste />
          </div>
        }
      </Body>
    </section>
  );
};

ListBoitesMails.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dateMaj: PropTypes.string.isRequired, // deja formatte en string: DD/MM/YYYY HH:ss:mm
  headerText: PropTypes.string.isRequired,
  onRefreshClick: PropTypes.func.isRequired
};

export default ListBoitesMails;
