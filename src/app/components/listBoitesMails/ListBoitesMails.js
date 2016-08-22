import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import cx                 from 'classnames';
import { IsFetching }     from '../../components';
import Header             from './header/Header';
import Body               from './body/Body';
import Liste              from './liste/Liste';

const dimensions = {
  width: '300',
  height: '400'
};

class ListBoitesMails extends Component {
  constructor(props, context) {
    super(props, context);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {isFetching, boitesMails, headerText, dateMaj, onRefreshClick, boiteReceptionPath, boiteEnvoiPath} = this.props;
    console.log('boitesMails: ', boitesMails);
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
              <Liste
                boitesMails={boitesMails}
                boiteReceptionPath={boiteReceptionPath}
                boiteEnvoiPath={boiteEnvoiPath}
              />
            </div>
          }
        </Body>
      </section>
    );
  }
}

ListBoitesMails.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dateMaj: PropTypes.string.isRequired, // deja formatte en string: DD/MM/YYYY HH:ss:mm
  headerText: PropTypes.string.isRequired,
  onRefreshClick: PropTypes.func.isRequired,
  boitesMails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titre: PropTypes.string.isRequired,
      itemCount: PropTypes.number.isRequired
    })
  ),
  boiteReceptionPath: PropTypes.string.isRequired,
  boiteEnvoiPath: PropTypes.string.isRequired
};

export default ListBoitesMails;
