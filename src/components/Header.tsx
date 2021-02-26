import styles from '../styles/components/Header.module.css'

export function Header(){
  return (
    <div className={styles.container}>
      <h1>Covid 19</h1>
      <img src='favicon.png'/> 
    </div>
  )
}