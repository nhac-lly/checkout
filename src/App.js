import React, { useState, useEffect } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import Cart from './components/Cart';
import Pricing from './components/Pricing';
import Info from './components/Info';
import Header from './components/Header';
import data from './mock';

// const data = JSON.stringify(jsonData)

const App = () => {
  const [tempData, setTempData] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(tempData);

  useEffect(() => {
      setTempData(data);
      setLoading(false);
  }, []);
  
  const handleCountChange = (count, index) => {
    setTempData({...tempData}, tempData.orderDetail.item[index].count = count);
  };
  
  return (
    <div className="App">
      <Header className="bg back"/>
      <Row>
        <Col sm={12} md={6}>
          {Cart(tempData, loading, handleCountChange)}
        </Col>
        <Col sm={12} md={6}>
          {Info(tempData, loading)}
          {Pricing(tempData, loading)}
        </Col>
      </Row>
    </div>
  );
}

export default App;
