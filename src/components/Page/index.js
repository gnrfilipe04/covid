import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import TableData from "../TableData";
import MenuList from "../MenuList";
import { Wrapper } from "./styles";
import Paper from "@material-ui/core/Paper";

const Page = () => {
  const [wordWideData, setWordWideData] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&sort=cases&allowNull=true"
    );
    const data = await response.json();
    setWordWideData(data);
  }, []);

  let countryName = wordWideData.map(item => item.country)
  let countryFlag = wordWideData.map(item => item.countryInfo.flag)
  console.log(countryName)

  return (
    <Wrapper>
      <Paper elevation={3}>
        <Header />
        <div>
          <MenuList 
          countryName={countryName}
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
