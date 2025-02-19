import { useContext } from 'react';
import '../css/Payment.css';
import Pack from './Pack.tsx';
import { Container, Row } from 'react-bootstrap';
import Nav from '../Nav.tsx'
import FeesFrame from './FeesFrame.tsx';
import Footer from '../Footer.tsx';
import { PaymentContext } from '../context/PaymentContext.js';

function Payment() {
  const { paymentJson } = useContext(PaymentContext)

  return (
    <div>
      <Nav/>
      <FeesFrame/>
        <Container className="justify-content-center mb-5">
          <Row className='gap-3 mt-5'>
            {paymentJson.map((pack, index) => {
              return <Pack key={index} pack={pack} className="card-spacing" />;
            })}
          </Row>
        </Container>
      <Footer/>
    </div>
  );
}

export default Payment;