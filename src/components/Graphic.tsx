import { useContext, useEffect, useState } from 'react'
import { RequestContext } from '../context/RequestsContext'
import { Line } from 'react-chartjs-2'
import { toAbbrev } from '../utils/number'
import styles from '../styles/components/Graphic.module.css'

export function Graphic(){
    const { lastThyrtDays, lastThyrtDaysAll, dataLastThyrtDays, dataLastThyrtDaysAll, countryName } = useContext(RequestContext)
    const [array, setArray] = useState({})
    
    useEffect(() => {
        if(countryName != 'Global'){
            dataLastThyrtDays()
        } else {
            dataLastThyrtDaysAll()
        }
    }, [countryName])
    
    const cases = countryName === 'Global' 
    ? lastThyrtDaysAll.cases
    : lastThyrtDays.cases
    
    const casesArray = cases ? Object.values(cases) : cases
    const arrGraphic = [];
    
    function setInArray () {
        arrGraphic.push(casesArray)

        console.log(arrGraphic.map(item => toAbbrev(item)))
    }
    
    setInArray()

    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
          {
            label: 'Casos',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#3d2950',
            borderColor: '#8c54c4',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#8c54c4',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 8,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#3d2950',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: arrGraphic[0]
          }
        ]
      };

    return( 
        <div className={styles.container}>
            <h4>Últimos 30 dias</h4>
            <Line
            data={data}
            />
        </div>
    )
}