import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import Navbar from '../../components/Navbar/Navbar';

function Login() {
  return (

    <div>
      <Navbar/>
    <div className='main justify-content-center '>
      <div className=' p-5 border border-danger border-2 rounded-5 form1'>
      <Form className=' text-danger '>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control variant="outline-danger" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control variant="outline-danger" type="password" placeholder="Password" />
      </Form.Group>
     
      <Form.Group  className="mb-3 text-center mt-5 " controlId="formBasicButton">
      <Button variant="outline-danger mt-5">
      <a class="nav-link text-white mx-3 fs-5" href="/dashboard">Log In</a>
      </Button>
      </Form.Group>
    </Form>
    </div> 
    </div>
    </div>
  )
}

export default Login
