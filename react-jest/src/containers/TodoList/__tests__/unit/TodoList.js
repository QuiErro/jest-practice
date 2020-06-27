import React from "react";
import { shallow } from "enzyme";
import TodoList from "../../index";

describe("TodoList 组件", () => {
  it("能正常渲染", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper).toMatchSnapshot();
  });

  /*
  it('初始化时，远程请求数据，undoList 列表应该接收返回的数据', (done) => {
    const wrapper = shallow(<TodoList />);
    process.nextTick(() => {
      //console.log(wrapper.debug())
      wrapper.update()
      //console.log(wrapper.debug())
      expect(wrapper.state("undoList").length).toBe(2)
      done()
    })
  })
  */

  it("初始化时，undoList 列表为空", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.state("undoList")).toEqual([]);
  });

  it("应该给 Header 组件传递一个增加 undoList 内容的方法", () => {
    const wrapper = shallow(<TodoList />);
    const Header = wrapper.find("Header");
    expect(Header.prop("addUndoItem")).toBeTruthy();
  });

  it("当 handleAddUndoItem 方法被调用时，undoList 内容增加", () => {
    const wrapper = shallow(<TodoList />);
    const inputValue = "学习 React";
    wrapper.instance().handleAddUndoItem(inputValue);
    expect(wrapper.state("undoList").length).toBe(1);
    expect(wrapper.state("undoList")[0]).toEqual({
      status: "div",
      value: inputValue,
    });
  });

  it("应该给 UndoList 组件传递 undoList/changeStatus/resetStatus/valueChange 方法，并且传递 list 列表", () => {
    const wrapper = shallow(<TodoList />);
    const UndoList = wrapper.find("UndoList");
    expect(UndoList.prop("deleteItem")).toBeTruthy();
    expect(UndoList.prop("changeStatus")).toBeTruthy();
    expect(UndoList.prop("resetStatus")).toBeTruthy();
    expect(UndoList.prop("valueChange")).toBeTruthy();
    expect(UndoList.prop("list")).toEqual([]);
  });

  it("当 handleDeleteUndoItem 方法被调用时，undoList 内容减少", () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({
      undoList: [
        {
          status: "div",
          value: "444",
        },
        {
          status: "div",
          value: "123",
        },
      ],
    });
    wrapper.instance().handleDeleteUndoItem(0);
    expect(wrapper.state("undoList").length).toBe(1);
    expect(wrapper.state("undoList")).toEqual([
      {
        status: "div",
        value: "123",
      },
    ]);
  });

  it("当 handleChangeItemStatus 方法被调用时，undo item 的 status 变化", () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({
      undoList: [
        {
          status: "div",
          value: "444",
        },
        {
          status: "div",
          value: "123",
        },
      ],
    });
    wrapper.instance().handleChangeItemStatus(1);
    expect(wrapper.state("undoList")).toEqual([
      {
        status: "div",
        value: "444",
      },
      {
        status: "input",
        value: "123",
      },
    ]);
  });

  it("当 handleResetItemStauts 方法被调用时，undo item 的 status 恢复成 div", () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({
      undoList: [
        {
          status: "div",
          value: "444",
        },
        {
          status: "input",
          value: "123",
        },
      ],
    });
    wrapper.instance().handleResetItemStauts(1);
    expect(wrapper.state("undoList")).toEqual([
      {
        status: "div",
        value: "444",
      },
      {
        status: "div",
        value: "123",
      },
    ]);
  });

  it("当 handleChangeItemValue 方法被调用时，undoList 内容变化", () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({
      undoList: [
        {
          status: "input",
          value: "123",
        },
        {
          status: "div",
          value: "456",
        },
      ],
    });
    wrapper.instance().handleChangeItemValue({ index: 0, value: "456" });
    expect(wrapper.state("undoList")).toEqual([
      {
        status: "input",
        value: "456",
      },
      {
        status: "div",
        value: "456",
      },
    ]);
  });
});
