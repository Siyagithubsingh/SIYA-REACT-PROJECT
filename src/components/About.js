import React from 'react'
import { Navbar, Container, Nav, Row, Col, Button, Image, Stack, Carousel, Form } from 'react-bootstrap'

function About() {
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
                <Nav.Link href='/about' className='fw-medium active'>About</Nav.Link>
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
                <h1 className='fw-bold'>About Us</h1>
                <p className='text-white-50'>At Furni, we believe that every home deserves to be a sanctuary—a place where comfort, style, and functionality seamlessly blend. Our journey began with a passion for beautifully crafted furniture that transforms spaces and enhances lives.</p>
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
      <Container fluid className=''>
        <Row className='p-2 p-md-5'>
          <Col className='py-5'>
            <Row className='pb-5'>
              <h2 className='display-6 fw-medium'>Why Choose US</h2>
              <p className='text-black-50'>At Furni, we stand out for our commitment to exceptional quality, diverse selection, and personalized service. With a focus on craftsmanship and durability, our furniture ensures long-lasting satisfaction. Our team is dedicated to assisting you every step of the way, from selecting the perfect piece to seamless delivery and assembly. Plus, we offer competitive pricing without compromising on style. Experience the difference with Furni, where your satisfaction is guaranteed.</p>
            </Row>
            <Row className=''>
              <Col className='mb-3'>
                <Image src='images/truck.svg' className='img-fluid' />
                <h6>Fast & Free Shipping</h6>
                <p className='text-black-50'> At Furni, we not only provide top-quality furniture, but we also offer fast and free shipping to make your shopping experience even more convenient. With our commitment to customer satisfaction, we ensure that your order arrives swiftly and without any additional cost, allowing you to enjoy your new furniture sooner. </p>
              </Col>
              <Col className='mb-3'>
                <Image src='images/bag.svg' className='img-fluid' />
                <h6>Easy to Shop</h6>
                <p className='text-black-50'>Shopping for furniture has never been easier with Furni. Our user-friendly website and intuitive navigation make finding the perfect piece a breeze. Discover a seamless shopping experience that puts convenience at the forefront.</p>
              </Col>
            </Row>
            <Row className=''>
              <Col className='mb-3'>
                <Image src='images/support.svg' className='img-fluid' />
                <h6>24/7 Support</h6>
                <p className='text-black-50'>At Furni, we're here for you around the clock with 24/7 support. Whether you have questions about our products, need assistance with an order, or require help with anything else, our dedicated team is always available to provide prompt and helpful assistance. Experience peace of mind knowing that help is just a message or call away, any time of the day or night.</p>
              </Col>
              <Col className='mb-3'>
                <Image src='images/return.svg' className='img-fluid' />
                <h6> Free Returns</h6>
                <p className='text-black-50'>Enjoy the freedom of hassle-free shopping with complimentary returns at Furni. If you're not completely satisfied with your purchase, simply return it within our easy return window for a full refund. Experience worry-free shopping knowing that your satisfaction is our priority.</p>
              </Col>
            </Row>
          </Col>
          <Col lg className='d-flex justify-content-center align-items-center'>
            <Image src='images/why-choose-us-img.jpg' className='img-fluid rounded-5' />
          </Col>
        </Row>
      </Container>
      <Container fluid className='p-5'>
        <h3 className='text-center fw-medium py-5'>Our Team</h3>
        <Row>
          <Col sm={6} lg={3} className='pb-5 p-sm-auto' >
            <Image src='images/siya_1.jpg' fluid className='mb-4'/>
            <a href='/' className='h3'>Siya singh</a>
            <p> Chief Executive Officer (CEO) Founder.</p>
            <p>
Meet Furni's co-founder, Siya Singh, the visionary behind our commitment to quality and innovation. With a passion for design, Siya Singh has played a key role in shaping our brand's success.</p>
            <a href='/' className='text-black'>Learn More</a>
          </Col>
          <Col sm={6} lg={3} className='pb-5 p-sm-auto' >
            <Image src='images/person_2.jpg' fluid className='mb-4' />
            <a href='/' className='h3'>Manit Mittal</a>
            <p>Chief Operating Officer (COO)</p>
            <p>The Chief Operating Officer (COO) is responsible for overseeing the day-to-day operations of the company. They ensure that the organization's processes are efficient and effective.</p>
            <a href='/' className='text-black'>Learn More</a>
          </Col>
          <Col sm={6} lg={3} className='pb-5 p-sm-auto' >
            <Image src='images/person_3.jpg' fluid className='mb-4' />
            <a href='/' className='h3'>Rahul Kumar</a>
            <p>Chief Technology Officer (CTO) </p>
            <p>The Chief Technology Officer (CTO) or Chief Information Officer (CIO) is responsible for the company's technology strategy and infrastructure. They oversee the development and implementation of technology solutions.</p>
            <a href='/' className='text-black'>Learn More</a>
          </Col>
          <Col sm={6} lg={3} className='pb-5 p-sm-auto' >
            <Image src='images/person_4.jpg' fluid className='mb-4' />
            <a href='/' className='h3'>suhana singh</a>
            <p>Chief Marketing Officer (CMO)</p>
            <p>The Chief Marketing Officer (CMO) leads the company's marketing efforts, including branding, advertising, and market research. They develop marketing strategies to promote the company's products or services.</p>
            <a href='/' className='text-black'>Learn More</a>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <h1 className='display-6 text-center fw-normal pt-5'>Testimonials</h1>
        <Carousel data-bs-theme='dark' className='p-5'>
          <Carousel.Item>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
              <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Customers love Furni Sarah M. raves about the exceptional quality and top-notch customer service. John D. was impressed by the lightning-fast and free shipping. Emily H. praises the team's dedication and attention to detail. These testimonials speak volumes about Furni's commitment to excellence and customer satisfaction.”</p>
              <Image src='images/siya_1.jpg' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
              <h6 className='pt-4'>Siya Singh</h6>
              <p>CEO, Co-Founder, Furni.</p>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
              <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Customers can't get enough of Furni. is thrilled with the exceptional quality and top-notch customer service. Was blown away by the lightning-fast and free shipping. Emily H. can't stop praising the team's dedication and attention to detail. With testimonials like these, it's clear that Furni is the go-to choice for quality furniture and outstanding service.”</p>
              <Image src='images/siya_2.jpg' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
              <h6 className='pt-4'>Siya Singh</h6>
              <p>CEO, Co-Founder, Furni.</p>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
              <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Discover why our customers rave about their experiences with us. From cozy sofas to elegant dining tables, our furniture brings joy to homes across the country. Sarah loves the comfort and craftsmanship of her new sofa set. Michael found the perfect dining table after months of searching, praising its quality and hassle-free delivery. Emily couldn't be happier with her sturdy and elegant bed frame.”</p>
              <Image src='images/person-1.png' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
              <h6 className='pt-4'>Suhana singh</h6>
              <p>CMO, Chief Marketing Officer, Furni .</p>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container fluid className='bg-white anchor'>
        <Row className='p-auto py-5 p-sm-5'>
          <Col className='d-flex flex-column justify-content-end'>
            <h4><span class="me-1"><Image src="images/envelope-outline.svg" alt="Image" class="img-fluid" /></span><span>Subscribe for  Exclusive Insights </span></h4>
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
              <li><a href='/'>Returns & Exchanges</a></li>
              <li><a href='/'>Warranty Information</a></li>
              <li><a href='/'>Customization Services</a></li>
            </ul>
          </Col>
        </Row>
        <Row className='p-auto p-sm-5'>
          <Col md>
            <p>Copyright © 2023. All Rights Reserved. Crafted with passion by company Furni  Siya Singh (CEO). </p>
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

export default About