import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Button, Container } from "react-bootstrap"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="masthead" expand-lg="true">
            <Container>
                <div className="masthead-subheading">Welcome!</div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-secondary btn-xl text-uppercase js-scroll-trigger" href="/about">About</a>
            </Container>
    </header>
      
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <section className="page-section bg-light">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading">Eventos</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                    <CardDeck>
                        <Card>
                          <Card.Img variant="top" src="https://www.masquenegocio.com/wp-content/uploads/2018/03/evento-concierto-874x492.jpg" />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/ICm67XiI980bo28u6VrSubPbrnfC_PHp0nkIjqMBOqBDyUOceVVBPdyWo8qg8iiYXfN2rIlEJgRuOH_jiEdsFFCVEBVF0iPm3mi_r7TO5PQIz84b1Wuiy5ZrhUGy2PLMd_LyhBwLZbiMevw" />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This card has supporting text below as a natural lead-in to additional
                              content.{' '}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src="https://andro4all.com/files/2020/03/evento-cancelado.jpg" />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This card has even longer content than the first to
                              show that equal height action.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </Card.Footer>
                        </Card>
                      </CardDeck> 
              </div>
        </section>
    </div>
  </Layout>
)

export default IndexPage
