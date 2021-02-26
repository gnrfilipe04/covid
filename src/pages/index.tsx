import React, { useContext, useEffect } from 'react'
import { Header } from '../components/Header'
import { SelectCountry } from '../components/SelectCountry'
import { RequestContext } from '../context/RequestsContext'
import styles from '../styles/pages/Home.module.css'

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
  <div className={styles.container}>
    <Header />
    <section>
      <SelectCountry />
    </section>
  </div>
   
  )
}
