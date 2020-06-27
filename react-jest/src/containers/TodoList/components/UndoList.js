import React, { Component } from "react";

class UndoList extends Component {
  render() {
    const { list, deleteItem, changeStatus, resetStatus, valueChange } = this.props;

    return (
      <div className="undo-list">
        <div className="undo-list-title">
          正在进行
          <div data-test="count" className="undo-list-count">
            {list.length}
          </div>
        </div>
        <ul className="undo-list-content">
          {list.map((item, index) => (
            <li
              className="undo-list-item"
              data-test="list-item"
              key={`${item.value}-${index}`}
              onClick={() => changeStatus(index)}
            >
              {item.status === "div" ? (
                item.value
              ) : (
                <input
                  className="undo-list-input"
                  onChange={(e) => valueChange({ index, value: e.target.value })}
                  onBlur={() => resetStatus(index)}
                  data-test="input"
                  value={item.value}
                />
              )}
              <div
                className="undo-list-delete"
                data-test="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteItem(index);
                }}
              >
                -
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UndoList;
