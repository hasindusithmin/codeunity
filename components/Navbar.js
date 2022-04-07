import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useContext } from 'react'
import AuthContext from '../stores/authcontext'
export default function Navbar() {

  const { user, login, logout } = useContext(AuthContext)



  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      </Head>
      <div className="container">
        <nav className="w3-hide-small">
          <Image src="/rupee.png" width={50} height={48} />
          <h1>Trust Signal</h1>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/"><a>About Us</a></Link></li>
            <li><Link href="/"><a>Performance</a></Link></li>
            <li><Link href="/"><a>Courses</a></Link></li>
            <li><Link href="/"><a>Blog</a></Link></li>
            <li><Link href="/"><a>Contact Us</a></Link></li>
            {!user && <li onClick={login} className="btn">Login/Signup</li>}
            {user && <li>{user.email}</li>}
            {user && <li onClick={logout} className="btn">Logout</li>}
          </ul>
        </nav>
        <div className="w3-hide-large">
          <button className="w3-button w3-xlarge" onClick={
            () => {
              console.log(
                document.getElementById('mySidebar').style.display = 'block'
              )
            }
          }>☰</button>
        </div>
        <div className="w3-sidebar w3-bar-block w3-border-right w3-hide-large" style={{ display: 'none' }} id="mySidebar">
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/"><a>About Us</a></Link></li>
            <li><Link href="/"><a>Performance</a></Link></li>
            <li><Link href="/"><a>Courses</a></Link></li>
            <li><Link href="/"><a>Blog</a></Link></li>
            <li><Link href="/"><a>Contact Us</a></Link></li>
            {!user && <li onClick={login} className="btn">Login/Signup</li>}
            {user && <li>{user.email}</li>}
            {user && <li onClick={logout} className="btn">Logout</li>}
          </ul>
        </div>
      </div>
    </>
  )
}
