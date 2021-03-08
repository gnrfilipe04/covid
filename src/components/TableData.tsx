import { table } from 'console'
import { useContext, useEffect, useState } from 'react'
import { RequestContext } from '../context/RequestsContext'
import styles from '../styles/components/TableData.module.css'
import { toAbbrev } from '../utils/number'

export function TableData(){
  const { 
    generalWorldData, 
    worldWideData, 
    countryName, 
    selectedCountryData, 
    countryData
  } = useContext(RequestContext)

  useEffect(() => {
    if(countryName != 'Global'){
      selectedCountryData()
    } else {
      worldWideData()
    }
  }, [countryName])

  const cases = countryName === 'Global' 
    ? generalWorldData.cases
    : countryData.cases
  
  const recovered = countryName === 'Global'
    ? generalWorldData.recovered
    : countryData.recovered 

  const deaths = countryName === 'Global'
    ? generalWorldData.deaths
    : countryData.deaths 

  return (
    <>
      <div className={styles.container}>
      <div className={styles.cases}>
        <h2>{ toAbbrev(cases) }</h2>
        <p>Casos</p>
      </div>
      <div className={styles.recovered}>
        <h2>{ toAbbrev(recovered) }</h2>
        <p>Recuperados</p>
      </div>
      <div className={styles.deaths}>
        <h2>{ toAbbrev(deaths) }</h2>
        <p>Mortes</p>
      </div>
    </div>
    </>
  )
}