import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import {  useSelector } from 'react-redux';

function Header() {
  const wishlist=useSelector((state)=>state.wishlistReducer)//here the state represent store
  const cart=useSelector((state)=>state.cartReducer)

  
  return (
    <div>

<Navbar expand="lg"style={{backgroundColor:"lightblue", zIndex:"1" }} className='w-100 position-fixed top-0' >
      <Container>
        <Navbar.Brand >Welcome to <span className='text-warning'><Link to={"./"}><i class="fa-solid fa-cart-shopping text-warning mt-2 me-2"></i>E-cart</Link></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  ">
           
                <Nav.Link className='btn  border rounded me-5 '><Link  style={{textDecoration:"none",color:"white"}} to={'./wishList'}><i class="fa-sharp fa-solid fa-heart" style={{color:"red"}}></i> Wishlist <Badge bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>
                <Nav.Link className='btn  border rounded me-5 '><Link style={{textDecoration:"none",color:"white"}} to={'./cart'}><i class="fa-solid fa-cart-shopping text-warning mt-2 me-2"></i>Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>
         
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header