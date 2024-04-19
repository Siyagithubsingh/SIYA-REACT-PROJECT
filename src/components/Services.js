import React, { Component } from 'react'
import { Navbar, Container, Nav, Row, Col, Button, Image, Stack, Carousel, Form } from 'react-bootstrap'

export class Services extends Component {
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
                  <Nav.Link href='/services' className='fw-medium active'>Services</Nav.Link>
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
                  <h1 className='fw-bold'>Services</h1>
                  <p className='text-white-50'>Welcome to Furni, where we offer a comprehensive range of services to enhance your furniture shopping experience. From personalized design consultations to hassle-free delivery and customization options, we're here to cater to your every need. Our expert team is committed to providing exceptional service and guidance throughout your journey, ensuring that you find the perfect furniture pieces to suit your style and lifestyle. Explore our services below to discover how we can help you transform your space with ease.</p>
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
        <Container fluid className='py-5 p-sm-5'>
          <Row className=''>
            <Col xs={6} md={3} className='mb-3'>
              <Image src='images/truck.svg' className='img-fluid' />
              <h6>Fast & Free Shipping</h6>
              <p>At Furni, we not only provide top-quality furniture, but we also offer fast and free shipping to make your shopping experience even more convenient. With our commitment to customer satisfaction, we ensure that your order arrives swiftly and without any additional cost, allowing you to enjoy your new furniture sooner.</p>
            </Col>
            <Col xs={6} md={3} className='mb-3'>
              <Image src='images/bag.svg' className='img-fluid' />
              <h6>Easy to Shop</h6>
              <p>Shopping for furniture has never been easier with Furni. Our user-friendly website and intuitive navigation make finding the perfect piece a breeze. Discover a seamless shopping experience that puts convenience at the forefront.</p>
            </Col>
            <Col xs={6} md={3} className='mb-3'>
              <Image src='images/support.svg' className='img-fluid' />
              <h6>24/7 Support</h6>
              <p>At Furni, we're here for you around the clock with 24/7 support. Whether you have questions about our products, need assistance with an order, or require help with anything else, our dedicated team is always available to provide prompt and helpful assistance. Experience peace of mind knowing that help is just a message or call away, any time of the day or night..</p>
            </Col>
            <Col xs={6} md={3} className='mb-3'>
              <Image src='images/return.svg' className='img-fluid' />
              <h6> Free Returns</h6>
              <p>Enjoy the freedom of hassle-free shopping with complimentary returns at Furni. If you're not completely satisfied with your purchase, simply return it within our easy return window for a full refund. Experience worry-free shopping knowing that your satisfaction is our priority.</p>
            </Col>
          </Row>
          <Row className=''>
            <Col xs={6} md={3} className='mb-3'>
              <Image src='images/return.svg' className='img-fluid' />
              <h6>Refundable</h6>
              <p>We understand that sometimes purchases may not meet your expectations. That's why we offer a hassle-free refund policy. If you're not completely satisfied with your order, simply contact our customer support team within 14-16 days of delivery to initiate a return. Once we receive the returned item in their original condition, we will process a full refund to your original payment method. Your satisfaction is our priority.</p>
            </Col>
            <Col xs={6} md={3} className='mb-3'>
              <Image src='images/support.svg' className='img-fluid' />
              <h6>Customer Care Support</h6>
              <p>Our dedicated team is here to assist you with any questions, concerns, or inquiries you may have. Whether you need help with product information, order assistance, or after-sales support, our friendly and knowledgeable customer care representatives are available to provide prompt assistance. Contact us via phone, email, or live chat, and let us ensure your satisfaction every step of the way.</p>
            </Col>
            <Col xs={6} md={3} className='mb-3'>
              <Image src='images/bag.svg' className='img-fluid' />
              <h6>Satisfaction Guaranteed</h6>
              <p>At Furni, your satisfaction is our top priority. Our dedicated Customer Care Support team is here to ensure that your experience with us exceeds your expectations. Whether you have questions about products, need assistance with your order, or require after-sales support, we're here to help. Reach out to us via phone, email, or live chat, and let us take care of all your needs with our satisfaction guarantee.</p>
            </Col>
            <Col xs={6} md={3} className='mb-3'>
              <Image src='images/truck.svg' className='img-fluid' />
              <h6>Expert Assistance</h6>
              <p>Rely on our Expert Assistance team for personalized support throughout your shopping journey. Our knowledgeable representatives are well-equipped to provide guidance on product selection, customization options, and any other inquiries you may have. With their expertise, you can shop with confidence knowing you're making informed decisions tailored to your needs.</p>
            </Col>
          </Row>
        </Container>
        <Container fluid className='p-4 p-sm-5'>
          <Row className='g-5'>
            <Col lg={3} className='d-flex flex-column justify-content-center'>
              <h2>Crafted with excellent material.</h2>
              <p className='text-black-50'>Crafted with excellent materials, our products epitomize quality and durability. Each piece is meticulously designed and manufactured using premium materials, ensuring longevity and timeless appeal. From sturdy hardwood frames to luxurious upholstery fabrics, every component is carefully selected to uphold our commitment to excellence. Experience the difference of superior craftsmanship and exceptional materials with our meticulously crafted products.</p>
              <Stack direction='horizontal'>
                <Button variant='dark' className='rounded-pill fw-medium' size='lg'>Explore</Button>
              </Stack>
            </Col>
            <Col sm>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-1.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Nordic Chair</h6>
                <h5 className='fw-bold text-black'>₹15000</h5>
              </a>
            </Col>
            <Col sm>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-2.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Kruzo Aero Chair</h6>
                <h5 className='fw-bold text-black'>₹7000</h5>
              </a>
            </Col>
            <Col sm>
              <a href='/dfdg' className='text-decoration-none text-center' >
                <img src='images/product-3.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Ergonomic Chair</h6>
                <h5 className='fw-bold text-black'>₹8635</h5>
              </a>
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
                <h6 className='pt-4'>Maria Jones</h6>
                <p>CCO, Co-off, Furni Inc.</p>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Discover why our customers rave about their experiences with us. From cozy sofas to elegant dining tables, our furniture brings joy to homes across the country. Sarah loves the comfort and craftsmanship of her new sofa set. Michael found the perfect dining table after months of searching, praising its quality and hassle-free delivery. Emily couldn't be happier with her sturdy and elegant bed frame.”</p>
                <Image src='images/siya_2.jpg' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
                <h6 className='pt-4'>Siya Singh</h6>
                <p>CEO, Co-Founder, Furni.</p>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Customers can't get enough of Furni. is thrilled with the exceptional quality and top-notch customer service. Was blown away by the lightning-fast and free shipping. Emily H. can't stop praising the team's dedication and attention to detail. With testimonials like these, it's clear that Furni is the go-to choice for quality furniture and outstanding service.”</p>
                <Image src='images/person_2.jpg' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
                <h6 className='pt-4'>Rohan Singh</h6>
                <p>CCM, Chief off Furni Inc.</p>
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
              <p>Copyright ©2024. All Rights Reserved. — Designed with love by Siya Singh Furni</p>
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

export default Services