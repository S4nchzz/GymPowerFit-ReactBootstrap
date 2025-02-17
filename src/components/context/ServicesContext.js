import React from 'react'
import { createContext, useState, useEffect } from 'react';

export const ServicesContext = createContext('ServiceContext');

export const ServicesProvider = ({ children }) => {
  const [servicesJson, setServicesJson] = useState([]);

  useEffect(() => {
    const fetchServicesJson = async () => {
      const response = await fetch('json/services.json');
      const data = await response.json();
      
      setServicesJson(data); 
    };  

    fetchServicesJson();
  }, []);

  return (
    <ServicesContext.Provider value={{ servicesJson }}>
      {children }
    </ServicesContext.Provider>
    
  );
}