import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";

class Header extends Component {
  handleAddUndoItem = (e) => {
    if (e.keyCode !== 13 || !e.target.value) return;
    const { addUndoItem, handleInputChange } = this.props;
    addUndoItem(e.target.value);
    handleInputChange("");
  };

  render() {
    const { value, handleInputChange } = this.props;

    return (
      <div className="header">
        <div className="header-content">
          TodoList
          <input
            className="header-input"
            placeholder="Add Todo"
            data-test="header-input"
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyUp={this.handleAddUndoItem}
          />
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  value: state.todo.inputValue,
});

const mapDispatch = (dispatch) => ({
  handleInputChange(value) {
    dispatch(actions.changeInputValue(value));
  },
});

export default connect(mapState, mapDispatch)(Header);
