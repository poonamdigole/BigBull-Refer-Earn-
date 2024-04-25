import React from 'react'
// import Navbar from '../../components/Navbar/Navbar'
import About from '../About/About';
import Plans from '../Plans/Plans'
import Button from 'react-bootstrap/Button';
import Deposite from './Deposite';
// import Deposite from './Deposite';
// import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

function Home() {
  return (
  
    <div>
      <About/>
      <div  className='mt-5'>
        <div className='container mt-5 d-flex justify-content-center  ' >


          {/* <Link to="withdraw"  className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          
          </Link>
          <Link to="withdraw"  className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <Button variant="outline-danger ">Withdraw Log</Button>
          </Link> */}
          <Button variant="outline-danger mx-2">Deposite Log</Button>
          <Button variant="outline-danger ">Withdraw Log</Button>

        </div>
     <div className='m-4'>
     <Deposite/>
     </div>
      </div>

      {/* ------------------------------section easy stapes---------------------------------------- */}

      
      
    </div>
  )
}

export default Home
