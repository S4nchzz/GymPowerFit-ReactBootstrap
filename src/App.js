import React from 'react';
import { ServicesProvider } from './components/context/ServicesContext';
import Services from './components/services/Services.js';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/home/Home.js';

export default function App() {
    return (
        <BrowserRouter> 
            <Routes>
            <Route path="/" element={<Home/>}/>

                <Route path="/payment" element={
                    <ServicesProvider>
                        <Services/>
                    </ServicesProvider>}/>

            </Routes>
        </BrowserRouter>
    );
}