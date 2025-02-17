import Cursos from './Curso.js';
import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer.tsx';
import { ServicesContext } from '../context/ServicesContext.js';

export default function Services() {
  const { servicesJson } = useContext(ServicesContext);

  return (
    <div>

      <h1>CURSOS</h1>
      <Container className="justify-content-center mb-6">
       <Row>
          {
            console.log(servicesJson)
          }
       </Row>
      </Container>
      <Footer/>
    </div>
  );
}