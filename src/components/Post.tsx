
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Avatar from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
  name : string;
  role: string;
  avatarUrl: string;
}
interface Content {
  type: 'paragraph' | 'link';
  content: string;
}
export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}
interface PostProps { 
  post: PostType
}

export default function Post({post}: PostProps) {
  const [comments, setComments] = useState([
   'Post muito bacana, parabéns.',
  ])
  const [newCommentText, setNewCommentText] = useState('')
  
  const publishedDateFormatted = format(post.publishedAt,"d 'de' LLLL 'às' HH:mm'h' ",{
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(ev: FormEvent){
    ev.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(ev: ChangeEvent<HTMLTextAreaElement>){
    ev.target.setCustomValidity('')
    setNewCommentText(ev.target.value)
  }

  function handleNewCommentInvalid(ev: InvalidEvent<HTMLTextAreaElement>){
    ev.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string){
    const commentWithoutDeletedOne = comments.filter(comment=> {
      return comment !== commentToDelete
    })
    setComments(commentWithoutDeletedOne)
  }
  
  const isNewCommentEmpty = newCommentText.length === 0

 return(
  <article className={styles.post}>
    <header className={styles.header}>
      <div className={styles.author}>
        <Avatar src={post.author.avatarUrl}/>
        <div className={styles.authorInfo}>
          <strong>{post.author.name}</strong>
          <span>{post.author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()} >
          {publishedDateRelativeToNow}
      </time>
    </header>

    <div className={styles.content}>
      {post.content.map(row =>{
        if(row.type === 'paragraph'){
          return <p key={row.content}>{row.content}</p>
        }else if (row.type === 'link'){
          return <p key={row.content}><a href="#">{row.content}</a></p>
        }
      })}
    </div>

    <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea
        name='comment'
        onChange={handleNewCommentChange}
        value={newCommentText}
        placeholder="Deixa um comentário"
        onInvalid={handleNewCommentInvalid}
        required
      />
      <footer>
        <button type="submit" disabled={isNewCommentEmpty}>
          Publicar
        </button>
      </footer>
    </form>

    <div className={styles.commentList}>
     {comments.map(comment=>{
      return (
      <Comment 
        key={comment} 
        content={comment} 
        onDeleteComment={deleteComment}
      />)
     })}
    </div>

  </article>
 )
}