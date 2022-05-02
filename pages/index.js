import { useEffect } from "react"
import Head from "next/head";
export default function Home() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://s3.tradingview.com/tv.js";
    script1.async = true;
    document.body.appendChild(script1)
    const script2 = document.createElement('script')
    script2.innerText = `
    new TradingView.ChatWidgetEmbed({
      "container_id": "tv-chatwidget-f9499",
      "room": "general",
      "width": "450px",
      "height": "585px",
      "locale": "en"
    });
    `
    setTimeout(() => { document.body.appendChild(script2) }, 1000)
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
        <div className="w3-row">
          <div className="w3-half">
            <img className="w3-image w3-center" src="/uno.jpg" alt="img_la" />
            <iframe src="https://hasindusithmin.github.io/forex-chart/" width={500} height={250} style={{ margin: '10px 0' }} scrolling="no" frameBorder={0}></iframe>

          </div>
          <div className="w3-half">
            <div id="tv-chatwidget-f9499"></div>
          </div>
          <df-messenger
            intent="WELCOME"
            chat-title="NewAgent"
            agent-id="e7481f3a-59dc-4cd0-bc53-52e4acf83bae"
            language-code="en"
          ></df-messenger>
        </div>
      </div>

    </>
  )
}
