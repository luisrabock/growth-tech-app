import React, { useEffect, useState } from "react";
import { Icon, Header } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import "../styles.css";
import Posts from "./Posts";
import { labelsMenu } from "../Utils/constants";
import MenuApp from "./MenuApp";
import { fetchData } from "../Services/Services";

const Main = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchData(setPosts);
  }, []);
  return (
    <div data-test="component-main">
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <div className="pusher">
        <div className="full height">
          <MenuApp dataMenu={labelsMenu} />
          <div className="article">
            <Header as="h2">
              <Icon name="pin" />
              <Header.Content>Leitura de posts</Header.Content>
            </Header>
            <Posts dataPosts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
