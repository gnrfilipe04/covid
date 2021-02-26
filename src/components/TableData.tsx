import { table } from 'console'
import { useContext, useEffect, useState } from 'react'
import { RequestContext } from '../context/RequestsContext'
import styles from '../styles/components/TableData.module.css'

export function TableData(){
  const { 
        generalWorldData, 
        worldWideData, 
        countryName, 
        selectedCountryData, 
        countryData
      } = useContext(RequestContext)

      useEffect(() => {
        worldWideData()
      }, [countryName]) 

      useEffect(() => {
        if(countryName != 'Global'){
          selectedCountryData()
        }
      }, [countryName]) 

      console.log(generalWorldData)
      console.log(countryData)
  return (
    <div className={styles.container}>
      <div className={styles.cases}>
        <p>Casos</p>
        <h2>{countryName === 'Global' ? generalWorldData.cases : countryData.cases }</h2>
      </div>
      <div className={styles.recovered}>
        <p>Recuperados</p>
        <h2>{countryName === 'Global' ? generalWorldData.recovered : countryData.recovered }</h2>
      </div>
      <div className={styles.deaths}>
        <p>Mortes</p>
        <h2>{countryName === 'Global' ? generalWorldData.deaths : countryData.deaths }</h2>
      </div>
    </div>
  )
}