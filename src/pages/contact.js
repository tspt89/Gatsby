import  React  from  "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Row } from "react-bootstrap"

const  ContactPage  =  ()  => (
    <Layout>
        <SEO title="About" />
        <div
            style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
            }}
        >
            <section className="page-section bg-light" style={{
                    padding: `0 1.0875rem 1.45rem`,
                    minHeight: '530px'
                }}>
                <h1 className="text-center uppercase">Contact</h1>

                <div style={{
                    padding: `0 1.0875rem 1.45rem`,
                }}>
                    <Form id="contactForm">
                        <Row>
                            <Col>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First name" id="name" required/>
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" id="last" required />
                            </Col>
                        </Row>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" id="email" placeholder="name@example.com" required/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control placeholder="+52 (222) 123456789" id="cel" required/>
                        </Form.Group>
                        <Button variant="outline-secondary" id="form-submit" type="submit" size="lg" block>
                            Send
                        </Button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                    </Form>
                </div>
            </section>

        </div>
        
    </Layout>
)

export  default  ContactPage