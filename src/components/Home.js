import React, { Component } from 'react'
import {Navbar, Container, Nav, Row, Col, Button, Image, Stack, Carousel, Form} from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid className='text-white px-1 px-md-5 py-md-2' style={{backgroundColor: '#3b5d50'}}>
          <Navbar expand='md' variant='dark'>
            <Container fluid>
              <Navbar.Brand href='/' className='text-white'><h1 className='fw-medium'>Furni.</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' className='border-0' style={{color: 'transparent'}}/>
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto' gap={5}>
                  <Nav.Link href='/' className='fw-medium active'>Home</Nav.Link>
                  <Nav.Link href='/shop' className='fw-medium'>Shop</Nav.Link>
                  <Nav.Link href='/about' className='fw-medium'>About</Nav.Link>
                  <Nav.Link href='/services' className='fw-medium'>Services</Nav.Link>
                  <Nav.Link href='/blog' className='fw-medium'>Blog</Nav.Link>
                  <Nav.Link href='/contact' className='fw-medium'>Contact US</Nav.Link>
                  <Nav.Link><Image src='images/user.svg' className='img-fluid' /></Nav.Link>
                  <Nav.Link href='/cart'><Image src='images/cart.svg' className='img-fluid' /></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container fluid>
            <Row>
              <Col lg={5} className='d-flex justify-content-center'>
                <Stack gap={2} className='d-flex justify-content-center' >
                  <h1 className='fw-bold'>Modern Interior Design Studio</h1>
                  <p className='text-white-50'>Step into our Modern Interior Design Studio, where creativity thrives and innovation reigns. We specialize in crafting contemporary living spaces that blend style with functionality, ensuring each design reflects your unique taste and lifestyle. With a dedicated team of talented professionals, we're committed to turning your vision into a reality, creating modern interiors that inspire and delight.</p>
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
        <Container fluid className='p-4 p-sm-5'>
          <Row className='g-5'>
            <Col lg={3} className='d-flex flex-column justify-content-center'>
              <h2>Crafted with excellent material.</h2>
              <p className='text-black-50'>Crafted with excellent materials, our Modern Interior Design Studio ensures every detail reflects quality and durability. From premium fabrics to sustainable finishes, we prioritize the finest materials to bring your vision to life with unparalleled excellence.</p>
              <Stack direction='horizontal'>
                <Button variant='dark' className='rounded-pill fw-medium' size='lg'>Explore</Button>
              </Stack>
            </Col>
            <Col sm>
              <a href='/' className='text-decoration-none text-center' >
                <img src='images/product-1.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Tranquil Rocking Chair</h6>
                <h5 className='fw-bold text-black'>₹5000</h5>
              </a>
            </Col>
            <Col sm>
              <a href='/' className='text-decoration-none text-center' >
                <img src='images/product-2.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Harmony Armchair</h6>
                <h5 className='fw-bold text-black'>₹15000</h5>
              </a>
            </Col>
            <Col sm>
              <a href='/' className='text-decoration-none text-center' >
                <img src='images/product-3.png' alt="" className='img-fluid' align='middle' />
                <h6 className='text-dark'>Aurora Loveseat</h6>
                <h5 className='fw-bold text-black'>₹3000</h5>
              </a>
            </Col>
          </Row>
        </Container>
        <Container fluid className=''>
          <Row className='p-2 p-md-5'>
            <Col className='py-5'>
              <Row className='pb-5'>
                <h2 className='display-6 fw-medium'>Why Choose US</h2>
                <p>Selecting us means choosing unparalleled quality, personalized designs, and dedicated customer service. With a commitment to innovation and sustainability, we strive to exceed expectations while minimizing environmental impact. Our trusted reputation speaks for itself, ensuring your confidence in our ability to deliver excellence every step of the way</p>
              </Row>
              <Row className=''>
                <Col className='mb-3'>
                  <Image src='images/truck.svg' className='img-fluid' />
                  <h6>Fast & Free Shipping</h6>
                  <p>Experience the convenience of fast and free shipping when you choose us. With our commitment to prompt delivery and no additional cost for shipping, you can enjoy your new furniture sooner, hassle-free.</p>
                </Col>
                <Col className='mb-3'>
                  <Image src='images/bag.svg' className='img-fluid' />
                  <h6>Easy to Shop</h6>
                  <p>Shopping with us is a breeze. Our intuitive website and user-friendly interface make finding and purchasing your perfect furniture effortless. Enjoy a seamless shopping experience from start to finish.</p>
                </Col>
              </Row>
              <Row className=''>
                <Col className='mb-3'>
                  <Image src='images/support.svg' className='img-fluid' />
                  <h6>24/7 Support</h6>
                  <p>Gain peace of mind with our round-the-clock support. Our dedicated team is available 24/7 to assist you with any inquiries, ensuring you receive the help you need whenever you need it.</p>
                </Col>
                <Col className='mb-3'>
                  <Image src='images/return.svg' className='img-fluid' />
                  <h6>Free Returns</h6>
                  <p>Enjoy the freedom of hassle-free returns with us. If you're not completely satisfied with your purchase, simply return it free of charge for a full refund or exchange. Your satisfaction is our priority.</p>
                </Col>
              </Row>
            </Col>
            <Col lg className='d-flex justify-content-center align-items-center'>
              <Image src='images/why-choose-us-img.jpg' className='img-fluid rounded-5'/>
            </Col>
          </Row>
        </Container>
        <Container fluid className='p-auto p-md-5'>
          <Row>
            <Col className='py-5 p-md-3'>
              <Image src='images/img-grid-1.jpg' className='img-fluid rounded-5' />
            </Col>
            <Col lg className='d-flex flex-column justify-content-center'>
              <h2 className='display-6 fw-medium mb-3'>We Help You Make Modern Interior Design</h2>
              <p className='text-black-50'>We're here to guide you through crafting modern interior design. With our expertise and curated selection, we empower you to create spaces that seamlessly blend contemporary style with functionality, making your vision a reality.</p>
              <ul className='custom-list list-unstyled text-black-50 py-2'>
                <li>Expert Guidance: Our team of experienced designers provides personalized advice and recommendations to help you achieve your desired modern interior design aesthetic.</li>
                <li>Curated Selection: Explore our carefully curated collection of modern furniture and decor, handpicked to complement a contemporary design theme.And awesome product with offers. </li>
                <li>Functional Solutions: We prioritize functionality in our designs, offering furniture and accessories that not only look stylish but also serve a practical purpose in your space.</li>
                <li>Customization Options: Tailor your modern interior with customizable furniture pieces, allowing you to add unique touches and personalize your design to suit your preferences.</li>
              </ul>
              <Stack direction='horizontal'>
                <Button variant='dark' className='fw-medium rounded-pill px-4' size='lg'>Explore</Button>
              </Stack>
            </Col>
          </Row>
        </Container>
        <Container fluid className='anchor p-5'>
          <Row>
            <Col md className='py-5'>
              <Row>
                <Col className='d-flex justify-content-center align-items-center'>
                  <Image src='images/product-1.png' className='img-fluid rounded-5' style={{ backgroundColor: '#dce5e4' }} />
                </Col>
                <Col xs={8}>
                  <h6 className='fw-bold'>Tranquil Rocking Chair</h6>
                  <p>The Tranquil Rocking Chair offers unparalleled comfort and relaxation. With its sleek design and gentle rocking motion</p>
                  <a href='/' >Read More</a>
                </Col>
              </Row>
            </Col>
            <Col md className='py-5'>
              <Row>
                <Col className='d-flex justify-content-center align-items-center'>
                  <Image src='images/product-2.png' className='img-fluid rounded-5' style={{ backgroundColor: '#dce5e4' }} />
                </Col>
                <Col xs={8}>
                  <h6 className='fw-bold'>Harmony ArmChair</h6>
                  <p>The Harmony Armchair is a modern masterpiece, blending contemporary elegance with unparalleled comfort</p>
                  <a href='/'>Read More</a>
                </Col>
              </Row>
            </Col>
            <Col md className='py-5'>
              <Row>
                <Col className='d-flex justify-content-center align-items-center'>
                  <Image src='images/product-3.png' className='img-fluid rounded-5' style={{ backgroundColor: '#dce5e4' }} />
                </Col>
                <Col xs={8}>
                  <h6 className='fw-bold'>Aurora Loveseat </h6>
                  <p>Crafted with precision and attention to detail, this armchair is not just a piece of furniture but a statement of style and comfort</p>
                  <a href='/' >Read More</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <h1 className='display-6 text-center fw-normal pt-5'>Testimonials</h1>
          <Carousel data-bs-theme='dark' className='p-5'>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{fontSize: '20px', width: '75%'}}>“Absolutely love my Harmony Armchair! It's not just a piece of furniture; it's become my favorite spot to relax after a long day. The sleek design adds a touch of elegance to my living room, and the comfort level is unmatched. Couldn't be happier with my purchase.”</p>
                <Image src='images/person-1.png' fluid roundedCircle style={{width: '75px', height: '100%'}} />
                <h6 className='pt-4'>Sneha </h6>
                <p>CCO, Founder, Furni Inc.</p>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“"Ever since I brought home the Zenith Lounge Chair, relaxation has taken on a whole new meaning. Its contemporary design blends seamlessly with my décor, and the comfort it provides is simply unmatched. Whether I'm enjoying a morning coffee or curling up with a book in the evening, this chair is my go-to spot for unwinding. I couldn't be happier with my purchase.”</p>
                <Image src='images/person_1.jpg' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
                <h6 className='pt-4'>Manit Mittal</h6>
                <p>CCM, Co-off, Furni Inc.</p>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“The Serenity Sofa has exceeded all my expectations. Its sleek and modern design instantly elevates my living room, while the plush cushions ensure a level of comfort that's unparalleled. Whether I'm hosting guests or simply lounging on a lazy Sunday afternoon, this sofa is the perfect centerpiece for both style and relaxation. Thank you for providing such an exceptional piece of furniture”</p>
                <Image src='images/person_3.jpg' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
                <h6 className='pt-4'>Anmol Kumar</h6>
                <p>CMO, Cheif-off, Furni Inc.</p>
              </Container>
            </Carousel.Item>
          </Carousel>
        </Container>
        <Container>
          <Row className='py-4'>
            <Col>
              <h1>Recent Blogs</h1>
            </Col>
            <Col className='text-end'>
              <a href='/' >View all Posts</a>
            </Col>
          </Row>
          <Row>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-1.jpg' className='rounded-4'  fluid/>
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>First Time Home Owner Ideas</h6>
                <p className='text-dark'>by Siya Singh on Jan 19, 2024</p>
              </Container>
            </Col>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-2.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>How To Keep Your Furniture Clean</h6>
                <p className="text-dark">by Anmol Kumar on Feb 21, 2024</p>
              </Container>
            </Col>
            <Col sm className='p-5 p-sm-2'>
              <a href='/'>
                <Image src='images/post-3.jpg' className='rounded-4' fluid />
              </a>
              <Container className='p-3'>
                <h6 className='fw-bold'>Small Space Furniture Apartment Ideas</h6>
                <p className='text-dark'>by Rohan Singh on Mar 12, 2024</p>
              </Container>
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
                <Button variant="primary" type='submit' className='px-4 border-0' size='lg' style={{ backgroundColor: '#3b5d50'}}><span class="fa fa-paper-plane"></span></Button>
              </Form>
            </Col>
            <Col className='d-flex flex-column justify-align-center align-items-end'>
              <Image src='images/sofa.png' fluid style={{width: '400px', height: 'auto'}}/>
            </Col>
          </Row>
          <Row className='border-bottom p-auto p-sm-5'>
            <Col lg={4} className='pb-5'>
              <h3>Furni.</h3>
              <p className='w-75'>At Furni, we're not just in the business of furniture; we're in the business of transforming living spaces into havens of comfort and style. With a commitment to quality craftsmanship and innovative design, we pride ourselves on offering an extensive range of furniture pieces that cater to every taste and lifestyle.</p>
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
                <li><a href='/'>Maintenance</a></li>
                <li><a href='/'>FeedBack</a></li>
                <li><a href='/'>suggestion</a></li>
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


export default Home