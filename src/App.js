import React from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import Review from './components/Review'
import Pricing from './components/Pricing'

const App = () => {
  return (
    <div className="App">
      <Row>
        <Col sm={12} md={6}>
          <Review />
        </Col>
        <Col sm={12} md={6}>
          <Pricing />
        </Col>
      </Row>
    </div>
  );
}

export default App;
