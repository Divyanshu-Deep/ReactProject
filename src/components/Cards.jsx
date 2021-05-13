import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";

const Cards = () => {
  const [products] = React.useState([
    {
      id: "1",
      name: "product A",
      price: "50$",
      image: "https://picsum.photos/id/10/200/100"
    },
    {
      id: "2",
      name: "product B",
      price: "60$",
      image: "https://picsum.photos/id/11/200/100"
    },
    {
      id: "3",
      name: "product C",
      price: "70$",
      image: "https://picsum.photos/id/12/200/100"
    },
    {
      id: "4",
      name: "product D",
      price: "90$",
      image: "https://picsum.photos/id/13/200/100"
    },
  ]);
  return (
    <div className="card-data">
      {products.map((product) => (
        <div key={product.id} className="container">
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Text>{product.name}</Card.Text>
              <Card.Text> Price: {product.price}</Card.Text>
              <Button variant="secondary">Go To Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cards;
