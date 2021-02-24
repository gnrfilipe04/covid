import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const TableData = ({menuTitle}) => {
  const [countryData, setCountryData] = useState([]);

useEffect(async () => {
    if(menuTitle != 'Global' ){
      const response = await fetch(
        `https://disease.sh/v3/covid-19/countries/${menuTitle}?strict=true`
      )
      const data = await response.json();
      setCountryData(data);
    }else{
      const response = await fetch(
        "https://disease.sh/v3/covid-19/all"
      )
      const data = await response.json();
      setCountryData(data);
    }
  
}, [menuTitle]);

  return (
    <Container>
      <div>
        <h1>Casos</h1>
        <h2>{countryData.cases}</h2>  
      </div>
      <div className="line">
        <h1>Recuperados</h1>
        <h2>{countryData.recovered}</h2>  
      </div>
      <div className="line">
        <h1>Mortes</h1>
        <h2>{countryData.deaths}</h2>  
      </div>
    </Container>
  );
};

export default TableData;
