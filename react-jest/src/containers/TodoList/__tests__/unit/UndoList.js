import React from "react";
import { shallow } from "enzyme";
import { findTestWrapper } from "../../../../utils/testUtils";
import UndoList from "../../components/UndoList";

describe("UndoList 组件", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<UndoList list={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("未完成列表当数据为空数组时，count 数目为0，列表无内容", () => {
    const wrapper = shallow(<UndoList list={[]} />);
    const countElem = findTestWrapper(wrapper, "count");
    const listItems = findTestWrapper(wrapper, "list-item");
    expect(countElem.text()).toEqual("0");
    expect(listItems.length).toEqual(0);
  });

  it("未完成列表当数据有内容时，count 数目显示数据个数，列表不为空，且删除按钮存在", () => {
    const listData = [
      {
        status: "div",
        value: "123",
      },
      {
        status: "div",
        value: "456",
      },
      {
        status: "div",
        value: "789",
      },
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const countElem = findTestWrapper(wrapper, "count");
    const listItems = findTestWrapper(wrapper, "list-item");
    const deleteBtns = findTestWrapper(wrapper, "delete-btn");
    expect(countElem.text()).toEqual("3");
    expect(listItems.length).toEqual(3);
    expect(deleteBtns.length).toEqual(3);
  });

  it("未完成列表当数据有数据时，点击删除按钮，会调用删除方法", () => {
    const listData = [
      {
        status: "div",
        value: "123",
      },
      {
        status: "div",
        value: "456",
      },
      {
        status: "div",
        value: "789",
      },
    ];
    const fn = jest.fn();
    const testIndex = 1;
    const wrapper = shallow(<UndoList list={listData} deleteItem={fn} />);
    const deleteBtns = findTestWrapper(wrapper, "delete-btn");
    deleteBtns.at(testIndex).simulate("click", {
      stopPropagation: () => {},
    });
    expect(fn).toHaveBeenLastCalledWith(testIndex);
  });

  it("当某一项被点击时，触发执行 changeStatus 函数", () => {
    const listData = [
      {
        status: "div",
        value: "123",
      },
      {
        status: "div",
        value: "456",
      },
      {
        status: "div",
        value: "789",
      },
    ];
    const fn = jest.fn();
    const testIndex = 1;
    const wrapper = shallow(<UndoList list={listData} changeStatus={fn} />);
    const listItems = findTestWrapper(wrapper, "list-item");
    listItems.at(testIndex).simulate("click");
    expect(fn).toHaveBeenLastCalledWith(testIndex);
  });

  it("当某一项状态是 input 时，展示输入框", () => {
    const listData = [
      {
        status: "div",
        value: "123",
      },
      {
        status: "input",
        value: "456",
      },
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const inputElems = findTestWrapper(wrapper, "input");
    expect(inputElems.length).toBe(1);
  });

  it("当某一项失去焦点时，触发执行 resetStatus 函数", () => {
    const listData = [
      {
        status: "div",
        value: "123",
      },
      {
        status: "input",
        value: "456",
      },
    ];
    const fn = jest.fn();
    const wrapper = shallow(<UndoList list={listData} resetStatus={fn} />);
    const inputElems = findTestWrapper(wrapper, "input");
    inputElems.simulate("blur");
    expect(fn).toHaveBeenLastCalledWith(1);
  });

  it("当某一输入框内容变化时，触发 valueChange 方法", () => {
    const listData = [
      {
        status: "input",
        value: "123",
      },
    ];
    const value = "566";
    const fn = jest.fn();
    const wrapper = shallow(<UndoList list={listData} valueChange={fn} />);
    const inputElems = findTestWrapper(wrapper, "input");
    inputElems.simulate("change", {
      target: { value },
    });
    expect(fn).toHaveBeenLastCalledWith({ index: 0, value });
  });
});
