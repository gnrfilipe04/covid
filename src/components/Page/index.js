import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../Header';

import { Wrapper } from './styles';
import TableData from '../TableData';

const Page = () => {

  const [wordWideData, setWordWideData ] = useState([])

  useEffect(async ()=>{
    const response = await fetch('https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&sort=cases&allowNull=true')
    const data = await response.json()
    setWordWideData(data)

  }, [])

  return (
    <Wrapper>
      <Header />
      <div>
        <TableData />
      </div>
    </Wrapper>
  );
};

export default Page;
