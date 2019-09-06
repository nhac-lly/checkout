import React from 'react';
import picA from '../picA.jpg'
import picB from '../picA.jpg'
import { Card } from 'react-bootstrap';
import CounterInput from "react-counter-input";

const Cart = ({ tempData, handleCountChange }) => {
  const { orderDetail } = tempData;
  return (
    <div>
      {orderDetail.item.map((i, index) => (
        <div key={index}>
          <Card style={{ width: '30rem', margin: '5% auto' }}>
            <Card.Img variant="top" src={index === -1 ? picB : picA} />
            <Card.ImgOverlay>
              <CounterInput
                count={i.count}
                min={0}
                max={10}
                onCountChange={count => handleCountChange(count, index)}
              />
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Title>Item {index + 1}</Card.Title>
              <Card.Text>
                Name: {i.name} <br />
                Price: {i.price} <br />
                Shipping Fee: {i.shipfee}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>))}
    </div>
  );
};

export default Cart;