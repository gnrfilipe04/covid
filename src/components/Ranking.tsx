import { useContext, useState, useEffect } from 'react'
import { RequestContext } from '../context/RequestsContext'
import styles from '../styles/components/Ranking.module.css'
import { toFormatted } from '../utils/number'

export function Ranking() {
  const { countries: contextCountries } = useContext(RequestContext)
  const [countries, setCountries] = useState([])
  const [activeSorting, setActiveSorting] = useState({
    prop: 'country',
    desc: true
  })

  /**
   * @param prop 'country' | 'cases'
   */
  const sortBy = (prop: string): void => {
    setActiveSorting({ prop, desc: !activeSorting.desc })
  }

  useEffect(() => {
    setCountries(contextCountries)
  }, [contextCountries])

  useEffect(() => {
    const { prop, desc } = activeSorting
    const sortedCountries = countries.sort((a, b) => {
      return a[prop] < b[prop]
        ? (desc ?  1 : -1)
        : (desc ? -1 : 1)
    })

    setCountries(sortedCountries)
  }, [activeSorting.prop, activeSorting.desc])

  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.tableHeader}>
          <h2>
            <a onClick={() => sortBy('country')}>País</a>
          </h2>
          <h2>
            <a onClick={() => sortBy('cases')}>Casos</a>
          </h2>
        </li>
        {countries.map(country => {
          const cases = toFormatted(country.cases)

          return (
            <li key={country.country}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ marginRight: "10px" }} 
                  src={country.countryInfo.flag} width="25px" height="15px" />
                <h1 style={{ color: '#444' }}>{country.countryInfo.iso3}</h1>
              </div>
                  <p>{ cases }</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}