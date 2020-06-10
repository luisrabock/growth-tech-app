import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../TestUtils/Utils";
import Posts from "../../Components/Posts";

const setup = (dataPosts = [{ name: "Leanne Graham", id: 1 }]) => {
  return shallow(<Posts dataPosts={dataPosts} />);
};

it("Renders without error", () => {
  const wrapper = setup();
  const postsComponent = findByTestAttr(wrapper, "component-posts");
  expect(postsComponent.length).toBe(1);
});

it("does not throw warning with expected props", () => {
  checkProps(Posts, {
    dataPosts: [{ name: "Leanne Graham", username: "Bret", userId: 1, id: 2 }],
  });
});

it("does not renders the spinner when data exists", () => {
  const wrapper = setup();
  const spinnerComponent = findByTestAttr(wrapper, "component-spinner");

  expect(spinnerComponent.exists()).toBe(false);
});

it("Renders the spinner when data not exists", () => {
  const wrapper = setup(null);
  const spinnerComponent = findByTestAttr(wrapper, "component-spinner");

  expect(spinnerComponent.exists()).toBe(true);
});
