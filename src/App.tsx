
import { Header } from "./components/Header"
import styles from "./App.module.css"
import "./global.css"
import { SideBar } from "./components/Sidebar"
import Post, { PostType } from "./components/Post"



// author: {avatar_url: "", name: "", role:""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Iaguin11.png',
      name: 'Iago Novaes',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-10-07 14:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Mth-dev022.png',
      name: 'Matheus Souza',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content:'Está no ar !!!', },
      {type: 'paragraph', content: ' Finalmente concluí o meu portfólio... Nesses dias desenvolvendo este projeto, pude por em prática meus conhecimentos recém adquiridos com o Pré-processador "Sass". ' },
      {type: 'link', content: 'Deploy: http://mth-dev.is-best.net/?i=2'},
    ],
    publishedAt: new Date('2023-10-07 21:00:00'),
  },

]


function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <SideBar/>
        <main>
         {posts.map(post=>(
             <Post 
              key={post.id}
              post={post}
             />
          ))}
        </main>
      </div>
    </div>
  
  )
}

export default App
