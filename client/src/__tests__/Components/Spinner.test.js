import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../TestUtils/Utils";
import Spinner from "../../Components/Spinner";

const setup = (dataPosts = [{ name: "Leanne Graham" }]) => {
  return shallow(<Spinner dataPosts={dataPosts} />);
};

it("Renders without error", () => {
  const wrapper = setup();
  const spinnerComponent = findByTestAttr(wrapper, "component-spinner");
  expect(spinnerComponent.length).toBe(1);
});
