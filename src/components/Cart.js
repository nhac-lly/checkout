import React from 'react';
import picA from '../picA.jpg'
import picB from '../picB.jpg'
import { Card } from 'react-bootstrap';
import CounterInput from "react-counter-input";

const Cart = ({ orderDetail, handleCountChange }) => {
  return (
    <div>
      {orderDetail.item.map((i, idx) => (
        <div key={idx}>
          <Card style={{ width: '30rem', margin: '5% auto' }}>
            <Card.Img variant="top" src={idx === 0 ? picA : picB} />
            <Card.ImgOverlay>
              <CounterInput
                count={i.count}
                min={0}
                max={10}
                onCountChange={count => handleCountChange(count, idx)}
              />
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Title>Item {idx + 1}</Card.Title>
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