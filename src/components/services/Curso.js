import { Card, Accordion } from 'react-bootstrap';
import '../css/services.css';
import { Col } from 'react-bootstrap';

function Cursos({curso}) {
  return (

    <Col md={2}>
      <Accordion>
      <Card>
        <Accordion.Item eventKey="0" >
          <Accordion.Header className='custom-header'>{curso.titulo}</Accordion.Header>
          <Accordion.Body className="d-flex flex-column">
            <p>{curso.descripcion}</p>
            <p>{curso.sala}</p>
            <p>{curso.precio}</p>
            <button class="btn btn-dark"><a class="nav-link" href="#hrr">Horario</a></button>
          </Accordion.Body>
        </Accordion.Item>
      </Card>
    </Accordion>
  </Col>
    
  );
}

export default Cursos;