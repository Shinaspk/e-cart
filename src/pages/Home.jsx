import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartSlice';
function Home() {
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);
  const dispatch=useDispatch()
  return (
    <div>


      <Row className='m-5'>
        {data?.length>0 ?

          data?.map((item) => (
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>

              <Card style={{ width: '18rem' , boxShadow: '  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} >
                <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}} />
                <Card.Body>
                  <Card.Title>{item.title.slice(0,20)}...</Card.Title>
                  <Card.Text>
                    <p className='fw-bolder'>Price:₹{item.price}</p>

                    <p>{item.description.slice(0,40)}...</p>
                  </Card.Text>
                  <div className='d-flex align-item-center justify-content-between'>
                    <Button onClick={()=>dispatch(addToWishlist(item))} style={{ backgroundColor: "white" }} variant="primary"><i class="fa-sharp fa-solid fa-heart" style={{ color: "red " }}></i></Button>
                    <Button onClick={()=>dispatch(addToCart(item)) }style={{ backgroundColor: "white" }} variant="primary"><i class="fa-solid fa-cart-shopping text-warning "></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>)) : <p>Nothing to display</p>
            }
      </Row>
    </div>
  )
}

export default Home