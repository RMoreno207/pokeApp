import React from "react";
import { shallow } from "enzyme";
import Hooks from "./hooks";

describe("Hooks", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Hooks />);
    expect(wrapper).toMatchSnapshot();
  });
});
