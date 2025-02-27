import { useContext } from 'react';
import { Container, Row} from 'react-bootstrap';
import Footer from '../Footer.tsx';
import { ServicesContext } from '../context/ServicesContext.js';
import Curso from './Curso.js'
import Horario from './Horario.js';
import Maquina from './Maquina'
import Nav from '../Nav.tsx'

export default function Services() {
  const { servicesJson } = useContext(ServicesContext);

  return (
    <div>
      <Nav/>
      <Container className="justify-content-center mb-6">
      <h1 style={{ marginTop: '50px'}}>CURSOS</h1>
        <Row>
          {
            servicesJson.cursos?.map((c) => {
              return <Curso key={c.titulo} curso={c} />
            })
          }
        </Row>

        <Horario/>
        
        <h1 style={{ marginTop: '100px'}}>MÁQUINAS</h1>
        <Row>
          {
            servicesJson.maquinaria?.map((m) => {
              return <Maquina key={m.nom_maquina} maquina={m} />
            })
          }
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}