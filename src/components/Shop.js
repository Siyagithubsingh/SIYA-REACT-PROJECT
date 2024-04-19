import React, {Component} from 'react';
import { Navbar, Container, Nav, Row, Col, Button, Image, Stack, Form } from 'react-bootstrap'

class Shop extends Component {
  render() { 
    return (
      <div>
        <Container fluid className='text-white px-1 px-md-5 py-md-2' style={{ backgroundColor: '#3b5d50' }}>
          <Navbar expand='md' variant='dark'>
            <Container fluid>
              <Navbar.Brand href='/' className='text-white'><h1 className='fw-medium'>Furni.</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' className='border-0' style={{ color: 'transparent' }} />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto' gap={5}>
                  <Nav.Link href='/' className='fw-medium'>Home</Nav.Link>
                  <Nav.Link href='/shop' className='fw-medium active'>Shop</Nav.Link>
                  <Nav.Link href='/about' className='fw-medium'>About</Nav.Link>
                  <Nav.Link href='/services' className='fw-medium'>Services</Nav.Link>
                  <Nav.Link href='/blog' className='fw-medium'>Blog</Nav.Link>
                  <Nav.Link href='/contact' className='fw-medium'>Contact US</Nav.Link>
                  <Nav.Link><Image src='images/user.svg' className='img-fluid' /></Nav.Link>
                  <Nav.Link><Image src='images/cart.svg' className='img-fluid' /></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container fluid>
            <Row>
              <Col lg={5} className='d-flex justify-content-center'>
                <Stack gap={2} className='d-flex justify-content-center' >
                  <h1 className='fw-bold'>Shop</h1>
                  <p className='text-white-50'>If you're ready to explore our collection and transform your space, visit our online shop today. Discover a wide range of furniture pieces meticulously curated to suit every style and preference. From cozy sofas to elegant dining sets, we have everything you need to elevate your home or office. With easy navigation and secure checkout, shopping with us is a breeze. Start browsing now and find the perfect pieces to bring your vision to life.</p>
                  <Stack direction='horizontal' gap={2} >
                    <Button variant='warning' className='rounded-pill fw-medium text-dark' size='lg'>Shop Now</Button>
                    <Button variant='outline-light' className='rounded-pill fw-medium' size='lg' >Explore</Button>
                  </Stack>
                </Stack>
              </Col>
              <Col lg={7}>
                <Image src="images/couch.png" className='img-fluid' />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid className='py-5'>
          <Row className='py-5'>
            <Col md={3} sm={6}>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-3.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Aurora Loveseat</h6>
                <h5 className='fw-bold text-black'>₹3000</h5>
              </a>
            </Col>
            <Col md={3} sm={6}>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-1.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Tranquil Rocking Chair</h6>
                <h5 className='fw-bold text-black'>₹5000</h5>
              </a>
            </Col>
            <Col md={3} sm={6}>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-2.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Harmony  Armchair</h6>
                <h5 className='fw-bold text-black'>₹15000</h5>
              </a>
            </Col>
            <Col md={3} sm={6}>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-3.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Ergonomic Chair</h6>
                <h5 className='fw-bold text-black'>₹4000</h5>
              </a>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col md={3} sm={6}>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-3.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Nordic Chair</h6>
                <h5 className='fw-bold text-black'>₹5600</h5>
              </a>
            </Col>
            <Col md={3} sm={6}>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-1.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Nordic Chair</h6>
                <h5 className='fw-bold text-black'>₹7200</h5>
              </a>
            </Col>
            <Col md={3} sm={6}>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-2.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Kruzo Aero Chair</h6>
                <h5 className='fw-bold text-black'>₹9500</h5>
              </a>
            </Col>
            <Col md={3} sm={6}>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-3.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Ergonomic Chair</h6>
                <h5 className='fw-bold text-black'>₹9732</h5>
              </a>
            </Col>
          </Row>
        </Container>



        <Container fluid className='bg-white anchor'>
          <Row className='p-auto py-5 p-sm-5'>
            <Col className='d-flex flex-column justify-content-end'>
              <h4><span class="me-1"><Image src="images/envelope-outline.svg" alt="Image" class="img-fluid" /></span><span>Subscribe to Newsletter</span></h4>
              <Form className='d-flex'>
                <Form.Control placeholder='Enter your name' className='me-4' />
                <Form.Control placeholder='Enter your email' className='me-4' />
                <Button variant="primary" type='submit' className='px-4 border-0' size='lg' style={{ backgroundColor: '#3b5d50' }}><span class="fa fa-paper-plane"></span></Button>
              </Form>
            </Col>
            <Col className='d-flex flex-column justify-align-center align-items-end'>
              <Image src='images/sofa.png' fluid style={{ width: '400px', height: 'auto' }} />
            </Col>
          </Row>
          <Row className='border-bottom p-auto p-sm-5'>
            <Col lg={4} className='pb-5'>
              <h3>Furni.</h3>
              <p className='w-75'>From cozy sofas to elegant dining sets, each item in our collection is carefully curated to meet the highest standards of durability, functionality, and aesthetic appeal. Whether you're furnishing a cozy apartment, a spacious family home, or a bustling office space, we have the perfect solution to suit your needs.</p>
              <ul className="list-unstyled d-inline py-5 custom-social">
                <li className='d-inline me-4'><a href="/"><span class="fa fa-brands fa-facebook-f"></span></a></li>
                <li className='d-inline pe-4'><a href="/"><span class="fa fa-brands fa-twitter"></span></a></li>
                <li className='d-inline pe-4'><a href="/"><span class="fa fa-brands fa-instagram"></span></a></li>
                <li className='d-inline'><a href="/"><span class="fa fa-brands fa-linkedin"></span></a></li>
              </ul>
            </Col>
            <Col>
              <ul className='list-unstyled'>
                <li><a href='/'>About us</a></li>
                <li><a href='/'>Service</a></li>
                <li><a href='/'>Blog</a></li>
                <li><a href='/'>Contact us</a></li>
              </ul>
            </Col>
            <Col>
              <ul className='list-unstyled'>
                <li><a href='/'>Support</a></li>
                <li><a href='/'>Knowledge base</a></li>
                <li><a href='/'>Live chat</a></li>
              </ul>
            </Col>
            <Col>
              <ul className='list-unstyled'>
                <li><a href='/'>Jobs</a></li>
                <li><a href='/'>Our team</a></li>
                <li><a href='/'>Leadership</a></li>
                <li><a href='/'>Privacy policy</a></li>
              </ul>
            </Col>
            <Col>
              <ul className='list-unstyled'>
                <li><a href='/'>Nordic Chair</a></li>
                <li><a href='/'>Kruzo Aero chair</a></li>
                <li><a href='/'>Ergonomic Chair</a></li>
              </ul>
            </Col>
          </Row>
          <Row className='p-auto p-sm-5'>
            <Col md>
              <p>Copyright ©2024. All Rights Reserved. — Designed with love by Siya Singh</p>
              <p>Distributed By Siya Singh</p>
            </Col>
            <Col md className='d-flex justify-content-end align-items-center'>
              <Stack direction='horizontal' gap={4}>
                <a href='/'>Terms & Conditions</a>
                <a href='/'>Privacy policy</a>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
 
export default Shop