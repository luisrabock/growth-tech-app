import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from "semantic-ui-react";

const MenuApp = ({ dataMenu }) => {
  return (
    <div className="toc" data-test="componenet-menu-app">
      <Menu className="inverted vertical left fixed">
        {dataMenu.map((doc, index) => (
          <Menu.Item as="a" key={index}>
            <Icon name={doc.name} />
            {doc.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

MenuApp.propTypes = {
  dataMenu: PropTypes.array.isRequired,
};

export default MenuApp;
