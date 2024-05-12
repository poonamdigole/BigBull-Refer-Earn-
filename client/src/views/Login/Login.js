import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); 
  const [message,setMessage]= useState('')
  const [formvalue, setFormvalue] = useState({
    email: "",
    password: ""
  });
  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });

  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
      //console.log(formvalue); 
      const formData={email:formvalue.email,password:formvalue.password,}
      const res = await axios.post("http://localhost/bigbull/api/login.php",formData);
  

      setMessage(res.data['message']);
      if(res.data.success){ 
        localStorage.setItem('user',JSON.stringify(res.data['data']));
        setTimeout(()=>{
       navigate('/dashboard');
        },900)
       
      }
    }


  
  return (

    <div>
      <Navbar/>
    
    <div className='main justify-content-center '>
     
      <div className=' p-5 border border-danger border-2 rounded-5 form1'>
      <h5 className='text-warning p-0 m-0'>{message}</h5>
      <Form className=' text-danger ' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicemail">
        <Form.Label>Email</Form.Label>
        <Form.Control variant="outline-danger" required name='email' value={formvalue.email} onChange={handleInput} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control variant="outline-danger" required  name='password' value={formvalue.password} onChange={handleInput} type="password" placeholder="Password" />
      </Form.Group>
     
      <Form.Group  className="mb-3 text-center mt-5 " controlId="formBasicButton">
      <Button variant="outline-danger " type='submit' >
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
