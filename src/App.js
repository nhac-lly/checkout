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

  return (
    <div className="App">
      <Header className="bg back"/>
      <Row>
        <Col sm={12} md={6}>
          <Cart tempData={tempData} loading={loading} handleCountChange={handleCountChange} />
        </Col>
        <Col sm={12} md={6}>
          <Info tempData={tempData} loading={loading}/>
          <Pricing item={itemData} loading={loading}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
