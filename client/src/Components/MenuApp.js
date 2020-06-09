import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from "semantic-ui-react";

const MenuApp = ({ dataMenu }) => {
  return (
    <div className="toc">
      <Menu className="inverted vertical left fixed">
        {dataMenu.map((doc, index) => (
          <Menu.Item as="a" index={index}>
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
