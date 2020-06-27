import React from "react";
import { shallow } from "enzyme";
import { findTestWrapper } from "../../../../utils/testUtils";
import Header from "../../components/Header";

describe("Header 组件", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it("包含一个 input 框", () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, "input");
    expect(inputElem.length).toBe(1);
  });

  it("input 框初始化时内容为空", () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, "input");
    expect(inputElem.prop("value")).toEqual("");
  });

  it("input 框内容，当用户输入时，会跟着变化", () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, "input");
    const inputValue = "今天要学习 Jest";
    inputElem.simulate("change", {
      target: { value: inputValue },
    });
    expect(wrapper.state("value")).toEqual(inputValue);
    //const newInputElem = findTestWrapper(wrapper, 'input')
    //expect(newInputElem.prop('value')).toEqual(inputValue)
  });

  it("input 框输入回车时，如果 input 无内容，无操作", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const inputElem = findTestWrapper(wrapper, "input");
    wrapper.setState({ value: "" });
    inputElem.simulate("keyUp", {
      keyCode: 13,
    });
    expect(fn).not.toHaveBeenCalled();
  });

  it("input 框输入回车时，如果 input 有内容，addUndoItem 应该被调用，input 框内容清空", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const inputElem = findTestWrapper(wrapper, "input");
    const inputValue = "学习 React";
    wrapper.setState({ value: inputValue });
    inputElem.simulate("keyUp", {
      keyCode: 13,
    });
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenLastCalledWith(inputValue);
    expect(wrapper.state("value")).toEqual("");
  });
});
