import React, { useState, useEffect } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import Cart from './components/Cart';
import Pricing from './components/Pricing';
import Info from './components/Info';
import Header from './components/Header';
import data from './mock';

const App = () => {
  const [ tempData, setTempData ] = useState({});
  const [ item, setItem ] = useState([])
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
      setTempData(data);
      setItem(data.orderDetail.item)
      setLoading(false);
  }, []);

  const handleCountChange = (count, index) => {
    let nextItem = [...item];
    nextItem[index].count = count;
    setItem(nextItem);
  };

  const { firstName, lastName, address, email, phoneNumber, orderDetail } = tempData;

  const cartProps = {
    orderDetail,
    handleCountChange,
  };

  const infoProps = {
      firstName,
      lastName, 
      address, 
      email, 
      phoneNumber
  };

  const pricingProps ={
    item,
  };

  return (
    <div className="App">
      <Header className="bg back"/>
      {!loading ?
      ( <Row>
        <Col sm={12} md={6}>
          <Cart {...cartProps} />
        </Col>
        <Col sm={12} md={6}>
          <Info {...infoProps} />
          <Pricing {...pricingProps} />
        </Col>
      </Row> ) : (<div/>) }
    </div>
  )
}

export default App;
