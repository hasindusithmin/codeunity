import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useContext } from "react";
import AuthContext from "../stores/authcontext";
export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);



  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <div className="container">
        <div className="w3-row w3-panel">
          <h1 className="w3-wide w3-center w3-threequarter w3-cursive">
            <b>Unity Trade Plus</b>
          </h1>
          <h1 className="w3-quarter">
            <img
              src="https://www.w3schools.com/w3css/img_avatar3.png"
              alt="Avatar"
              className="w3-left w3-circle w3-margin-right"
              width={50}
              height={48}
              onClick={() => {
                location.href = "/account";
              }}
            />
            <div className="w3-small w3-rigth">
              {user && <p>{user.user_metadata.full_name}</p>}
            </div>
          </h1>
        </div>
        <nav className="w3-hide-small">
          <Image src="/unity.png" alt="unity" width={60} height={58} />
          <h1 className="w3-cursive">Code Unity</h1>
          <ul>
            <li className="w3-btn w3-round">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            {!user && (
              <li className="w3-btn w3-round">
                <Link href="/aboutus">
                  <a>About Us</a>
                </Link>
              </li>
            )}
            {!user && (
              <li className="w3-btn w3-round">
                <Link href="/performance">
                  <a>Performance</a>
                </Link>
              </li>
            )}
            {!user && (
              <li className="w3-btn w3-round">
                <Link href="/contactus">
                  <a>Contact Us</a>
                </Link>
              </li>
            )}
            {user && (
              <div className="w3-dropdown-hover">
                <button className="w3-button">Plans&nbsp;<i className="fa fa-angle-down" aria-hidden="true"></i></button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                  <div className="w3-bar-item w3-button">
                    <Link href="/trader">
                      <a>Trader</a>
                    </Link>
                  </div>
                  <div  className="w3-bar-item w3-button">
                    <Link href="/advisor">
                      <a>Advisor</a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {user && (
              <div className="w3-dropdown-hover">
                <button className="w3-button">Menu&nbsp;<i className="fa fa-angle-down" aria-hidden="true"></i></button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                  <div className="w3-bar-item w3-button">
                    <Link href="/aboutus">
                      <a>About Us</a>
                    </Link>
                  </div>
                  <div  className="w3-bar-item w3-button">
                    <Link href="/performance">
                      <a>Performance</a>
                    </Link>
                  </div>
                  <div className="w3-bar-item w3-button">
                    <Link href="/contactus">
                      <a>Contact Us</a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {user && (
              <li className="w3-btn w3-round">
                <Link href="/account">
                  <a>Account</a>
                </Link>
              </li>
            )}
            {!user && (
              <li onClick={login} className="btn" style={{ marginLeft: "5px" }}>
                Login/Signup
              </li>
            )}
            {user && (
              <li
                onClick={logout}
                className="btn"
                style={{ marginLeft: "5px" }}
              >
                Logout
              </li>
            )}
          </ul>
        </nav>
        <div className="w3-hide-large">
          <button
            className="w3-button w3-xlarge"
            onClick={() => {
              console.log(
                (document.getElementById("mySidebar").style.display = "block")
              );
            }}
          >
            ☰
          </button>
          <span className="w3-large w3-wide">Hello Forex Traders</span>
        </div>
        <div
          className="w3-sidebar w3-bar-block w3-border-right w3-hide-large"
          style={{ display: "none" }}
          id="mySidebar"
        >
          <ul className="w3-ul w3-border">
            <button
              className="w3-bar-item w3-large w3-red"
              onClick={() => {
                document.getElementById("mySidebar").style.display = "none";
              }}
            >
              Close &times;
            </button>
            <li>
              <Link href="/">
                <a
                  onClick={() => {
                    document.getElementById("mySidebar").style.display = "none";
                  }}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <a
                  onClick={() => {
                    document.getElementById("mySidebar").style.display = "none";
                  }}
                >
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/performance">
                <a
                  onClick={() => {
                    document.getElementById("mySidebar").style.display = "none";
                  }}
                >
                  Performance
                </a>
              </Link>
            </li>
            <li>
              <Link href="/plans">
                <a
                  onClick={() => {
                    document.getElementById("mySidebar").style.display = "none";
                  }}
                >
                  Plans
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                  onClick={() => {
                    document.getElementById("mySidebar").style.display = "none";
                  }}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contactus">
                <a
                  onClick={() => {
                    document.getElementById("mySidebar").style.display = "none";
                  }}
                >
                  Contact Us
                </a>
              </Link>
            </li>
            {!user && (
              <li onClick={login} className="btn">
                Login/Signup
              </li>
            )}
            {user && <li>{user.email}</li>}
            {user && (
              <li onClick={logout} className="btn">
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
