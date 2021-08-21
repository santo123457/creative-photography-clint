import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from "../../../images/carousel-1.jpg";
import carousel2 from "../../../images/carousel-2.jpg"
import carousel3 from "../../../images/carousel-3.jpg"
import carousel4 from "../../../images/carousel-4.jpg"
import carousel5 from "../../../images/carousel-5.jpg"

const CarouselItems =[
    {
        img: carousel1
    },
    {
        img: carousel2
    },
  
    {
        img: carousel4
    },
    {
        img: carousel5
    },
    {
        img: carousel3
    }
]

const Demo = () => {
    return (
        
            <div className="" id='demo'>
                <h2 className="text-center text-dark pt-5 pb-5 font-weight-bold ">Some of our Demo works</h2>
               <Carousel className ="d-block m-auto pb-5">

            {
                CarouselItems.map((data)=><Carousel.Item>
                <img
                  className="d-block w-100"
                  src={data.img}
                  alt=""
                />
              </Carousel.Item>) 
            }
  
</Carousel>
            </div>
        
    );
};

export default Demo;