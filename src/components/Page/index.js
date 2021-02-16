import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const Page = () => {

  const [wordWideData, setWordWideData ] = useState([])

  useEffect(async ()=>{
    const response = await fetch('https://disease.sh/v3/covid-19/all')
    const data = await response.json()
    setWordWideData(data)

  }, [])

  return (
    <Container>
      <h1>{wordWideData.cases}</h1>
      <h1>{wordWideData.update}</h1>
     
    </Container>
  );
};

export default Page;

