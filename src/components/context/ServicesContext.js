import React from 'react'
import { createContext, useState, useEffect } from 'react';

export const ServicesContext = createContext('ServiceContext');

export const ServicesProvider = ({ children }) => {
  const [servicesJson, setServicesJson] = useState([]);
  const [horarioJson, setHorarioJson] = useState([]);

  useEffect(() => {
    const fetchServicesJson = async () => {
      const response = await fetch('json/services.json');
      const data = await response.json();
      
      setServicesJson(data); 
    };

    const fetchServicesHJson = async () => {
      const response = await fetch('json/horario.json');
      const data = await response.json();
      
      setHorarioJson(data.horario); 
    };

    fetchServicesJson();
    fetchServicesHJson();
  }, []);

  return (
    <ServicesContext.Provider value={{ servicesJson, horarioJson }}>
      {children}
    </ServicesContext.Provider> 
  );
}