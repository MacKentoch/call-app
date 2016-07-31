import React, {
  React,
  Component,
  PropTypes
}                       from 'react';
import update           from 'react-addons-update';
import shallowCompare   from 'react-addons-shallow-compare';

// USAGE  <Chips chips={['react', 'javascript', 'scss']} placeholder="Add a tag..." max="10" />

class Chips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chips: [],
      KEY:   {
        backspace: 8,
        tab:       9,
        enter:     13
      },
      // only allow letters, numbers and spaces inbetween words
      INVALID_CHARS: /[^a-zA-Z0-9 ]/g
    };
  }

  componentDidMount() {
    this.setChips(this.props.chips);
  }

  componentWillReceiveProps(nextProps) {
    this.setChips(nextProps.chips);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    let chips = this.state.chips.map((chip, index) => {
      return (
        <span
          className="chip"
          key={index}>
          <span className="chip-value">
            {chip}
          </span>
          <button
            type="button"
            className="chip-delete-button"
            onClick={this.deleteChip.bind(null, chip)}>
            x
          </button>
        </span>
      );
    });

    let placeholder = !this.props.max || chips.length < this.props.max ? this.props.placeholder : '';

    return (
      <div
        className="chips"
        onClick={this.focusInput}>
        {chips}
        <input
          type="text"
          className="chips-input"
          placeholder={placeholder}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.clearInvalidChars}
        />
      </div>
    );
  }

  setChips(chips) {
    if (chips && chips.length) {
      this.setState({ chips });
    }
  }

  onKeyDown(event) {
    const keyPressed = event.which;

    if (keyPressed === this.state.KEY.enter ||
        (keyPressed === this.state.KEY.tab && event.target.value)) {
      event.preventDefault();
      this.updateChips(event);
    } else if (keyPressed === this.state.KEY.backspace) {
      const chips = this.state.chips;

      if (!event.target.value && chips.length) {
        this.deleteChip(chips[chips.length - 1]);
      }
    }
  }

  clearInvalidChars(event) {
    const value = event.target.value;

    if (this.state.INVALID_CHARS.test(value)) {
      event.target.value = value.replace(this.state.INVALID_CHARS, '');
    } else if (value.length > this.props.maxlength) {
      event.target.value = value.substr(0, this.props.maxlength);
    }
  }

  updateChips(event) {
    if (!this.props.max ||
        this.state.chips.length < this.props.max) {
      const value = event.target.value;

      if (!value) {
        return;
      }

      const chip = value.trim().toLowerCase();

      if (chip && this.state.chips.indexOf(chip) < 0) {
        this.setState({
          chips: update(
            this.state.chips,
            {
              $push: [chip]
            }
          )
        });
      }
    }
    event.target.value = '';
  }

  deleteChip(chip) {
    const index = this.state.chips.indexOf(chip);

    if (index >= 0) {
      this.setState({
        chips: update(
          this.state.chips,
          {
            $splice: [[index, 1]]
          }
        )
      });
    }
  }

  focusInput(event) {
    const children = event.target.children;

    if (children.length) {
      children[children.length - 1].focus();
    }
  }

}

Chips.propTypes = {
  chips: PropTypes.array,
  max:   PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  maxlength: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  placeholder: PropTypes.string
};

Chips.defaultProps = {
  placeholder: 'Ajouter...',
  maxlength:   10
};


export default Chips;
