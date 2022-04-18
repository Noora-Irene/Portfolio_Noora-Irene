import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
   return (
      <>
         <Navbar bg="light" variant="light" fixed="top" position="fixed">
            <Nav className="justify-content-end">
               <Nav.Link to={'/home'}>Certificates</Nav.Link>
            </Nav>
         </Navbar>
      </>
   );
};

export default NavBar;