import React from 'react';
import { ServicesProvider } from './components/context/ServicesContext';
import Services from './components/services/Services.js';

export default function App() {
    return (
        <ServicesProvider>
            <Services/>
        </ServicesProvider>
    );
}