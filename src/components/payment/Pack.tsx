import React from "react";
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle, Col } from "react-bootstrap";

export default function Pack({pack}) {
    return (
        <Col>
            <Card
            style={{ width: '18rem' }}
            bg="light">
                <CardBody>
                    <CardImg variant="top" src="/img/paymentPictures/pay1.png"></CardImg>
                    <CardTitle>{pack.name}</CardTitle>
                    <CardText>Incluye</CardText>
                    <ul>
                    {
                        pack.rewards.map((reward) => {
                            return <li><CardText>{reward}</CardText></li>
                        })
                    }
                    </ul>

                    <CardFooter><strong>{pack.price} € / mes</strong></CardFooter>
                    <Button variant="secondary" className="mt-4">UNIRSE</Button>
                </CardBody>
            </Card>
        </Col>
    );
};
