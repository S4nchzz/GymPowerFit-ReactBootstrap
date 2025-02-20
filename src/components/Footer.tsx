import React from "react"
import { Container, Row } from "react-bootstrap"

export default function Footer() {
    const handleMenu = (menu) => {
        switch(menu) {
            case "home":
                console.log("Home clicked");
                break;
            case "services":
                console.log("Services clicked");
                break;
            case "fees":
                console.log("Fees clicked");
                break;
            case "reserves":
                console.log("Reserves clicked");
                break;
            case "contact":
                console.log("Contact clicked");
                break;
            default:
                break;
        }
    }

    return (
        <footer>
            <Container fluid className="bg-dark p-4" style={{textAlign: 'center'}}>
                <Row className="text-white">
                    <h2>PowerFit</h2>
                </Row>
                <Row className="text-white">
                    <ul style={{display: 'flex', justifyContent: 'center', gap: '2%', listStyle: 'none', textDecoration: 'none', color: 'white'}}>
                        <li><span onClick={() => handleMenu("home")} style={{cursor: 'pointer'}}>Home</span></li>
                        <li><span onClick={() => handleMenu("services")} style={{cursor: 'pointer'}}>Services</span></li>
                        <li><span onClick={() => handleMenu("fees")} style={{cursor: 'pointer'}}>Cuotas</span></li>
                        <li><span onClick={() => handleMenu("reserves")} style={{cursor: 'pointer'}}>Reservas</span></li>
                        <li><span onClick={() => handleMenu("contact")} style={{cursor: 'pointer'}}>Contacto</span></li>
                    </ul>
                </Row>
                <Row>
                <ul style={{display: 'flex', justifyContent: 'center', listStyle: 'none', textDecoration: 'none', color: 'white'}}>
                        <li><span style={{cursor: 'pointer'}}><img src="/img/footer/twitter.png" alt="twitterImg" width={'70%'}/></span></li>
                        <li><span style={{cursor: 'pointer'}}><img src="/img/footer/instagram.png" alt="twitterImg" width={'70%'}/></span></li>
                        <li><span style={{cursor: 'pointer'}}><img src="/img/footer/facebook.png" alt="twitterImg" width={'70%'}/></span></li>
                        <li><span style={{cursor: 'pointer'}}><img src="/img/footer/youtube.png" alt="twitterImg" width={'70%'}/></span></li>
                    </ul>
                </Row>
            </Container>  
        </footer>
    )
};
