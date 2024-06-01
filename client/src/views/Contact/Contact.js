import React, { useEffect } from 'react';
import './Contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/Navbar/Navbar';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Contact() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="contain container text-center text-white py-5">
        <h3 className='ws-1'>CONTACT WITH US</h3>
        <p className="text-danger fs-3 mx-3">We are just a step away...</p>
      </div>

      <Container className="my-5 d-md-flex justify-content-center align-items-center justify-content-between ">
        <Row className="justify-content-center m-2">
          <Col>
            <Card className="border-danger bg-black" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
              <Card.Header className="bg-danger border-danger">CONTACT</Card.Header>
              <Card.Body>
                <h5 className="card-title">ADDRESS</h5>
                <p className="card-text">Asset No.6, near International Airport, Moscat, Australia</p>
              </Card.Body>
              <hr className="text-danger-emphasis" />
              <Card.Body>
                <h5 className="card-title">PHONE</h5>
                <p className="card-text">011 46050102</p>
              </Card.Body>
              <hr className="text-danger-emphasis" />
              <Card.Body>
                <h5 className="card-title">EMAIL</h5>
                <p className="card-text">reservation@royalhotel.com</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center embed">
          <Col>
            <div className="">
              <iframe
                className=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120637.94989627846!2d74.66027112783725!3d19.11046628008788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713975101344!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                width={"100%"}
                height={"392px"}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
       
      <Row className="justify-content-center">
          <Col md={8}>
            <div className="form bg-none py-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
              <h1 className="text-danger text-center my-4 fs-1 font-bold">Get in touch..!</h1>
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="validationServer01">
                      <Form.Label className="text-white">First name</Form.Label>
                      <Form.Control type="text" className="py-2 is-valid" placeholder='John' required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="validationServer02">
                      <Form.Label className="text-white">Last name</Form.Label>
                      <Form.Control type="text" className="py-2 is-valid" placeholder='Doe' required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="floatingInput" className="my-3">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control type="email" className="py-2" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group controlId="floatingPassword" className="my-3">
                  <Form.Label className="text-white">Password</Form.Label>
                  <Form.Control type="password" className="py-2" placeholder="Password" required />
                </Form.Group>
                <Form.Group controlId="exampleFormControlTextarea1" className="my-3">
                  <Form.Label className="text-white">Query</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className="text-center">
                  <Button className="btn btn-danger" type="submit">CONTACT US</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
    </>
  );
}

export default Contact;