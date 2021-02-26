import styles from '../styles/components/SelectCountry.module.css'
import { useContext, useState } from 'react';
import { RequestContext } from '../context/RequestsContext';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



export function SelectCountry(){
  const { countries } = useContext(RequestContext)
  const [isShowList, setIsShowList] = useState(false)
  
  
 return (
  <div className={styles.container}>
     <button onClick={() => setIsShowList(!isShowList)}>
       <img 
       src='global.png' 
       style={{ 
         width: '20px', 
         height: 'auto',
         marginRight: '5px'}} />
         Global 
       <ArrowDropDownIcon/>
      </button>
      <div className={styles.listCountries}>
        <ul style={{display: `${!isShowList ? 'none' : 'block'}`}}>
        {countries.map(country => (
          <li key={country.country}>
            {country.country}
          </li>
          ))}
        </ul>
      </div>   
  </div>
 ) 
}