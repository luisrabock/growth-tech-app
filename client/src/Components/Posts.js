import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import Spinner from "./Spinner";

const Cards = ({ dataPosts }) => {
  const arr = dataPosts || [];
  const makeRows = () =>
    arr.map((doc) => {
      return (
        <Card index={doc.id}>
          <Card.Content>
            <Card.Header content={doc.name} />
            <Card.Meta content={doc.title} />
            <Card.Description content={doc.body} />
          </Card.Content>
        </Card>
      );
    });
  return (
    <div data-test="component-posts">
      {!dataPosts ? <Spinner /> : <Card.Group>{makeRows()}</Card.Group>}
    </div>
  );
};

Cards.propTypes = {
  dataPosts: PropTypes.array.isRequired,
};

export default Cards;
