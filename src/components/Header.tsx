import styles from "./Header.module.css"
import igniteLogo from "../asset/ignite-logo.svg"

export function Header(){
  return(
  <header className={styles.header}>
    <img src={igniteLogo} alt="LogoTipo Ignite" />
  </header>
    
  )
}