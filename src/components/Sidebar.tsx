import { PencilLine} from 'phosphor-react'
import styles from "./Sidebar.module.css"
import Avatar from './Avatar'

export function SideBar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1690567614925-eb1954507d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=500" 
      />
      <div className={styles.profile}>
       <Avatar src="https://avatars.githubusercontent.com/u/110638131?v=4"/>

        <strong>Iago Novaes</strong>
        <span>Web Developer</span>

        <footer>
          <a href="">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}