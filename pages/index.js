import { useEffect } from "react"
import Head from "next/head";
export default function Home() {
  useEffect(() => {
    const script_tv = document.createElement('script');
    script_tv.src = "https://s3.tradingview.com/tv.js";
    script_tv.async = true;
    document.body.appendChild(script_tv)
    const script_w3 = document.createElement('script')
    script_w3.src = "https://www.w3schools.com/lib/w3.js"
    document.body.appendChild(script_w3)
    const script2 = document.createElement('script')
    script2.innerText = `
      new TradingView.ChatWidgetEmbed({
        "container_id": "tv-chatwidget-f9499",
        "room": "general",
        "width": "450px",
        "height": "585px",
        "locale": "en"
      });
      new TradingView.IdeasStreamWidget({
        "container_id": "tv-ideas-stream-e6c04",
        "startingCount": 1,
        "width": "450px",
        "height": "400px",
        "mode": "integrate",
        "bgColor": "rgba(255, 255, 255, 1)",
        "headerColor": "rgba(0, 0, 0, 1)",
        "borderColor": "#dce1e6",
        "locale": "en",
        "sort": "recent",
        "stream": "currencies",
        "symbol": ""
    });
      `
    setTimeout(() => {
      document.body.appendChild(script2)
      const script_w3_slideshow = document.createElement('script')
      script_w3_slideshow.innerText = 'w3.slideshow(".w3-image", 4000);'
      document.body.appendChild(script_w3_slideshow)
    }, 1000)
    const script3 = document.createElement('script')
    script3.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1'
    document.body.append(script3)
  }, [])
  return (

    <>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      </Head>
      <div className="w3-content w3-section">
        <div className="w3-row w3-padding">
          <img src="/images/uno.jpg" alt="img_la" className="w3-image" style={{ width: '100%' }} />
          <img src="/images/due.jpg" alt="img_la" className="w3-image" style={{ width: '100%' }} />
          <img src="/images/tre.jpg" alt="img_la" className="w3-image" style={{ width: '100%' }} />
          <img src="/images/qua.jpg" alt="img_la" className="w3-image" style={{ width: '100%' }} />
          <img src="/images/cin.jpg" alt="img_la" className="w3-image" style={{ width: '100%' }} />
          <img src="/images/sei.jpg" alt="img_la" className="w3-image" style={{ width: '100%' }} />
          <img src="/images/ott.jpg" alt="img_la" className="w3-image" style={{ width: '100%' }} />
        </div>
        <div className="w3-row">
          <div className="w3-half">
            <div id="tv-chatwidget-f9499"></div>
            <div className="w3-padding">
              <h3>Pattern Recognition</h3>
              <iframe src="https://hasindusithmin.github.io/forex-chart/" width={'100%'} height={'250px'} scrolling="no" frameBorder={"0"}></iframe>
            </div>
          </div>
          <div className="w3-half" id="tv-ideas-stream-e6c04"></div>
        </div>
        <df-messenger
          intent="WELCOME"
          chat-title="NewAgent"
          agent-id="e7481f3a-59dc-4cd0-bc53-52e4acf83bae"
          language-code="en"
        ></df-messenger>

      </div>

    </>
  )
}
