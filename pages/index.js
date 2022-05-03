import { useEffect } from "react"
import Head from "next/head";
export default function Home() {
  useEffect(() => {
    const chatbot = document.createElement('script')
    chatbot.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1'
    document.body.append(chatbot)
    // ################################
    const cross = document.createElement('script')
    cross.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js'
    cross.async = true
    const cross_height = navigator.userAgentData.mobile ? '300' : '600'
    cross.innerText = `{ "width": "100%", "height": ${cross_height}, "currencies": [ "EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "SGD" ], "isTransparent": true, "colorTheme": "light", "locale": "en" }`
    document.getElementById('cross').appendChild(cross)
    // ####################################
    const tv = document.createElement('script')
    tv.src = 'https://s3.tradingview.com/tv.js';
    document.head.appendChild(tv)
    // #########################################
    setTimeout(()=>{
      const chat = document.createElement('script')
      const idea = document.createElement('script')
      const widget_height = navigator.userAgentData.mobile ? '200' : '600'
      chat.innerText = `new TradingView.ChatWidgetEmbed({ "container_id": "tv-chatwidget-8da34", "room": "general", "width": "100%", "height": ${widget_height}, "locale": "en" });`
      idea.innerHTML = `new TradingView.IdeasStreamWidget({ "container_id": "tv-ideas-stream-bdf62", "startingCount": 1, "width": "100%", "height": ${widget_height}, "mode": "integrate", "bgColor": "#f2f5f8", "headerColor": "rgba(0, 0, 0, 1)", "borderColor": "rgba(238, 238, 238, 1)", "locale": "en", "sort": "recent", "stream": "currencies", "symbol": "" });`
      document.getElementById('chat').appendChild(chat)
      document.getElementById('idea').appendChild(idea)
    },1000)
  }, [])
  return (

    <>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      </Head>
      <div className="w3-content w3-section">
        <div className="w3-row">
          <div className="tradingview-widget-container" id="cross">
            <div className="tradingview-widget-container__widget"></div>
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-half" id="chat">
            <div id="tv-chatwidget-8da34"></div>
          </div>
          <div className="w3-half" id="idea">
          <div id="tv-ideas-stream-bdf62"></div>
          </div>
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
