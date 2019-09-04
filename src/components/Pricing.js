import React from 'react';
import * as data from '../mock.json';
import { Card, Form, Button } from 'react-bootstrap';

const Pricing = () => {
    const { orderDetail, firstName, lastName, address, email, phoneNumber } = data;
    let total = 0;
    let shipping = 0;
    orderDetail.item.forEach(i => {
        total += i.price;
        shipping += i.shipfee;
    });
    const grandTotal = total + shipping;
    console.log(grandTotal);
    const radio = 'radio';
    const buttonStyle = {
        margin: '20px',
    };

    return (
        <div>
        <Card border="info" style={{ width: '20rem', margin: '20px auto 0'}}>
            <Card.Body>
                <Card.Title>Your Info</Card.Title>
                <Card.Text>
                    First Name: {firstName} <br />
                    Last Name: {lastName} <br />
                    Address: {address} <br />
                    Email: {email} <br />
                    Phone Number: {phoneNumber} <br />
                    {' '} <br/>
                    <a href="#" > Change Info </a>
                </Card.Text>
                <hr/>
                <Card.Title>Summary</Card.Title>
                <Card.Text>
                    Total: {total} <br />
                    Shipping Fee: {shipping} <br />
                    Grand Total: {grandTotal}
                </Card.Text>
                <hr/>
                <Card.Title>Payment Method</Card.Title>
                <Card.Text>
                    <Form>
                        <Form.Check
                            type={radio}
                            id={`default-${radio}`}
                            label={'Credit card'}
                        />
                        <Form.Check
                            disabled
                            type={radio}
                            id={`disabled-default-${radio}`}
                            label={'Cash on delivery'}
                        />
                    </Form>
                </Card.Text>
                <a href="#" > Check Details </a>
            </Card.Body>
        </Card>
              <div className="Buttons">
              <Button style={buttonStyle} variant="outline-secondary">Back</Button>
              <Button style={buttonStyle} variant="success">Confirm</Button>
            </div>
            </div>

    );
}

export default Pricing;