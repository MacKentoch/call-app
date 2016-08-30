import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import {
  CiviliteDropDown,
  FormLabel,
  EditValidIcons
}                                       from '../../components';
// import { appConfig }                    from '../../config';


class GestBeneficiaires extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };

    this.handlesOnCiviliteChange = this.handlesOnCiviliteChange.bind(this);
  }

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterGestBeneficiaires();
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveGestBeneficiaires();
  }

  render() {
    const { animated } = this.state;
    const { isEditingIdentite, isSavingIdentite } = this.props;

    return(
      <section
        className={cx({
          'content':        true,
          'animatedViews':  animated,
          'view-enter':     animated
        })}>

        <div
          className="row"
          style={{marginBottom: '5px'}}>

          <div className="col-md-12">
            <section className="panel">
              <header className="panel-heading">
                Détail Bénéficiaire
              </header>

              <div className="panel-body">

                <div className="page-header">
                  Identité
                  {
                    !isSavingIdentite &&
                    <EditValidIcons
                      isEditing={isEditingIdentite}
                      setEdit={(e)=>console.log('TODO: Identite set Edit')}
                      saveEdit={(e)=>console.log('TODO: Identite save Edit')}
                      cancelEditing={(e)=>console.log('TODO: Identite cancel Edit')}
                    />
                  }
                </div>

                <form role="form">

                  <div className="row">
                    <div className="col-md-4">
                      {
                        isEditingIdentite
                        ?
                          <CiviliteDropDown
                            id="inputCivilite"
                            label={'Civilité'}
                            value={''}
                            onChange={this.handlesOnCiviliteChange}
                          />
                        :
                          <FormLabel />
                      }
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="exampleInputPassword1">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="exampleInputOther">
                          Other
                        </label>
                        <input
                          type="other"
                          className="form-control"
                          id="exampleInputOther"
                          placeholder="other"
                        />
                      </div>
                    </div>
                  </div>


                  <button
                    type="submit"
                    className="btn orange_button">
                    Submit
                  </button>
                </form>


              </div>
            </section>
          </div>

        </div>
      </section>
    );
  }

  handlesOnCiviliteChange(civilite) {
    console.log(`selected civilite is ${civilite}`);
    // TODO: to handle redux store
  }
}

GestBeneficiaires.propTypes = {
  isEditingIdentite: PropTypes.bool,
  isSavingIdentite: PropTypes.bool,

  actions: PropTypes.shape({
    enterGestBeneficiaires: PropTypes.func,
    leaveGestBeneficiaires: PropTypes.func
  })
};

// to remove when full redux store is done:
GestBeneficiaires.defaultProps = {
  isEditingIdentite: false,
  isSavingIdentite: false
};

export default GestBeneficiaires;
