import React, { useState } from 'react';
import { Card, Form, Button, Toast } from 'react-bootstrap';

const Pricing = (tempData, loading) => {
    const [showToast, setShowToast] = useState(false);
    const toggleShowToast = () => setShowToast(!showToast);

    const { orderDetail } = tempData;
    let total = 0;
    let shipping = 0;
    if (!loading) {
        orderDetail.item.forEach(i => {
            total += (i.price * i.count);
            shipping += i.shipfee;
        })
    };
    const grandTotal = total + shipping;
    const radio = 'radio';
    const buttonStyle = {
        margin: '20px',
    };
    const toaster = () => (
        <Toast 
        style={{
            position: 'absolute',
            float: 'right',
            margin: '10%',
            width: '100%'
          }} 
        show={showToast} 
        onClose={toggleShowToast}>
            <Toast.Body>Test order created!</Toast.Body>
        </Toast>
    );

    return (
        <div>
            {!loading ?
                (<Card border="info" style={{ width: '80%', margin: '5% auto' }}>
                    <Card.Body>
                        <Card.Title>Summary</Card.Title>
                        <Card.Text>
                            Total: {total} <br />
                            Shipping Fee: {shipping} <br />
                            Grand Total: {grandTotal}
                        </Card.Text>
                        <hr />
                        <Card.Title>Payment Method</Card.Title>
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
                    </Card.Body>
                    <div className="Buttons">
                        <Button style={buttonStyle} variant="success" onClick={toggleShowToast}>Confirm</Button>
                    </div>
                </Card>) : (<div />)}
            {toaster()}
            <div>
            </div>
        </div>
    );
}

export default Pricing;