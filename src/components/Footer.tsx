import React from "react"
import { Container, NavLink, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

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
                <li><NavLink as={Link} to="/" style={{color: 'white'}}>Home</NavLink></li>
                <li><NavLink as={Link} to="/services" style={{color: 'white'}}>Servicios</NavLink></li>
                <li><NavLink as={Link} to="/fees" style={{color: 'white'}}>Cuotas</NavLink></li>
                <li><NavLink as={Link} to="/contact" style={{color: 'white'}}>Contacto</NavLink></li>
            </ul>
        </Row>
        <Row>
            <ul style={{display: 'flex', justifyContent: 'center', listStyle: 'none', textDecoration: 'none', color: 'white'}}>
                <li><NavLink as={Link} to="https://twitter.com" target="_blank" style={{cursor: 'pointer'}}><img src="/img/footer/twitter.png" alt="twitterImg" width={'70%'}/></NavLink></li>
                <li><NavLink as={Link} to="https://instagram.com" target="_blank" style={{cursor: 'pointer'}}><img src="/img/footer/instagram.png" alt="twitterImg" width={'70%'}/></NavLink></li>
                <li><NavLink as={Link} to="https://facebook.com" target="_blank" style={{cursor: 'pointer'}}><img src="/img/footer/facebook.png" alt="twitterImg" width={'70%'}/></NavLink></li>
                <li><NavLink as={Link} to="https://youtube.com" target="_blank" style={{cursor: 'pointer'}}><img src="/img/footer/youtube.png" alt="twitterImg" width={'70%'}/></NavLink></li>
            </ul>
        </Row>
    </Container>
</footer>
    )
};
