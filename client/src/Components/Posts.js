import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import Spinner from "./Spinner";

const Cards = ({ dataPosts }) => {
  const arr = dataPosts || [];
  const makeRows = () =>
    arr.map((doc) => {
      return (
        <Card key={doc.id}>
          <Card.Content>
            <Card.Header content={doc.name} />
            <Card.Meta content={doc.title} />
            <Card.Description content={doc.body} />
          </Card.Content>
        </Card>
      );
    });
  return (
    <React.Fragment>
      {!dataPosts ? (
        <Spinner data-test="component-spinner" />
      ) : (
        <Card.Group data-test="component-posts">{makeRows()}</Card.Group>
      )}
    </React.Fragment>
  );
};

Cards.propTypes = {
  dataPosts: PropTypes.array,
};

export default Cards;
