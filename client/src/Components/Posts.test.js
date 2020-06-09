import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../TestUtils/Utils";
import Posts from "./Posts";

const setup = (dataPosts = [{ name: "Leanne Graham" }]) => {
  return shallow(<Posts dataPosts={dataPosts} />);
};

it("Renders without error", () => {
  const wrapper = setup();
  const postsComponent = findByTestAttr(wrapper, "component-posts");
  expect(postsComponent.length).toBe(1);
});
