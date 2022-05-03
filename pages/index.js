import { useEffect } from "react"
import Head from "next/head";
export default function Home() {
  useEffect(() => {
    const chatbot = document.createElement('script')
    chatbot.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1'
    document.body.append(chatbot)
  }, [])
  return (

    <>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      </Head>
      <div className="w3-content w3-section">
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
