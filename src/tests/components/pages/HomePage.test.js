import React from "react";
import { shallow } from "enzyme";
import HomePage from "../../../components/pages/HomePage";

test("should render NotFoundPage correctly", () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper).toMatchSnapshot();
});
