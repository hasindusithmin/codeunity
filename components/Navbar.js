import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useContext,useEffect } from "react";
import AuthContext from "../stores/authcontext";
export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  useEffect(()=>{
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.async = true;
    script.innerHTML = '{ "symbols": [ { "description": "GBP/USD", "proName": "FOREXCOM:GBPUSD" }, { "description": "USD/JPY", "proName": "OANDA:USDJPY" }, { "description": "AUD/USD", "proName": "FX:AUDUSD" }, { "description": "EUR/USD", "proName": "FOREXCOM:EURUSD" }, { "description": "GBP/JPY", "proName": "OANDA:GBPJPY" }, { "description": "USD/CAD", "proName": "FX:USDCAD" }, { "description": "EUR/JPY", "proName": "OANDA:EURJPY" }, { "description": "NZD/USD", "proName": "FX:NZDUSD" }, { "description": "CAD/JPY", "proName": "OANDA:CADJPY" }, { "description": "GBP/CHF", "proName": "FX:GBPCHF" } ], "showSymbolLogo": true, "colorTheme": "light", "isTransparent": true, "displayMode": "adaptive", "locale": "en" }'
    document.getElementById('tape').appendChild(script);
  },[])

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
        <div className="w3-row">
          <div className="tradingview-widget-container" id="tape">
            <div className="tradingview-widget-container__widget"></div>
          </div>
        </div>
        <div className="w3-row">
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
                <Link href="/chart">
                  <a>Chart</a>
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
                  <div className="w3-bar-item w3-button">
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
                  <div className="w3-bar-item w3-button">
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
          <div className="w3-button w3-padding-16 w3-left" onClick={w3_open}>☰</div>
          <span className="w3-large w3-wide">Hello Forex Traders</span>
        </div>
        <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-animate-left w3-hide-large" style={{ display: "none", zIndex: 2, width: '40%', maxWidth: '300px' }} id="mySidebar">
          <div onClick={w3_close} className="w3-bar-item w3-button">Close Menu</div>
          <div onClick={w3_close} className="w3-bar-item w3-button">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div onClick={w3_close} className="w3-bar-item w3-button">
            <Link href="/chart">
              <a>Chart</a>
            </Link>
          </div>
          <div onClick={w3_close} className="w3-bar-item w3-button">
            <Link href="/performance">
              <a>Performance</a>
            </Link>
          </div>
          <div onClick={w3_close} className="w3-bar-item w3-button">
            <Link href="/contactus">
              <a>Contact Us</a>
            </Link>
          </div>
          {user && (
            <>
              <div onClick={w3_close} className="w3-bar-item w3-button">
                <Link href="/trader">
                  <a>Trader</a>
                </Link>
              </div>
              <div onClick={w3_close} className="w3-bar-item w3-button">
                <Link href="/advisor">
                  <a>Advisor</a>
                </Link>
              </div>
            </>
          )}
          {user && (
            <div onClick={w3_close} className="w3-bar-item w3-button">
              <Link href="/account">
                <a>Account</a>
              </Link>
            </div>
          )}
          {!user && (
            <div onClick={login} className="w3-bar-item w3-button">
              Login/Signup
            </div>
          )}
          {user && (
            <div onClick={logout} className="w3-bar-item w3-button">
              Logout
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
