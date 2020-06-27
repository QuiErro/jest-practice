import React, { Component } from "react";
// import axios from 'axios'
import Header from "./components/Header";
import UndoList from "./components/UndoList";
import "./index.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      undoList: [],
    };
  }

  /*
  componentDidMount(){
    axios.get('/undoList.json').then(res => {
      this.setState({
        undoList: res.data
      })
    }).catch(e => {})
  }
  */

  handleAddUndoItem = (value) => {
    this.setState((state) => ({
      undoList: [...state.undoList, { status: "div", value }],
    }));
  };

  handleDeleteUndoItem = (index) => {
    const newUndoList = [...this.state.undoList];
    newUndoList.splice(index, 1);
    this.setState({
      undoList: newUndoList,
    });
  };

  handleChangeItemStatus = (index) => {
    const newUndoList = [...this.state.undoList];
    newUndoList[index].status = "input";
    this.setState({
      undoList: newUndoList,
    });
  };

  handleResetItemStauts = (index) => {
    const newUndoList = [...this.state.undoList];
    newUndoList[index].status = "div";
    this.setState({
      undoList: newUndoList,
    });
  };

  handleChangeItemValue = (obj) => {
    const newUndoList = [...this.state.undoList];
    newUndoList[obj.index].value = obj.value;
    this.setState({
      undoList: newUndoList,
    });
  };

  render() {
    return (
      <div>
        <Header addUndoItem={this.handleAddUndoItem} />
        <UndoList
          valueChange={this.handleChangeItemValue}
          resetStatus={this.handleResetItemStauts}
          changeStatus={this.handleChangeItemStatus}
          deleteItem={this.handleDeleteUndoItem}
          list={this.state.undoList}
        />
      </div>
    );
  }
}

export default TodoList;
