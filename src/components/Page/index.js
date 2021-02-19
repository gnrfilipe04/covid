import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import TableData from "../TableData";
import MenuList from "../MenuList";
import { Wrapper } from "./styles";
import Paper from "@material-ui/core/Paper";

const Page = () => {
  const [menuTotal, setMenuTotal] = useState([]);
  const [countries, setCountries] = useState([]);


  useEffect(async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&sort=cases&allowNull=true"
    );
    const data = await response.json();
    setCountries(data);
  }, []);

  useEffect(async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/all"
    );
    const data = await response.json();
    setMenuTotal(data);
  }, []);

  const countryName = countries.map(item => item.country)
  

  console.log(countryName)

  return (
    <Wrapper>
      <Paper elevation={3}>
        <Header />
        <div>
          <MenuList 
          countryName={countryName}
          menuTitle='Global'          
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
