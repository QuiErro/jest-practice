import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value || "",
    });
  };

  handleInputKeyUp = (e) => {
    const { value } = this.state;
    const { addUndoItem } = this.props;
    if (e.keyCode !== 13 || !value) return;
    addUndoItem(value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="header">
        <div className="header-content">
          TodoList
          <input
            className="header-input"
            placeholder="Add Todo"
            data-test="header-input"
            value={value}
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
          />
        </div>
      </div>
    );
  }
}

export default Header;
