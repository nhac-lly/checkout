import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar className="mr-auto" bg="dark" variant="dark">
    <Navbar.Brand style={{paddingLeft: '15%', fontSize: '2rem' }}href="#home">Shop for fun</Navbar.Brand>
  </Navbar>
);

export default Header;