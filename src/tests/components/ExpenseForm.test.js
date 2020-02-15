import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

// should render ExpenseForm  with expense data

test("should render ExpenseForm correctly with expense data", () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

// should render error for invalid form submission
test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set descrription on input change", () => {
  const value = "new description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea change", () => {
  const note = "get one coffee machine";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value: note }
  });
  expect(wrapper.state("note")).toBe(note);
});

// should set amount if valid input
test("should set amount if input value is valid", () => {
  const amount = "12.34";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: amount }
    });
  expect(wrapper.state("amount")).toBe(amount);
});

// should not set amount if invalid input
test("should not set amount if invalid input", () => {
  const value = "12.121";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });

  expect(wrapper.state("error")).toBe("");
  //console.log(wrapper.state());
  //console.log(onSubmitSpy.mock.calls);
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});
