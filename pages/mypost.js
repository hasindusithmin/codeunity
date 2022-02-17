
import { useContext, useEffect,useState } from 'react'
import AuthContext from '../stores/authcontext'
import styles from '../styles/Guides.module.css'

export default function MyPost() {

  const {user,authReady,login} = useContext(AuthContext)
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=>{
    if (authReady) {
      fetch('/.netlify/functions/hello', user && {
        headers: {
          Authorization:  'Bearer ' + user.token.access_token
        }
      })
      .then(res => {
        if (!res.ok) {
          login()
          throw Error('You must be logged in to view this content')
        }
        return res.json()
      })
      .then(data => {
        setError(null)
        setGuides(data)
      })
      .catch(err => {
        setError(err.message)
        setGuides(null)
      })
    }
  },[user,authReady])

  return (
    <div className={styles.guides}>
      
      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}>
          <p>{ error }</p>
        </div>
      )}

      {guides && guides.map(guide => (
        <div key={guide.id} className={styles.card}>
          <h3>{ guide.title }</h3>
          <p>{ guide.body }</p>
          <h4>written by {guide.userId}</h4>
        </div>
      ))}

    </div> 
  )
}