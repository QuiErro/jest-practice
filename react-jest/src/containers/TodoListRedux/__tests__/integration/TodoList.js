import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
// import axios from "../../__mocks__/axios";
import TodoList from "../../index";
import { findTestWrapper } from "../../../../utils/testUtils";
import store from "../../../../store/createStore";

/*
beforeEach(() => {
  axios.success = true
})

it(`
  1. 用户打开页面，远程请求数据成功
  2. 页面应该展示接口返回的数据
`, (done) => {
  const wrapper = mount(
    <Provider store={store}><TodoList /></Provider>
  )
  
  process.nextTick(() => {
    console.log(wrapper.debug())
    wrapper.update()
    console.log(wrapper.debug())
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toEqual(2)
    done()
  })
})

it(`
    1. 用户进入页面，请求远程数据失败
    2. 列表应该展示空数据，不应该挂掉
  `, (done) => {
    axios.success = false
    const wrapper = mount(
      <Provider store={store}><TodoList /></Provider>
    )
    process.nextTick(() => {
      console.log(wrapper.debug())
      wrapper.update()
      console.log(wrapper.debug())
      const listItems = findTestWrapper(wrapper, 'list-item')
      expect(listItems.length).toEqual(0)
      done()
    })
  })
*/

it(`
  1. Header 输入框输入内容
  2. 点击回车
  3. 列表中展示用户输入的内容项
`, () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>,
  );
  const inputElem = findTestWrapper(wrapper, "header-input");
  const content = "123";
  inputElem.simulate("change", {
    target: { value: content },
  });
  inputElem.simulate("keyUp", {
    keyCode: 13,
  });
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(listItems.length).toEqual(1);
  expect(listItems.text()).toContain(content);
});
