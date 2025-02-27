import Payment from "./components/payment/Payment";
import { PaymentProvider } from './components/context/PaymentContext.js'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/home/Home.js";
import { ServicesProvider } from './components/context/ServicesContext.js'
import Services from './components/services/Services.js'

export default function App() {
    return (
        <BrowserRouter> 
            <Routes>
            <Route path="/" element={<Home/>}/>

                <Route path="/payment" element={
                    <PaymentProvider>
                        <Payment/>
                    </PaymentProvider>}/>

                <Route path="/services" element={
                    <ServicesProvider>
                        <Services/>
                    </ServicesProvider>}/>
            </Routes>
        </BrowserRouter>
    );
};