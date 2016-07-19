import React, {
  PropTypes
}                       from 'react';
import cx               from 'classnames';
import { IsFetching }   from '../../components';
import Header           from './header/Header';
import Body             from './body/Body';

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
            className={cx({
              'animated': true,
              'fadeIn': true,
              'center-block': true
            })}>
            <h3>
              ici liste boites mail
            </h3>
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
