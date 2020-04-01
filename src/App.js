import React, { useState, useEffect } from 'react';
import './App.css';
import Info from './components/info/Info';
import Country from './components/Country/Country';

// weather api: 40af4c7a896866ecce136a32e66d7f74
// http://api.openweathermap.org/data/2.5/group?id=5368361,524901&units=imperial&appid=40af4c7a896866ecce136a32e66d7f74

const App = () => {
  let [tempSymbol, setTempSymbol] = useState('C');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch('http://api.openweathermap.org/data/2.5/group?id=5368361,524901&units=imperial&appid=40af4c7a896866ecce136a32e66d7f74');
      const data = await response.json();
      setCities(data.list);
    })();
  }, []);

  return (
    <main>
      <Info tempSymbol={tempSymbol} setTempSymbol={() => setTempSymbol(tempSymbol === 'C' ? 'F' : 'C')}/>
      <Country cities={cities[0]} tempSymbol={tempSymbol}/>
      <Country cities={cities[1]} tempSymbol={tempSymbol}/>
    </main>
  )
}

export default App;
