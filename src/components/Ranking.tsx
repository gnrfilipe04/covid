import { useContext } from 'react'
import { RequestContext } from '../context/RequestsContext'
import styles from '../styles/components/Ranking.module.css'

export function Ranking() {
  const { allCountriesData, countries } = useContext(RequestContext)

  console.log(countries)
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <h2>País</h2>
          <h2>Casos</h2>
        </li>
        {countries.map(country => (
          <li key={country.country}>
          <div>
          <img style={{
              width: "30px",
              height: "auto",
              marginRight: "10px",
            }} src={country.countryInfo.flag} />
              <h1>{country.countryInfo.iso3}</h1>
          </div>
              <p>{country.cases}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}