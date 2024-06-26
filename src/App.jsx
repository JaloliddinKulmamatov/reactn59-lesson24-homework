import React, { useContext } from 'react';
import { CountriesProvider, CountriesContext } from './Countries';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const { country, loading } = useContext(CountriesContext);

  return (
    <div className='body'>
          {loading && (
          <div class="loadingio-spinner-double-ring-2by998twmg8 loading" ><div class="ldio-yzaezf3dcmj">
          <div></div>
          <div></div>
          <div><div></div></div>
          <div><div></div></div>
          </div></div>
      )}
        <div className="cards">
          {country.map((c) => (
            <div key={c.cca3} className="wrapper__card">
              <div className="wrapper__card__top">
                <img src={c.flags.png} alt={c.name.common} />
              </div>
              <div className="wrapper__card__bottom">
                <h3>{c.name.common}</h3>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default function AppWithProvider() {
  return (
    <CountriesProvider>
      <App />
    </CountriesProvider>
  );
}
