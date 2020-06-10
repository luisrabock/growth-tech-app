import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../TestUtils/Utils";
import MenuApp from "../../Components/MenuApp";

const setup = (dataMenu = [{ id: "1", label: "Home", name: "home" }]) => {
  return shallow(<MenuApp dataMenu={dataMenu} />);
};

it("Renders without error", () => {
  const wrapper = setup();
  const menuAppComponent = findByTestAttr(wrapper, "componenet-menu-app");
  expect(menuAppComponent.length).toBe(1);
});

it("does not throw warning with expected props", () => {
  checkProps(MenuApp, {
    dataMenu: [{ id: "1", label: "Home", name: "home" }],
  });
});
