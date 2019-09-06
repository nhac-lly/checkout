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
  const [itemData, setItemData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTempData(data);
      setItemData(data.orderDetail.item)
      setLoading(false);
  }, []);

  const handleCountChange = (count, index) => {
    let nextItem = [...itemData];
    nextItem[index].count = count;
    setItemData(nextItem);
  };

  const cartProps = {
    tempData,
    handleCountChange
  };

  const infoProps = {
    tempData,
  };

  const pricingProps ={
    item: itemData,
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
