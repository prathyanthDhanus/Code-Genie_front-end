import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
  return (
    <div >
         <Carousel className='h-50 '>
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src='https://jobs.giftabled.org/wp-content/uploads/2023/03/male-speaker-giving-presentation-hall-university-workshop-audience-conference-hall-1536x864.jpg'        
          alt="No image found"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?w=1480&t=st=1691228886~exp=1691229486~hmac=6f7d54810eb05077d21d16df55b795f31b69e8657d197e0befc4d02f4be730ab"        
          alt="No image found"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src='https://img.freepik.com/free-photo/medium-shot-man-working-laptop_23-2150323506.jpg?w=1380&t=st=1691228975~exp=1691229575~hmac=aaf3e7e48d7a3825c0e49685941d8a8af183d55eba8cdabc03a43afb9381d9c1' 
          alt="No image found"
        />

        {/* <Carousel.Caption>
           <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Carousels;
