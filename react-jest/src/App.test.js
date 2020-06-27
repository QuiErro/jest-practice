import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("App 组件能正常渲染", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
  // console.log(wrapper.debug())
  /*
  const container = wrapper.find('[data-test="container"]');
  expect(container).toExist();
  expect(container.first()).toHaveProp("title", "123");
  */
});
