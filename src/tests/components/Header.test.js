// shallow render
import React from "react";
import { shallow } from "enzyme";
//import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";
import toJSON from "enzyme-to-json";
// test("should render Header correctly", () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

test("should render Headder correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  //expect(wrapper.find("h1").length).toBe(1);
});
