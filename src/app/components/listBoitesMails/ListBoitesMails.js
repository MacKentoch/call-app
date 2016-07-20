import React, {
  Component,
  PropTypes
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';
import cx               from 'classnames';
import { IsFetching }   from '../../components';
import Header           from './header/Header';
import Body             from './body/Body';
import Liste            from './liste/Liste';

const dimensions = {
  width: '300',
  height: '400'
};

class ListBoitesMails extends Component {
  constructor(props, context) {
    super(props, context);
    this.handlesOnReceptionClick = this.handlesOnReceptionClick.bind(this);
    this.handlesOnEnvoyesClick= this.handlesOnEnvoyesClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {isFetching, boitesMails, headerText, dateMaj, onRefreshClick} = this.props;
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
                onReceptionClick={this.handlesOnReceptionClick}
                onEnvoyesClick={this.handlesOnEnvoyesClick}
              />
            </div>
          }
        </Body>
      </section>
    );
  }

  handlesOnReceptionClick(boiteId) {
    console.log('handlesOnReceptionClick boiteId: ', boiteId);
  }

  handlesOnEnvoyesClick(boiteId) {
    console.log('handlesOnEnvoyesClick boiteId: ', boiteId);
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
      titre: PropTypes.string.isRequired
    })
  )
};

export default ListBoitesMails;
