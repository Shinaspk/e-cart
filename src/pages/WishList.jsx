import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWishlist, removeitem } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartSlice';

function WishList() {
  const wishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch=useDispatch()

  const handlewishlist=(item)=>{
    dispatch(removeitem(item.id))
    dispatch(addToCart(item))
  }
  return (
    <div>



      <Row className='m-5'>
        {wishlistArray?.length > 0 ?
          wishlistArray?.map((item) => (


            <Col className='mb-5 mt-5' sm={12} md={6} lg={4} xl={3}>

              <Card style={{ width: '18rem', boxShadow: '  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} >
                <Card.Img variant="top" src={item.thumbnail} style={{ height: "200px" }} />
                <Card.Body>
                  <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                  <Card.Text>
                    <p className='fw-bolder'>Price:₹ {item.price}</p>

                    <p>{item.description.slice(0, 40)}...</p>
                  </Card.Text>
                  <div className='d-flex align-item-center justify-content-between'>
                    <Button onClick={()=>dispatch(removeitem(item.id))} variant="primary"><i   class="fa-solid fa-trash"></i></Button>
                    <Button onClick={()=>handlewishlist(item)} style={{ backgroundColor: "white" }} variant="primary"><i class="fa-solid fa-cart-shopping text-warning "></i></Button>
                  </div> 
                </Card.Body>
              </Card>
            </Col>
          ))

          : <div className=' d-flex align-items-center justify-content-center flex-column'>
            <img src="https://parcamkapinda.com/img/cart.gif" alt="" />
            <p>no item in your wishlist </p>
            <button><Link style={{ textDecoration: "none" }} to={'/'}>back to home </Link></button>
          </div>
        }
        </Row>


    </div>
  )
}

export default WishList;