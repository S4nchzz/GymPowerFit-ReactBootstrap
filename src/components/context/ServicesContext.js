import React from 'react'
import { createContext, useState, useEffect } from 'react';

export const ServicesContext = createContext('ServiceContext');

export const ServicesProvider = ({ children }) => {
  const [servicesJson, setServicesJson] = useState([]);
  const [servicesHorarioJson, setServicesHorarioJson] = useState([]);

  useEffect(() => {
    const fetchServicesJson = async () => {
      const response = await fetch('json/services.json');
      const data = await response.json();
      
      setServicesJson(data); 
    };

    const fetchServicesHJson = async () => {
      const response = await fetch('json/horario.json');
      const data = await response.json();
      
      setServicesHorarioJson(data); 
    };

    fetchServicesJson();
    fetchServicesHJson();
  }, []);

  return (
    <ServicesContext.Provider value={{ servicesJson, servicesHorarioJson }}>
      {children }
    </ServicesContext.Provider> 
  );
}