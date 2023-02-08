import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mobiles & Brands</h3>
          <p>All Brands of Mobiles</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Laptop & Accesories</h3>
          <p>Variable Brands of Laptop and Accesories</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Shoes</h3>
          <p>
            All type Brnaded shoes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}
export default ControlledCarousel;