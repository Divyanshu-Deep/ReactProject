import React from 'react'
import {Carousel} from 'react-bootstrap'
import AppBar from './Navbar'
import Cards from './Cards'
const Products = () => {
    return (
<>
<AppBar />
<div className="container" style={{ marginTop: "2px" }}>
    
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/2/1000/400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Product Description</h3>
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
              <h3>Product Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="related-products">
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
            Related Product
          </h5>
        </span>
        <br />
        <br />
        <Cards />

        </div>
      </div>

      
</>
    )
}

export default Products
