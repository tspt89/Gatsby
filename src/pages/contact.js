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
            <section className="page-section bg-light">
                <h1 className="text-center uppercase">Contact</h1>

                <div style={{
                    padding: `0 1.0875rem 1.45rem`,
                }}>
                    <Form >
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
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control placeholder="+52 (222) 123456789" />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Send
                        </Button>
                    </Form>
                </div>
            </section>

        </div>
        
    </Layout>
)

export  default  ContactPage