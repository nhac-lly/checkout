import React from 'react';
import * as data from '../mock.json';
import pic from '../pic.jpg'
import { Card, Button, Alert } from 'react-bootstrap';

const Review = () => {
  return (
    <div className="App">
      <h1 style={{width: "100%"}}><Alert key='1' variant='info'>
         Your Order (#{data.orderDetail.orderNumber})
      </Alert></h1>
      {data.orderDetail.item.map((i, index) => {
        return (
          <div key={index}> 
            <Card style={{ width: '20rem', margin: '5% auto' }}>
              <Card.Img variant="top" src={pic} />
              <Card.Body>
                <Card.Title>Item {index + 1}</Card.Title>
                <Card.Text>
                  Name: {i.name} <br/>
                  Price: {i.price} <br/>
                  Shipping Fee: {i.shipfee}
                </Card.Text>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  );
}

export default Review;