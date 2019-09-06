import React, { useState } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';

const Info = ({ tempData }) => {
    const [ onEdit, setOnEdit ] = useState(false);
    const { firstName, lastName, address, email, phoneNumber } = tempData;
    const buttonStyle = {
        margin: '20px',
    };

    return (
        <div>
            <Card border="info" style={{ width: '80%', margin: '5% 10%' }}>
                <Card.Body>
                    <Card.Title>Your Information
                            <div className="Buttons">
                            <Button style={buttonStyle} variant="secondary" onClick={() => setOnEdit(!onEdit)}>{!onEdit ? 'Edit' : 'Save'}</Button>
                        </div>
                    </Card.Title>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                First Name:
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext={!onEdit} readOnly={!onEdit} defaultValue={firstName} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Last Name:
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext={!onEdit} readOnly={!onEdit} defaultValue={lastName} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Address:
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext={!onEdit} readOnly={!onEdit} defaultValue={address} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Email:
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext={!onEdit} readOnly={!onEdit} defaultValue={email} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Phone Number:
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext={!onEdit} readOnly={!onEdit} defaultValue={phoneNumber} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Info;