import React, { useState } from "react";
import { Col, Container, Modal, ModalBody, ModalHeader, Navbar, NavbarCollapse, NavDropdown, NavItem, NavLink, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import PersonIcon from '@mui/icons-material/Person';
import { Button, TextField } from "@mui/material";

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
            case "fees" :
                console.log("Fees clicked");
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
                        <NavLink eventKey={"home"}>Home</NavLink>
                    </NavItem>
                    
                    <NavDropdown title="Servicos" id="nav-dropdown">
                        <NavDropdown.Item eventKey={"courses"}>Cursos</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item eventKey={"machinary"}>Maquinas</NavDropdown.Item>
                    </NavDropdown>

                    <NavItem>
                        <NavLink eventKey={"fees"} >Cuotas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={"reserves"}>Reservas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={"contact"}>Contacto</NavLink>
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
                size="lg">
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col md={6} className="mt-5 mb-5">
                                    <div className="overwriteContainerPos mt-4">
                                    <h1>Log in</h1>

                                        <TextField id="standard-basic" label="Username" variant="standard" />
                                        <TextField id="standard-basic" label="Password" variant="standard" type="password" />

                                        <Container className="mt-3">
                                            <Button variant="outlined" className="separateButtons">SING UP</Button>
                                            <Button variant="contained" className="separateButtons">LOG IN</Button>
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
