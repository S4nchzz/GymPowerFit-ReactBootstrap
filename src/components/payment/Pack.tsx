import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle, Col } from "react-bootstrap";
import { TextField } from "@mui/material";

export default function Pack({pack}) {
    const [showModal, setShowModal] = useState(false)
    const [subscribed, setSubscribed] = useState(false)

    const [fieldA, setFieldA] = useState('');
    const [fieldB, setFieldB] = useState('');

    function checkAndSubscribe() {
        if (fieldA !== "" && fieldB !== "") {
            setSubscribed(true)
        } else {
            alert("Rellene todos los campos antes de suscribirse.")
        }
    }

    return (
        <>
            <Col>
                <Card
                style={{ width: '18rem' }}
                bg="light">
                    <CardBody>
                        <CardImg variant="top" src={`/img/paymentPictures/${pack.image}`} style={{borderRadius: '10px'}} className="mb-4"></CardImg>
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
                        <Button onClick={() => setShowModal(true)} variant="secondary" className="mt-4">UNIRSE</Button>
                    </CardBody>
                </Card>
            </Col>

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered>
                <Modal.Header style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>{pack.name}</h1>
                </Modal.Header>

                <Modal.Body>
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        <img
                            src={`/img/paymentPictures/${pack.image}`}
                            alt="imagen_cuota"
                            className="mb-4"
                            />

                        {
                            
                            !subscribed ? (
                                <>

                                    <label style={{ fontWeight: "bold" }}>Nombre</label>
                                    <input
                                    type="text"
                                    placeholder="Introduce tu nombre"
                                    style={{
                                        width: "100%",
                                        padding: "8px",
                                        margin: "5px 0",
                                        borderRadius: "5px",
                                        border: "1px solid #ccc",
                                    }}

                                    onChange={(e) => setFieldA(e.target.value)}
                                    />

                                    <label style={{ fontWeight: "bold" }}>Pulsera</label>
                                    <input
                                        type="text"
                                        placeholder="Introduce tu numero de pulsera"
                                        style={{
                                        width: "100%",
                                        padding: "8px",
                                        margin: "5px 0",
                                        borderRadius: "5px",
                                        border: "1px solid #ccc",
                                    }}

                                    onChange={(e) => setFieldB(e.target.value)}
                                    />

                                    <div style={{display: 'flex', justifyContent: 'center'}} className="mt-4">
                                        <Button className="w-50" onClick={() => checkAndSubscribe()}>Suscribirse</Button>
                                    </div>
                                </>
                            ) : (
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <h2 style={{color: '#7a7a7a'}}>Suscripcion correcta</h2>
                                    <Button className="w-50" onClick={() => setShowModal(false)}>Volver</Button>
                                </div>
                            )
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
