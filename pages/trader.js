export default function Trader() {
  return (
    <>
      <div className="w3-content w3-section w3-border w3-round">
      <div className="w3-row">
        <div className="w3-third w3-container">
          <h3 className="w3-center">
            <b>Basic</b>
          </h3>
          <p>
            Distraction-free trading and investing, with more charts, intervals
            and indicators
          </p>
          <h4 className="w3-center">
            {/* <sup>$</sup>4.99 USD/<sub>mo</sub> */}
            Free
          </h4>
          <button className="w3-btn w3-round-xxlarge w3-blue w3-border w3-block" onClick={()=>{
              document.getElementById('id01').style.display='block'
          }}>
            Try it your self
          </button>
          <p><b>Key benefits of Basic:</b></p>
          <ul className="">
            <li>5 indicators per chart</li>
            <li>2 charts in one window</li>
            <li>20 server-side alerts</li>
            <li>Ad-free</li>
            <li>Volume profile indicators</li>
          </ul>
        </div>
        <div className="w3-third w3-border w3-container">
          <h3 className="w3-center">
            <b>Pro</b>
          </h3>
          <p>
            Distraction-free trading and investing, with more charts, intervals
            and indicators
          </p>
          <h4 className="w3-center">
            <sup>$</sup>4.99 USD/<sub>mo</sub>
          </h4>
          <button className="w3-btn w3-round-xxlarge w3-blue w3-border w3-block">
            Try it your self
          </button>
          <p><b>Key benefits of Pro:</b></p>
          <ul className="">
            <li>5 indicators per chart</li>
            <li>2 charts in one window</li>
            <li>20 server-side alerts</li>
            <li>Ad-free</li>
            <li>Volume profile indicators</li>
            <li>Custom time intervals</li>
            <li>Multiple enhanced watchlists</li>
            <li>Bar replay on intraday bars</li>
            <li>
              Multi-monitor support in Desktop app
            </li>
          </ul>
        </div>
        <div className="w3-third w3-container">
          <h3 className="w3-center">
            <b>Premium</b>
          </h3>
          <p>
            Distraction-free trading and investing, with more charts, intervals
            and indicators
          </p>
          <h4 className="w3-center">
            <sup>$</sup>9.99 USD/<sub>mo</sub>
          </h4>
          <button className="w3-btn w3-round-xxlarge w3-blue w3-border w3-block">
            Try it your self
          </button>
          <p><b>Key benefits of Premium:</b></p>
          <ul className="">
            <li>5 indicators per chart</li>
            <li>2 charts in one window</li>
            <li>20 server-side alerts</li>
            <li>Ad-free</li>
            <li>Volume profile indicators</li>
            <li>Custom time intervals</li>
            <li>Multiple enhanced watchlists</li>
            <li>Bar replay on intraday bars</li>
            <li>
              Multi-monitor support in Desktop app
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
