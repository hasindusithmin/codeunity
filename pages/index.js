import { useEffect } from "react"
import Head from "next/head";
export default function Home() {
  useEffect(() => {
    const chatbot = document.createElement('script')
    chatbot.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1'
    document.body.append(chatbot)
    const cross = document.createElement('script')
    cross.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js'
    cross.async = true
    const height = navigator.userAgentData.mobile ? '300':'600'
    cross.innerText = `{ "width": "100%", "height": ${height}, "currencies": [ "EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "SGD" ], "isTransparent": true, "colorTheme": "light", "locale": "en" }`
    document.getElementById('cross').appendChild(cross)
  }, [])
  return (

    <>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      </Head>
      <div className="w3-content w3-section">
        <div className="tradingview-widget-container" id="cross">
          <div className="tradingview-widget-container__widget"></div>
        </div>
        <df-messenger
          intent="WELCOME"
          chat-title="codeunity support"
          agent-id="e7481f3a-59dc-4cd0-bc53-52e4acf83bae"
          language-code="en"
        ></df-messenger>

      </div>

    </>
  )
}
