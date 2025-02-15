import './App.css';
import Cursos from './components/services/Curso';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Maqs from './components/services/Maquinaria';
import Footer from './components/services/footer';
import CustomNavbar from './components/services/nav';

function App() {
  const [tarjeta, setTarjeta] = useState([]);
  const [tarjetaMaq, setTarjetaMaq] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('services.json');
      const data = await response.json();
      setTarjeta(data); 
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const fetchCardsMaq = async () => {
      const response = await fetch('services.json');
      const data = await response.json();
      setTarjetaMaq(data); 
    };

    fetchCardsMaq();
  }, []);

  return (
  
    <div>
      <CustomNavbar/>
      <h1>CURSOS</h1>
      <Container className="justify-content-center mb-6">
       <Row>
          {tarjeta.cursos && tarjeta.cursos.map((curso, index) => (
            <Col md = "2">
              <Cursos key={index} curso={curso} />
            </Col>
          ))}
       </Row>
          
        
      </Container>

      <h1>MAQUINARIA</h1>

      <Container className="justify-content-center mb-6">
        <Row>
           {tarjetaMaq.maquinaria && tarjetaMaq.maquinaria.map((maquinaria, index) => (
          <Col md = "2">
            <Maqs key={index} maquinaria={maquinaria}/>
          </Col>
          ))}
        </Row>
          
            
          
        
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
