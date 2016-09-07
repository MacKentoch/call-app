/* eslint react/no-did-mount-set-state:0 */

import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class Dossiers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dossiers: []
    };
  }

  componentDidMount() {
    const { dossiers } = this.props;
    this.setState({ dossiers });
  }

  componentWillReceiveProps(nextProps) {
    if ()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div></div>
    );
  }
}

Dossiers.propTypes = {
  dossiers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      numDossier: PropTypes.string,
      domaine: PropTypes.string,
      regime: PropTypes.string,
      societe: PropTypes.string,
      numSte: PropTypes.string,
      statutBenef: PropTypes.string,
      dateEntreeDispositif: PropTypes.string,
      dateSortieDispositif: PropTypes.string,
      dateTauxPlein: PropTypes.string
    })
  ).isRequired
};

export default Dossiers;
