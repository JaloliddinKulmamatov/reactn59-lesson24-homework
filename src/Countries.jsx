import React, { createContext, useState, useEffect } from 'react';

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API__URL = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    async function fetchData() {
      setLoading(true); 
      setError(null); 
      try {
        const response = await fetch(API__URL);
        if (!response.ok) {
          console.error(error)
        }
        const data = await response.json();
        setCountry(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false); 
      }
    }
    fetchData();
  }, []);

  return (
    <CountriesContext.Provider value={{ country, loading, error }}>
      {children}
    </CountriesContext.Provider>
  );
};
