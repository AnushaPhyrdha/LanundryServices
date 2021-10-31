import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Image from '../assets/img1.png'
import './mainhome.css'
import { useHistory  } from 'react-router-dom';

function Orderheader() {
  const history = useHistory();
  function laundryhome(){
    history.push('/')
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">

<Navbar.Brand href="#home" class="laundryhead" onClick={laundryhome}>Laundry</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
    
  </Nav>
  <Nav>
    <Nav.Link href="#features">Pricing</Nav.Link>
    <Nav.Link href="#features">Career</Nav.Link>
    <Nav.Link href="#features" ><p class="signinlink"><img src={Image} class="img" alt="image1" />User Name</p></Nav.Link>
  </Nav>
</Navbar.Collapse>

</Navbar>
        </div>
    )
}

export default Orderheader
