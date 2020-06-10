import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../TestUtils/Utils";
import App from "../../App";

const setup = () => {
  return shallow(<App />);
};

it("Renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
