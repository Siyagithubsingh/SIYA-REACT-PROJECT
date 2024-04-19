import React, { Component } from 'react'
import { Navbar, Container, Nav, Row, Col, Button, Image, Stack, Form, Table, InputGroup } from 'react-bootstrap'

export class Cart extends Component {
  constructor() {
    super()
    this.state = { message: 2, message1: 3 }
  }

  changeMessageincre() {
    this.setState({
      message: this.state.message + 1
    })
  }
  changeMessagedecre() {
    if (this.state.message > 0) {
      this.setState({
        message: this.state.message - 1
      })
    }
  }

  changeMessageincre1() {
    this.setState({
      message1: this.state.message1 + 1
    })
  }
  changeMessagedecre1() {
    if (this.state.message1 > 0) {
      this.setState({
        message1: this.state.message1 - 1
      })
    }
  }
  
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
                  <Nav.Link href='/blog' className='fw-medium'>Blog</Nav.Link>
                  <Nav.Link href='/contact' className='fw-medium'>Contact US</Nav.Link>
                  <Nav.Link><Image src='images/user.svg' className='img-fluid' /></Nav.Link>
                  <Nav.Link href='/cart' className='active'><Image src='images/cart.svg' className='img-fluid' /></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container fluid>
            <Row>
              <Col lg={5} className='d-flex justify-content-center'>
                <Stack gap={2} className='d-flex justify-content-center' >
                  <h1 className='fw-bold'>Cart</h1>
                  <p className='text-white-50'> Ready to bring your dream space to life? Review and finalize your selections in your shopping cart. Ensure you have everything you need before proceeding to checkout. Need to make changes? No problem – easily adjust quantities or remove items as needed. Once you're satisfied, proceed to checkout to complete your purchase securely and effortlessly. Happy shopping.</p>
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
        <Container className='py-5 text-center border-bottom'>
          <Table responsive className='align-middle table-light' style={{ backgroundColor: 'black' }}>
            <thead className='h5'>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className='table-group-divider h6'>
              <tr>
                <td><Image src='images/product-1.png' fluid style={{width: '150px'}}/></td>
                <td>Product 1</td>
                <td>₹17000</td>
                <td>
                  <Container className='d-flex justify-content-center'>
                    <Button variant='white' className='border-0' onClick={() => this.changeMessagedecre()}>-</Button>
                    <Form.Control type="text" className='rounded-0' value={this.state.message} style={{ width: '40px' }} />
                    <Button variant='white' className='border-0' onClick={() => this.changeMessageincre()}>+</Button>
                  </Container>
                </td>
                <td>₹17200</td>
                <td>X</td>
              </tr>
              <tr>
                <td><Image src='images/product-2.png' fluid style={{ width: '150px' }} /></td>
                <td>Product 2</td>
                <td>₹13000</td>
                <td>
                  <Container className='d-flex justify-content-center'>
                    <Button variant='white' className='border-0' onClick={() => this.changeMessagedecre1()}>-</Button>
                    <Form.Control type="text" className='rounded-0' value={this.state.message1} style={{ width: '40px' }} />
                    <Button variant='white' className='border-0' onClick={() => this.changeMessageincre1()}>+</Button>
                  </Container>
                </td>
                <td>₹16200</td>
                <td>X</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container className='py-5'>
          <Row>
            <Col>
              <Row className='py-5'>
                <Col>
                  <Button variant='dark' className='rounded-pill' size='lg' >Update Cart</Button>
                </Col>
                <Col xs={7}>
                  <Button variant='dark' className='rounded-pill' size='lg' >Continue Shopping</Button>
                </Col>
              </Row>
              <Row sm>
                <Col>
                  <h4>Coupon</h4>
                  <p>Enter your coupon code if you have one.</p>
                  <InputGroup>
                    <Form.Control type='text' className='me-5 rounded-2' placeholder='Coupon Code' />
                    <Button variant='dark' className='rounded-pill' size='lg'>Apply Coupon</Button>
                  </InputGroup>
                </Col>
              </Row>
            </Col>
            <Col md={4} className='p-5'>
              <Row className='border-bottom'>
                <h3>CART TOTALS</h3>
              </Row>
              <Row className='pt-4'>
                <Col><p className='text-black'>Subtotal</p></Col>
                <Col><p className='fw-bold text-black'>₹1300050.400</p></Col>
              </Row>
              <Row>
                <Col><p className='text-black'>Total</p></Col>
                <Col><p className='fw-bold text-black'>₹1300050.400</p></Col>
              </Row>
              <Row>
                <Button variant='dark rounded-pill fw-bold' href='/checkout' size='lg'>Procced To Checkout</Button>
              </Row>
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

export default Cart