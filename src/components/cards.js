import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Button, Card, CardColumns } from "react-bootstrap";

const Cards = () => {
    const data = useStaticQuery(graphql`
        {
            Events: allAirtable(sort: {fields: data___Date, order: ASC}, limit: 6) {
                edges {
                    node {
                        data {
                            Date
                            Description
                            Event_name
                            Graphics {
                                thumbnails {
                                    full {
                                    url
                                    }
                                }
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
                <Card.Img variant="top" src="https://andro4all.com/files/2020/03/evento-cancelado.jpg" />
                <Card.Body>
                    <Card.Title>{item.node.data.Event_name}</Card.Title>
                    <Card.Text>
                    {item.node.data.Description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{item.node.data.Date}</small>
                </Card.Footer>
            </Card>
        ))}
        </CardColumns> 
        //<pre>{JSON.stringify(data, null, 4)}</pre>
        //<pre>{data.Events.edges[0].node.data.Event_name}</pre>
    );
};

export default Cards

