import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../stores/authcontext'

export default function Navbar() {

  const {user,login,logout} = useContext(AuthContext)


  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Itum 80 blogger</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/posts"><a>Posts</a></Link></li>
          <li><Link href="/mypost"><a>MyPost</a></Link></li>
          {!user && <li onClick={login} className="btn">Login/Signup</li>}
          {user && <li>{user.email}</li>}
          {user && <li onClick={logout} className="btn">Logout</li>}
        </ul>
      </nav>
    </div>
  )
}
