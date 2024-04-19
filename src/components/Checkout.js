import React, { Component } from 'react'
import { Navbar, Container, Nav, Row, Col, Button, Image, Stack, Table, Form, InputGroup, Accordion } from 'react-bootstrap'

export class Checkout extends Component {
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
                  <Nav.Link href='/cart'><Image src='images/cart.svg' className='img-fluid' /></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container fluid>
            <Row>
              <Col lg={5} className='d-flex justify-content-center'>
                <Stack gap={2} className='d-flex justify-content-center' >
                  <h1 className='fw-bold'>Checkout</h1>
                  <p className='text-white-50'> Ready to complete your purchase? Head to our secure checkout page to finalize your order quickly and easily. With multiple payment options available and encrypted checkout technology, you can shop with confidence knowing that your information is safe and your transaction is secure. Review your items, enter your shipping and payment details, and voilà – your new furniture will be on its way to you in no time. Shop now and complete your checkout with ease.</p>
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
        <Container>
          <Row className='py-5'>
            <p>Returning customer? <span><a href='/'>Click here</a></span> to login</p>
          </Row>
          <Row className='py-5'>
            <Col>
              <h3>Billing Details</h3>
              <Form className='bg-white p-5'>
                <Form.Label>Country</Form.Label>
                <Form.Select>
                  <option>India</option>
                  <option>Europe</option>
                  <option>Canada</option>
                  <option>UAE</option>
                  <option>USA</option>
                </Form.Select>
                <Row>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
                <Form.Label>Company Name</Form.Label>
                <Form.Control type='text' />
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' placeholder='Street address' />
                <Form.Control type='text' placeholder='Apartment, suite, unit etc. (optional)' />
                <Row>
                  <Col>
                    <Form.Label>State / Country</Form.Label>
                    <Form.Control type='text' />
                  </Col>
                  <Col>
                    <Form.Label>Postal / Zip</Form.Label>
                    <Form.Control type='tel' />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' />
                  </Col>
                  <Col>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type='tel' />
                  </Col>
                </Row>
                <Form.Check type="checkbox" id="checkbox-1" label="Create an account?" />
                <Form.Check type="checkbox" id="checkbox-2" label="Ship To a Different Address?" />
                <Form.Label>Order Notes</Form.Label>
                <Form.Control as='textarea' />
              </Form>
            </Col>
            <Col>
              <h3>Coupon Code</h3>
              <Form className='bg-white p-5'>
                <h6>Enter your coupon code if you have one</h6>
                <InputGroup>
                  <Form.Control type='text' placeholder='Coupon Code' className='rounded-3 me-5'/>
                  <Button variant='dark' className='rounded-pill me-5' size='lg'>Apply</Button>
                </InputGroup>
              </Form>
              <h3>Your Order</h3>
              <Form className='bg-white p-5'>
                <Table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody className='table-group-divider'>
                    <tr>
                      <td>Product 1 <span className='fw-bold'>x</span> 2</td>
                      <td>₹19000</td>
                    </tr>
                    <tr>
                      <td>Product 2 <span className='fw-bold'>x</span> 3</td>
                      <td>₹12000</td>
                    </tr>
                    <tr>
                      <td className='fw-bold'>Cart Subtotal</td>
                      <td>₹7200</td>
                    </tr>
                    <tr>
                      <td className='fw-bold'>Order Total</td>
                      <td className='fw-bold'>₹38200</td>
                    </tr>
                  </tbody>
                </Table>
                <Accordion className='py-4'>
                  <Accordion.Item eventKey="0" className='rounded-0 mb-3'>
                    <Accordion.Header>Direct Bank Transfer</Accordion.Header>
                    <Accordion.Body>
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='rounded-0 mb-3 border-top'>
                    <Accordion.Header>Cheque Payment</Accordion.Header>
                    <Accordion.Body>
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order wont be shipped until the funds have cleared in our account.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='rounded-0 mb-3  border-top'>
                    <Accordion.Header>Paypal</Accordion.Header>
                    <Accordion.Body>
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order wont be shipped until the funds have cleared in our account.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              <Button variant='dark' size='lg' className='rounded-pill fw-bold'>Place Order</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Checkout