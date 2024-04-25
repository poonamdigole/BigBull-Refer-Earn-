import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import '../Plans/Plans.css'
import Navbar from '../../components/Navbar/Navbar';
function Plans() {
  return (
<>
    <div className='plans container mt-5  '>
    <div className='container align-content-center  text-center '>
        <h6 className=' text-danger '>Pricing Plan______</h6>
        <h1 className=' text-danger fs-1'>Best Investment Packages</h1>
        <p className='text-white w-75 container '>Deserunt hic consequatur ex placeat! atque repellendus inventore quisquam, perferendis, eum reiciendis quia nesciunt fuga magni.</p>
    </div>
  <div className=' d-grid card-group  '>
    <div>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
    

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={12} md={4}>
        <Card className="text-center mx-0">
      <Card.Header className='d-flex justify-content-between align-content-center '>
        <div>
        <h4 className='text-dark'>Gold</h4>
        <h6 className='text-dark'>Most Popular </h6>
        </div>
        <div className='px-1 rounded-2  perce'>
            <h2 className='text-danger '>9%</h2>
            <p className='fs-6'>Return</p>
        </div>
      </Card.Header>
      
        
        <p><IoMdCheckmarkCircleOutline/>Profit -- Every Week</p>
        <p><IoMdCheckmarkCircleOutline/>Capital will come back -- <span className='sign'>yes</span></p>
        <p><IoMdCheckmarkCircleOutline/>Repeatable --   10 Times</p>
       
        <h3 className='text-danger'>7000₹</h3>
      
      <Card.Footer><Button variant="danger">Invest Now</Button></Card.Footer>
    </Card>
</Col>
<Col xs={12} md={4}>
        <Card className="text-center mx-0">
      <Card.Header className='d-flex justify-content-between align-content-center '>
        <div>
        <h4 className='text-dark'>Platinum</h4>
        <h6 className='text-dark'>Most Popular </h6>
        </div>
        <div className='px-1 rounded-2  perce'>
            <h2 className='text-danger '>11%</h2>
            <p className='fs-6'>Return</p>
        </div>
      </Card.Header>
      
        
        <p><IoMdCheckmarkCircleOutline/>Profit -- Every Week</p>
        <p><IoMdCheckmarkCircleOutline/>Capital will come back -- <span className='sign'>yes</span></p>
        <p><IoMdCheckmarkCircleOutline/>Repeatable --   20 Times</p>
       
        <h3 className='text-danger'>10000₹</h3>
      
      <Card.Footer><Button variant="danger">Invest Now</Button></Card.Footer>
    </Card>
</Col>
<Col xs={12} md={4}>
        <Card className="text-center mx-0">
      <Card.Header className='d-flex justify-content-between align-content-center '>
        <div>
        <h4 className='text-dark'>Diamond</h4>
        <h6 className='text-dark'>Most Popular </h6>
        </div>
        <div className='px-1 rounded-2  perce'>
            <h2 className='text-danger '>15%</h2>
            <p className='fs-6'>Return</p>
        </div>
      </Card.Header>
      
        
        <p><IoMdCheckmarkCircleOutline/>Profit -- Every Week</p>
        <p><IoMdCheckmarkCircleOutline/>Capital will come back -- <span className='sign'>yes</span></p>
        <p><IoMdCheckmarkCircleOutline/>Repeatable --30 Times</p>
       
        <h3 className='text-danger'>15000₹</h3>
      
      <Card.Footer><Button variant="danger">Invest Now</Button></Card.Footer>
    </Card>
</Col>
      </Row>

     
    </div>
    </div> 
    </div>
    </>
  )
}

export default Plans
