import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {Card, CardColumns } from "react-bootstrap";
import Countdown from 'react-countdown';

const Events = () => {
    const data = useStaticQuery(graphql`
        {
            Events: allAirtable(sort: {fields: data___Date, order: ASC}) {
                edges {
                    node {
                        data {
                            Date(formatString: "MMM DD, YYYY")
                            Description
                            Event_name
                            Graphics {
                                url
                            }
                        }
                    }
                }
            }
        }
    `);

    return(
        <CardColumns>
            {data.Events.edges.map((item, i) => (
            <Card>
                <Card.Img variant="top" src={item.node.data.Graphics[0].url} />
                <Card.Body>
                    <Card.Title>{item.node.data.Event_name}</Card.Title>
                    <Card.Text>
                    {item.node.data.Description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">
                    {item.node.data.Date} <br/>
                    <Countdown date={item.node.data.Date}/>
                    </small>
                </Card.Footer>
            </Card>
        ))}
        </CardColumns> 
    );
};

export default Events
