import React,{useEffect, useState}from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "./logo.png";
import { FaCircleUser } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { FaCopy } from "react-icons/fa6";
import Toast from 'react-bootstrap/Toast';
import Deposite from "../Home/Deposite";
import { HiUserGroup } from "react-icons/hi2";
import { MdAccountBalanceWallet } from "react-icons/md";

function Dashboard() {
    const [data,setData]=useState([]);
    const [show, setShow] = useState(false);
    const [url, setUrl] = useState('');
    const [user, setUser] = useState('');
    const [balance, setBalance] = useState('');
    const [profit,setProfit] = useState('');
    const [reffer,setReffer] = useState('');
    useEffect(()=>{
      const getUserData=async()=>{
        const reqData=await fetch("http://localhost/bigbull/api/user.php");
        const resData=await reqData.json(); 
      //  console.log(resData[0].user_id)       
        setUrl(resData[0].user_id);
        setUser(resData[0].username);
        setBalance(resData[0].balance);
        setProfit(resData[0].profit);
        setReffer(resData.length-1);
        setData(resData);
      }
      getUserData();
    },[])

     console.log(data)
    return (
 <div>
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary p-0  w-full">
        <img
          src={logo}
          alt=""
          className=""
          height={"70px"}
          width={"100px"}
        ></img>
        <button
          className="navbar-toggler text-bg-light text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
      <span className="navbar-toggler-icon"></span>
    </button>

   
   
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className=" w-100 d-flex justify-content-between align-items-center  ">
      <div className="navbar-nav d-flex flex-row">
        <a className="nav-link active text-white mx-3 fs-5" aria-current="page" href="/">Home</a>
        <a className="nav-link active text-white fs-4">/</a>
        <a className="nav-link text-white mx-3 fs-5" href="/dashboard">Dashboard</a>
      </div>  
      <div className='d-flex flex-column align-items-center p-sm-2 '>
        <FaCircleUser className='fs-1 text-white mx-4'/>
        <h4 className='text-danger'>{user}</h4>
    </div>
    </div>
    </div>
   
</nav>


<Container className="mt-5">

      <h2 className="text-danger m-5"> Dashboard</h2>
      <Row className=" justify-content-md-around text-white g-3  d-flex flex-column flex-md-row  ">
        <Col xs lg="3" className="bg-dark p-4 rounded-3 mx-1">
           <Row className="g-2">
            <Col variant="outline-danger" className=" mx-2 col-3 align-content-center justify-items-center rounded-circle ">
           <Button variant="outline-danger"> <FaUserShield className="fs-1"/>  </Button>
            </Col>
            <Col>
            <p>
                User ID:<h4 className="text-danger">{url}</h4>
            </p>
            </Col>
           </Row>
        </Col>
        <Col xs lg="3" className="bg-dark  mx-1 p-4 rounded-3 ">
           <Row className="g-2">
            <Col variant="outline-danger" className=" col-3 align-content-center justify-items-center  mx-2 rounded-circle ">
           <Button variant="outline-danger"> <MdAccountBalanceWallet className="fs-1"/>  </Button>
            </Col>
            <Col>
            <p>
            Main Balance:<h4 className="text-danger">{balance}</h4>
            </p>
            </Col>
           </Row>
        </Col>
        <Col xs lg="3" className="bg-dark mx-1 p-4 rounded-3 ">
           <Row >
            <Col variant="outline-danger" className=" col-3  mx-2 align-content-center justify-items-center rounded-circle ">
           <Button variant="outline-danger"> <HiUserGroup className="fs-1"/>  </Button>
            </Col>
            <Col>
            <p>
            Total Reffer:<h4 className="text-danger">{reffer}</h4>
            </p>
            </Col>
           </Row>
        </Col>
        <Col xs lg="3" className="bg-dark mx-1 p-4 rounded-3 ">
                <Row>
                  <Col
                    variant="outline-danger"
                    className=" col-3  mx-2 align-content-center justify-items-center rounded-circle "
                  >
                    <Button variant="outline-danger">
                      {" "}
                      <HiUserGroup className="fs-1" />{" "}
                    </Button>
                  </Col>
                  <Col>
                    <p>
                      Total Profit:<h4 className="text-danger">{profit}</h4>
                    </p>
                  </Col>
                </Row>
              </Col>
        
      </Row>
</Container>
      <div className="container mt-5">
        <h2 className="text-danger mx-5">Referral URL</h2>
      <div className="container w-100 p-5 align-items-center d-flex position-relative ">
        <input type="url" className="w-75 fs-4 mx-1 " value={url}></input>  
         <Button variant="outline-danger" className="m-1" onClick={() => { navigator.clipboard.writeText(url); setShow(true) }}><FaCopy/></Button>
        <Toast className=" w-auto " onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>Link Copy</Toast.Body>
        </Toast>
      </div>
      </div>   
      <div className="container">
<h2 className="text-danger mx-5">You Reffer</h2>
<table className="table text-light bg-dark mt-4 ">
  <thead className='bg-Red'>
    <tr>
    <th scope="col">User_Id</th>
    <th scope="col">Username</th>
    <th scope="col">Plan</th>
    <th scope="col">Date</th>
    
    </tr>
  </thead>
   <tbody>
  
    {
  data.slice(1).map((row,i)=>(
        <tr key={i}>
        <td>{row.user_id}</td>
        <td>{row.username}</td>
        <td>{row.plan}</td>
        <td>{row.date}</td>
        </tr> 
  
  ))
   
   }
   
  </tbody>
</table>
</div>
<div className="container">
<h2 className="text-danger mx-5">History</h2>
<Deposite/>
</div>
</div> 
    </div>
  )
}

export default Dashboard
