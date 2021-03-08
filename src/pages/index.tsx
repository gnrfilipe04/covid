import React, { useContext, useEffect } from 'react'
import { Graphic } from '../components/Graphic'
import { Header } from '../components/Header'
import { Ranking } from '../components/Ranking'
import { SelectCountry } from '../components/SelectCountry'
import { TableData } from '../components/TableData'
import { RequestContext } from '../context/RequestsContext'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const { allCountriesData } = useContext(RequestContext)

  useEffect(() => {
    allCountriesData()
  }, [])
  
  return (
  <div className={styles.container}>
    <Header />
    <section>
      <SelectCountry />
      <section className={styles.data}>
        <div>
        <TableData />
        <Graphic /> 
        </div>
       <div className={styles.ranking}>
         <Ranking />
       </div> 
      </section>
    </section>
  </div>
   
  )
}
