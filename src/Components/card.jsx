import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
  

//"https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600"
const CustomCard = (props) => {
  return (
    <div>
      <Card >
        <Card.Img variant="top" src= {props.imageurl}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.cardtext}
          </Card.Text>
          <Button variant="primary"  onClick={props.onClick}>{props.buttontext}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
