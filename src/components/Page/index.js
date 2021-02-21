import React, { useEffect, useState } from "react";
import Header from "../Header";
import TableData from "../TableData";
import MenuList from "../MenuList";
import { Wrapper } from "./styles";
import Paper from "@material-ui/core/Paper";

const Page = () => {
  const [menuTotal, setMenuTotal] = useState([
    {country: 'Total'},
    {country: 'Por milhão de pessoas'}

  
  ]);
  const [countries, setCountries] = useState([]);
  countries.splice(0, 0, {country: 'Global', countryInfo: {flag: 'global.png'}})

  useEffect(async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&sort=cases&allowNull=true"
    );
    const data = await response.json();
    setCountries(data);

  }, []);

  console.log(menuTotal)

  return (
    <Wrapper>
      <Paper elevation={3}>
        <Header />
        <div style={{display: 'flex'}}>
          <MenuList 
            menuTitle='Total'        
            countries={menuTotal}
            />
            <MenuList 
            menuTitle={'Global' }     
            countries={countries}   
            />
          </div>
        <div>
          <TableData />
        </div>
      </Paper>
    </Wrapper>
  );
};

export default Page;
