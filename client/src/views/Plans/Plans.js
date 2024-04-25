import React , {useEffect}from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import '../Plans/Plans.css'
import Navbar from '../../components/Navbar/Navbar';
import { BsArrowRightCircleFill } from "react-icons/bs";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Plans() {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
<>
<Navbar/>
<div className="heroSec align-content-end container "  >
        <div className=" w-auto">
          <h1 className=" text-danger ">
            Invest for Future in Stable Platform.
          </h1>
          <p className="text-white fs-4 ">
            Make a profitable business from these niches, Grow your profit,
            invest now. <br></br> See The Platform, Feel The Shine
          </p>
          <button type="button" class="btn btn-outline-danger mt-1 fs-5 ">
            Get Start <BsArrowRightCircleFill />
          </button>
        </div>
      </div>
    <div className='plans container mt-5 '>
    <div className='container align-content-center  text-center ' data-aos="zoom-out-up"  data-aos-duration="2000">
        <h5 className=' text-danger mt-5 '>Pricing Plan______</h5>
        <h1 className=' text-danger fs-1'>Best Investment Packages</h1>
        <p className='text-white w-75 container mb-5'>Deserunt hic consequatur ex placeat! atque repellendus inventore quisquam, perferendis, eum reiciendis quia nesciunt fuga magni.</p>
    </div>
  <div className=' d-grid card-group  '>
    <div>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
    

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={12} md={4}>
        <Card className="text-center mx-0 bg-dark text-white">
      <Card.Header className='d-flex justify-content-between align-content-center '>
        <div > 
        <h4>Gold</h4>
        <h6>Most Popular </h6>
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
        <Card className="text-center mx-0 bg-dark text-white">
      <Card.Header className='d-flex justify-content-between align-content-center '>
        <div>
        <h4>Platinum</h4>
        <h6 >Most Popular </h6>
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
        <Card className="text-center mx-0 bg-dark text-white">
      <Card.Header className='d-flex justify-content-between align-content-center '>
        <div>
        <h4 >Diamond</h4>
        <h6 >Most Popular </h6>
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
