import React, { useEffect, useState } from "react";
import { Icon, Header } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "../styles.css";
import Posts from "./Posts";
import { labelsMenu } from "../Utils/constants";
import MenuApp from "./MenuApp";

const Main = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getResponse = await axios.get("http://localhost:4000/merge");
        setPosts(getResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Main;
