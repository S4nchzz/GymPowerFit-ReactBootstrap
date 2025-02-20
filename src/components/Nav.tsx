import React, { useState } from "react";
import { Col, Container, Modal, ModalBody, Navbar, NavbarCollapse, NavDropdown, NavItem, NavLink, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import PersonIcon from '@mui/icons-material/Person';
import { Button, TextField } from "@mui/material";
import "./css/Nav.css"
import { Link } from "react-router";

export default function TopNav() {
    const [show, setShow] = useState(false);

    const handleMenu = (event) => {
        switch(event) {
            case "home" :
                console.log("Home clicked");
                break;
            case "courses" :
                console.log("Courses clicked");
                break;
            case "machinary" :
                console.log("Machinary clicked");
                break;
            case "payment" :
                console.log("Payment clicked");
                break;
            case "reserves" :
                console.log("Reserves clicked");
                break;
            case "contact" :
                console.log("Contact clicked");
                break;
            case "profile": 
                setShow(!show)
                break;
            default:
                break;
        }
    }

    const loginButton = () => {
       alert("Sesion iniciada")
    }

    return(
        <Navbar bg="dark" data-bs-theme="dark" className="p-4">
            <Container fluid>
                <Navbar.Brand>
                    <img
                    src="/img/nav/logo.png"
                    width="100"
                    alt="Logo PowerFit"
                    className="logoPicture"></img>
                </Navbar.Brand>
                <NavbarCollapse className="justify-content-end" style={{fontSize: '1.2rem'}}>
                <Nav
                onSelect={handleMenu}
                variant="underline">

                    <NavItem>
                        <NavLink as={Link} to="/">Home</NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink as={Link} to="/services">Servicios</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink as={Link} to="/payment">Cuotas</NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink as={Link} to="">Contacto</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink eventKey={"profile"}>
                            <PersonIcon /> Profile
                        </NavLink>
                    </NavItem>
                </Nav>
                </NavbarCollapse>

                <Modal
                show={show}
                onHide={() => setShow(false)}
                centered
                size="lg"
                className="custom-modal">
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col md={6} className="mt-5 mb-5">
                                    <div className="overwriteContainerPos mt-4">
                                    <h1 style={{ color: 'white'}}>Log in</h1>

                                    <TextField
                                        id="standard-basic"
                                        label="Username"
                                        variant="standard"
                                        InputLabelProps={{
                                            sx: {
                                            color: "grey", // Color cuando el campo no está enfocado
                                            "&.Mui-focused": {
                                                color: "grey", // Color cuando el campo está enfocado
                                            },
                                            },
                                        }}
                                        sx={{
                                            "& .MuiInputBase-input": {
                                            color: "white", 
                                            },
                                            "& .MuiInput-underline:before": {
                                            borderBottomColor: "grey", 
                                            },
                                            "& .MuiInput-underline:after": {
                                            borderBottomColor: "grey", 
                                            },
                                        }}
                                        />

                                        <TextField 
                                        id="standard-basic"
                                        label="Password" 
                                        variant="standard" 
                                        type="password"
                                        InputLabelProps={{
                                            sx: {
                                            color: "grey", // Color cuando el campo no está enfocado
                                            "&.Mui-focused": {
                                                color: "grey", // Color cuando el campo está enfocado
                                            },
                                            },
                                        }}
                                        sx={{
                                            "& .MuiInputBase-input": {
                                            color: "white", 
                                            },
                                            "& .MuiInput-underline:before": {
                                            borderBottomColor: "grey", 
                                            },
                                            "& .MuiInput-underline:after": {
                                            borderBottomColor: "grey", 
                                            },
                                        }}
                                        />

                                        <Container className="mt-3">
                                            <Button variant="outlined" className="separateButtons" onClick={() => loginButton()}>SING UP</Button>
                                            <Button variant="contained" className="separateButtons" onClick={() => loginButton()}>LOG IN</Button>
                                        </Container>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <img src="/img/modal/manPosing.png" alt="Hombre posando" className="customImageRender"></img>
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                </Modal>
            </Container>
        </Navbar>
    );
};