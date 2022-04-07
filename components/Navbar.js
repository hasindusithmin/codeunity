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
          <ul >
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/aboutus"><a>About Us</a></Link></li>
            <li><Link href="/performance"><a>Performance</a></Link></li>
            <li><Link href="/plans"><a>Plans</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/contactus"><a>Contact Us</a></Link></li>
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
          <span className="w3-large w3-wide">Hello Forex Traders</span>
        </div>
        <div className="w3-sidebar w3-bar-block w3-border-right w3-hide-large" style={{ display: 'none' }} id="mySidebar">
          <ul className="w3-ul w3-border" >
            <button className="w3-bar-item w3-large w3-red" onClick={() => {
              document.getElementById('mySidebar').style.display = 'none'
            }}>Close &times;</button>
            <li><Link href="/"><a onClick={() => {
              document.getElementById('mySidebar').style.display = 'none'
            }}>Home</a></Link></li>
            <li><Link href="/aboutus" ><a onClick={() => {
              document.getElementById('mySidebar').style.display = 'none'
            }}>About Us</a></Link></li>
            <li><Link href="/performance"><a onClick={() => {
              document.getElementById('mySidebar').style.display = 'none'
            }}>Performance</a></Link></li>
            <li><Link href="/plans"><a onClick={() => {
              document.getElementById('mySidebar').style.display = 'none'
            }}>Plans</a></Link></li>
            <li><Link href="/blog"><a onClick={() => {
              document.getElementById('mySidebar').style.display = 'none'
            }}>Blog</a></Link></li>
            <li><Link href="/contactus"><a onClick={() => {
              document.getElementById('mySidebar').style.display = 'none'
            }}>Contact Us</a></Link></li>
            {!user && <li onClick={login} className="btn">Login/Signup</li>}
            {user && <li>{user.email}</li>}
            {user && <li onClick={logout} className="btn">Logout</li>}
          </ul>
        </div>
      </div>
    </>
  )
}
