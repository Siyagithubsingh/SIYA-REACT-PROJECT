import React, { Component } from 'react'
import { Navbar, Container, Nav, Row, Col, Button, Image, Stack, Carousel, Form } from 'react-bootstrap'

export class Blog extends Component {
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
                  <Nav.Link href='/shop' className='fw-medium'>Shop</Nav.Link>
                  <Nav.Link href='/about' className='fw-medium'>About</Nav.Link>
                  <Nav.Link href='/services' className='fw-medium'>Services</Nav.Link>
                  <Nav.Link href='/blog' className='fw-medium active'>Blog</Nav.Link>
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
                  <h1 className='fw-bold'>Blog</h1>
                  <p className='text-white-50'>Welcome to our blog, your go-to destination for inspiration, tips, and insights on all things related to furniture, interior design, and home decor. Whether you're seeking ideas for decorating your living room, advice on selecting the perfect furniture pieces, or trends to watch out for, our blog is your ultimate resource. Written by industry experts and design enthusiasts, our articles cover a wide range of topics to help you create a space that reflects your unique style and personality. Explore our blog today and embark on a journey of creativity and inspiration for your home.</p>
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
        
        <Container fluid className='p-auto p-sm-5'>
          <Row>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-1.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>First Time Home Owner Ideas</h6>
                <p className='text-dark'>by Kristin Watson on Dec 19, 2023</p>
              </Container>
            </Col>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-2.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>How To Keep Your Furniture Clean</h6>
                <p className="text-dark">by Robert Fox on Dec 15, 2023</p>
              </Container>
            </Col>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-3.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>Small Space Furniture Apartment Ideas</h6>
                <p className='text-dark'>by Kristin Watson on Dec 12, 2023</p>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-2.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>How To Maintain the size of room and chairs</h6>
                <p className="text-dark">by Siya on Dec 27, 2023</p>
              </Container>
            </Col>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-3.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>Select furnniture according to you room size</h6>
                <p className='text-dark'>by Manit on Jan 12, 2024</p>
              </Container>
            </Col>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-1.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>always try to select chair by referring to your family</h6>
                <p className='text-dark'>by Rahul on Jan 29, 2024</p>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-3.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>Try to get cool and latest furniture</h6>
                <p className='text-dark'>by Suhana feb 12, 2024</p>
              </Container>
            </Col>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-1.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>First and last option should be your choice</h6>
                <p className='text-dark'>by Vineet on Feb 29, 2024</p>
              </Container>
            </Col>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-2.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>How To Keep Your Furniture Look awesome</h6>
                <p className="text-dark">by Anmol on Mar 15, 2024</p>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <h1 className='display-6 text-center fw-normal pt-5'>Testimonials</h1>
          <Carousel data-bs-theme='dark' className='p-5'>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Customers love Furni Sarah M. raves about the exceptional quality and top-notch customer service. John D. was impressed by the lightning-fast and free shipping. Emily H. praises the team's dedication and attention to detail. These testimonials speak volumes about Furni's commitment to excellence and customer satisfaction.”</p>
                <Image src='images/person-1.png' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
                <h6 className='pt-4'>Suhana</h6>
                <p>CCO, Co-off, Furni Inc.</p>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Customers can't get enough of Furni. is thrilled with the exceptional quality and top-notch customer service. Was blown away by the lightning-fast and free shipping. Emily H. can't stop praising the team's dedication and attention to detail. With testimonials like these, it's clear that Furni is the go-to choice for quality furniture and outstanding service.”</p>
                <Image src='images/siya_2.jpg' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
                <h6 className='pt-4'>Siya</h6>
                <p>CEO, Co-Founder, Furni Inc.</p>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Discover why our customers rave about their experiences with us. From cozy sofas to elegant dining tables, our furniture brings joy to homes across the country. Sarah loves the comfort and craftsmanship of her new sofa set. Michael found the perfect dining table after months of searching, praising its quality and hassle-free delivery. Emily couldn't be happier with her sturdy and elegant bed frame.”</p>
                <Image src='images/person_2.jpg' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
                <h6 className='pt-4'>Vineet</h6>
                <p>CCM, Co-cheif, Furni Inc.</p>
              </Container>
            </Carousel.Item>
          </Carousel>
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
              <p className='w-75'>At Furni, our journey began with a vision to revolutionize the way people experience furniture. Founded on principles of innovation, craftsmanship, and unparalleled customer service, we've spent years perfecting our craft to bring you furniture that transcends mere functionality—it becomes a cornerstone of your lifestyle.</p>
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
                <li><a href='/'>Kruzo Aero</a></li>
                <li><a href='/'>Ergonomic Chair</a></li>
              </ul>
            </Col>
          </Row>
          <Row className='p-auto p-sm-5'>
            <Col md>
              <p>Copyright ©2024. All Rights Reserved. — Designed with love by Siya Furni</p>
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

export default Blog