import React, {
  Component,
  PropTypes
}                 from 'react';
import {
  Paragraph,
  BlockQuote,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  FontSize1,
  FontSize2,
  FontSize3,
  FontSize4,
  FontSize5,
  FontSize6,
  FontSize7,
  Bold,
  Italic,
  Underline,
  StrikeThrough,
  InsertOrderedList,
  InsertUnorderedList,
  JustifyLeft
}                 from './commands';

class EditableDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {html: this.props.content};

    this.emitChange = this.emitChange.bind(this);
    this.execCommand = this.execCommand.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({html: nextProps.content});
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.content !== this.state.html;
  }

  render() {
		// customize css rules here
    const buttonSpacing = {marginRight: 2};
    const	toolbarStyle = {marginBottom: 3};

    return (
      <div>
        {/* toolbar */}
        <div style={toolbarStyle}>

          {/* text form group */}
          <div
            className="btn-group"
            style={buttonSpacing}>
            <button
              className="btn btn-default btn-xs dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="true">
              <i className="fa fa-paragraph"></i>
              &nbsp;
              <i className="fa fa-caret-down"></i>
            </button>
            <ul
              role="menu"
              className="dropdown-menu">
              <li>
                <Paragraph
                  commandName={'Paragraphe'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <BlockQuote
                  commandName={'Citation'}
                  onClick={this.execCommand}
                />
              </li>
            </ul>
          </div>
          {/* text form group end */}

          {/* headers group */}
          <div
            className="btn-group"
            style={buttonSpacing}>
            <button
              className="btn btn-default btn-xs dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="true">
              <i className="fa fa-header"></i>
              &nbsp;
              <i className="fa fa-caret-down"></i>
            </button>
            <ul
              role="menu"
              className="dropdown-menu">
              <li>
                <Header1
                  commandName={'h1'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <Header2
                  commandName={'h2'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <Header3
                  commandName={'h3'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <Header4
                  commandName={'h4'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <Header5
                  commandName={'h5'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <Header6
                  commandName={'h6'}
                  onClick={this.execCommand}
                />
              </li>
            </ul>
          </div>
          {/* headers group end */}

          {/* font size */}
          <div
            className="btn-group"
            style={buttonSpacing}>
            <button
              className="btn btn-default btn-xs dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="true">
              <i className="fa fa-font"></i>
              &nbsp;
              <i className="fa fa-caret-down"></i>
            </button>
            <ul
              role="menu"
              className="dropdown-menu">
              <li>
                <FontSize1
                  commandName={'1'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <FontSize2
                  commandName={'2'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <FontSize3
                  commandName={'3'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <FontSize4
                  commandName={'4'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <FontSize5
                  commandName={'5'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <FontSize6
                  commandName={'6'}
                  onClick={this.execCommand}
                />
              </li>
              <li>
                <FontSize7
                  commandName={'7'}
                  onClick={this.execCommand}
                />
              </li>
            </ul>
          </div>
          {/* font size end */}

          {/* font style */}
          <div
            className="btn-group btn-group-xs"
            role="group"
            style={buttonSpacing}>
            <Bold
              onClick={this.execCommand}
            />
            <Italic
              onClick={this.execCommand}
            />
            <Underline
              onClick={this.execCommand}
            />
            <StrikeThrough
              onClick={this.execCommand}
            />
          </div>
          {/* font style end */}

          {/* list style */}
          <div
            className="btn-group btn-group-xs"
            role="group"
            style={buttonSpacing}>
            <InsertOrderedList
              onClick={this.execCommand}
            />
            <InsertUnorderedList
              onClick={this.execCommand}
            />
          </div>
          {/* list style end */}


          {/* text align group */}
          <div
            className="btn-group"
            style={buttonSpacing}>
            <button
              className="btn btn-default btn-xs dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="true">
              <i className="fa fa-align-left"></i>
              &nbsp;
              <i className="fa fa-caret-down"></i>
            </button>
            <ul
              role="menu"
              className="dropdown-menu">
              <li>
                <JustifyLeft
                  commandName={'aligner à gauche'}
                  onClick={this.execCommand}
                />
              </li>
            </ul>
          </div>
          {/* text align group end */}

        </div>
        {/* toolbar end */}
        {/* editor */}
        <div
          ref="editor"
          className="form-control"
          {...this.props}
          contentEditable={true}
          dangerouslySetInnerHTML={{__html: this.state.html}}
          onInput={this.emitChange}>
        </div>
        {/* editor end */}
      </div>

			// React.createElement("div", null,
			// 	React.createElement("div", {style: toolbarStyle},
      //
			// 		React.createElement("div", {className: "btn-group", style: buttonSpacing},
			// 			React.createElement("button", {
			// 				className: "btn btn-default btn-xs dropdown-toggle",
			// 				type: "button",
			// 				"data-toggle": "dropdown",
			// 				"aria-expanded": "false"},
			// 				React.createElement("i", {className: "fa fa-align-left"}), " ", React.createElement("i", {className: "fa fa-caret-down"})
			// 			),
			// 			React.createElement("ul", {className: "dropdown-menu", role: "menu"},
			// 				React.createElement("li", null,
			// 					React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'justifyLeft')}, "Align Left")
			// 				),
			// 				React.createElement("li", null,
			// 					React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'justifyRight')}, "Align Right")
			// 				),
			// 				React.createElement("li", null,
			// 					React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'justifyCenter')}, "Align Center")
			// 				),
			// 				React.createElement("li", null,
			// 					React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'justifyFull')}, "Align Justify")
			// 				)
			// 			)
			// 		),
      //
			// 		React.createElement("button", {
			// 			type: "button",
			// 			className: "btn btn-default btn-xs",
			// 			onClick: this.execCommand.bind(this, 'removeFormat')},
			// 			React.createElement("i", {className: "fa fa-eraser"})
			// 		)
			// 	)

		);
  }

  emitChange() {
    const editor = this.refs.editor;
    const	newHtml = editor.innerHTML;

    this.setState({html: newHtml}, () => {
      this.props.onChange({target: {value: newHtml}});
    });
  }

  execCommand(command, arg) {
    document.execCommand(command, false, arg);
  }

}

EditableDiv.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EditableDiv;
