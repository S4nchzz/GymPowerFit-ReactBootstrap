import { Card, CardBody, CardTitle, CardText, CardImg } from 'react-bootstrap';

function Maqs({maquinaria}) {
 

  return (
    
    <Card>
      <CardBody>
        <CardImg src={maquinaria.foto} alt="Card image cap" />
        <CardTitle>{maquinaria.nom_maquina}</CardTitle>
        <CardText>{maquinaria.modelo}</CardText>
        <CardText>{maquinaria.precio}</CardText>
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#machinaryPopup">Alquilar</button>
      </CardBody>
    </Card>
  );
}

export default Maqs;

