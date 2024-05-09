import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import Navbar from '../../components/Navbar/Navbar';

function Login() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Check if the email and password match the admin credentials
    if (email === "vivekshejole143@gmail.com" && password === "12345678") {
      // If matched, set the user as admin
      setUser({ email: email, isAdmin: true });
    } else {
      // If not matched, set the user as a regular user
      setUser({ email: email, isAdmin: false });
    }
  };
  return (

    <div>
      <Navbar/>
    <div className='main justify-content-center '>
      <div className=' p-5 border border-danger border-2 rounded-5 form1'>
      <Form className=' text-danger ' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control variant="outline-danger" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control variant="outline-danger" type="password" placeholder="Password" />
      </Form.Group>
     
      <Form.Group  className="mb-3 text-center mt-5 " controlId="formBasicButton">
      <Button variant="outline-danger " type='submit' onClick={()=>handleLogin()}>
          Log In
      </Button>
      <a class="nav-link text-white mx-3 fs-5" href='/plans'><span className='m2 fs-6 text-info'>Please Select plan if you are new user (Click Here)</span></a>
      </Form.Group>
    </Form>
    </div> 
    </div>
    </div>
  )
}

export default Login
