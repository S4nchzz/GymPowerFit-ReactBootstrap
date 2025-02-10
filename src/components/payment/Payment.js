import { useEffect, useState } from 'react';
import '../css/Payment.css';
import Pack from './Pack.tsx';
import { CardGroup, Container } from 'react-bootstrap';
import Nav from '../Nav.tsx'
import FeesFrame from './FeesFrame.tsx';
import Footer from '../Footer.tsx';

function Payment() {
  const [paymentJson, setPaymentJson] = useState([])

  useEffect(() => {
    const fetchPaymentJson = async() => {
      const data = await fetch('/json/payment.json')
      const json = await data.json()

      setPaymentJson(Object.values(json))
    }

    fetchPaymentJson();
  }, [])

  return (
    <div>
      <Nav/>
      <FeesFrame/>
      
      <Container className="justify-content-center mb-5">
        <CardGroup className='gap-3 mt-5'>
          {paymentJson.map((pack, index) => {
            return <Pack key={index} pack={pack} className="card-spacing" />;
          })}
        </CardGroup>
      </Container>
      <Footer/>
    </div>
  );
}

export default Payment;
