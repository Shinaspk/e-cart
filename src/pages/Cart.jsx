import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeCart, removeallitem } from '../slices/cartSlice';
import Card from 'react-bootstrap/Card';
function Cart() {

  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()
const navigate=useNavigate()
  const [total,setTotal]=useState()

  const getTotal=()=>{
    if (cartArray.length>0)
   {setTotal( cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))}
   else{
    setTotal(0)
   }
  
  }
  console.log(total);
  useEffect(()=>{
    getTotal()},[cartArray]
  )

  const handlecart=()=>{
    alert("Thankyou...your order is placed...")
    dispatch(removeallitem())
    navigate("/")
  }
  return (
    <div>
      {cartArray?.length > 0 ?
        <div style={{ marginTop: "100px" }}>

          <div className="row w-100">
            <div className="col-lg-6 m-5">
              <table className='table shadow border'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {cartArray?.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td ><img style={{ height: "100px", width: "100px" }} src={item.thumbnail} alt="" /></td>
                      <td>{item.price}</td>
                      <td>
                        <Button onClick={() => dispatch(removeCart(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
                      </td>
                    </tr>))}
                </tbody>
              </table>
            </div>
            <div className='col-lg-4'>
              <Card style={{ marginTop:'50px' ,width: '25rem', boxShadow: '  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} >

                <Card.Body style={{height:"300px",width:'100%'}}>
                  <Card.Title className='d-flex align-items-center justify-content-center'><h3>Cart Summary</h3></Card.Title>
                  <Card.Text>
                
                  <h4>Toatal number of products:<span className='fw-bolder fs-2 text-warning'>{cartArray.length}</span></h4>
                  <h4>
                    Total price:<span className='fw-bolder fs-2 text-warning'>{total} </span>
                  </h4>

                  </Card.Text>
                  <div className='d-flex align-item-center justify-content-between'>
                    <Button onClick={handlecart} variant="success rounded " style={{width:"360px"}}>Check out</Button>

                  </div>
                </Card.Body>
              </Card>

            </div>

          </div>



        </div> :
        <div className=' d-flex align-items-center justify-content-center flex-column'>
          <img src="https://parcamkapinda.com/img/cart.gif" alt="" />
          <p>nothing in your cart </p>
          <button><Link style={{ textDecoration: "none" }} to={'/'}>back to home </Link></button>
        </div>
      }
    </div>
  )
}

export default Cart