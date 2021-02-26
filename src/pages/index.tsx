import React, { useContext, useEffect } from 'react'
import { RequestContext } from '../context/RequestsContext'

export default function Home() {
  const { 
      generalWorldData, 
      countries, 
      worldWideData, 
      allCountriesData,
      changeCountryName,
      countryData,
      countryName,
      selectedCountryData
      } = useContext(RequestContext)
  
  useEffect(() => {
    worldWideData()
  }, [])

  useEffect(() => {
    allCountriesData()
  }, [])

  changeCountryName('Brazil')
  
  useEffect(() => {
    selectedCountryData()
  }, [countryName])
  
  console.log(countryData)

  return (
   <>
    <div>
      <h1>Cases - {generalWorldData.cases}</h1>
    </div>
    <div>
      <h1>Recovered - {generalWorldData.recovered}</h1>
    </div>
    <div>
      <h1>Deaths - {generalWorldData.deaths}</h1>
    </div>

    <ul>
      {countries.map(country => (
        <li style={{
          listStyle: 'none',
          padding: '2rem 0 2rem 0',
          display: 'flex'
        }} key={country.country}>{country.country}
        </li>
      ))}
    </ul>
   </>
   
  )
}
