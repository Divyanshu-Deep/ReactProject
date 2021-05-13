import React from "react";
import { Carousel } from "react-bootstrap";
import Category from './Category'
import Cards from "./Cards";
import "./style.css";

const Body = () => {
  return (
    <>
      {/*Carousel start here */}
      <div className="container" style={{ marginTop: "2px" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/2/900/500"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/1/900/500"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <div>
        <h5 className="text-center"  style={{
              marginTop: "5px",
              marginBottom: "5px",
              height: "2px",
              width: "100%",
              borderTop: "1px solid #908B8A",
            }}>Product Category</h5>
            <br/>
            <br/>
        <Category />
      </div>

      {/*Latest product Card Component start here */}

      <div>
        <span>
          <h5
            className="text-center"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              height: "2px",
              width: "100%",
              borderTop: "1px solid #908B8A",
            }}
          >
            Latest Product
          </h5>
        </span>
        <br />
        <br />
        <Cards />
      </div>
      <br />
      {/*Top selling product Card Component start here */}
      <div>
        <span>
          <br />
          <h5
            className="text-center"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              height: "2px",
              width: "100%",
              borderTop: "1px solid #908B8A",
            }}
          >
            Top selling Product
          </h5>
        </span>
        <br />
        <br />
        <Cards />
      </div>
    </>
  );
};

export default Body;
