import { Card, CardBody, CardTitle, CardText, CardImg, Col } from 'react-bootstrap';

function Maquinaria({maquinaria}) {
  return (    
    <Col md={2}>
      <Card  style={{ marginTop: '20px', marginBottom: '15px'}}>
        <CardBody>
          <CardImg src={maquinaria.foto} alt="Card image maquinas"/>
          <CardTitle>{maquinaria.nom_maquina}</CardTitle>
          <CardText>{maquinaria.modelo}</CardText>
          <CardText>{maquinaria.precio}</CardText>
          <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#machinaryPopup">Alquilar</button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Maquinaria;

