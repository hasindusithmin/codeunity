import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authcontext";
export default function Trader() {
  const [isSend, setIsSend] = useState(false);
  const [notexist, setNotExist] = useState(true);
  const [usr, setUsr] = useState(null);
  const { user } = useContext(AuthContext);
  const sendMessage = () => {
    if (!isSend) {
      const url = 'https://i.ibb.co/X2zfL3s/tre.jpg'
      const cap = `
        *Hi Trader,Join Group Chat*
        [Link](https://t.me/+EwVE3mvUXeAyMGNl)
      `
      fetch(
        `https://api.telegram.org/${process.env.NEXT_PUBLIC_TOKEN}/sendPhoto?chat_id=${usr.chat_id}&photo=${url}&caption=${cap}&parse_mode=markdown`
      )
        .then(res => {
          if (res.status === 200) setIsSend(true)
        })
    }
  }
  useEffect(() => {

    if (user) {
      try {
        const url = window.location.href;
        const client = { "role": "trader", "user_id": user.id }
        const details = url.split('?')[1]
        const queries = details.split('&')
        for (let query of queries) {
          const key = query.split('=')[0]
          const value = query.split('=')[1]
          client[key] = value;
        }
        console.log(client);
        fetch('https://data.mongodb-api.com/app/application-0-nfogs/endpoint/adduser', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(client) // body data type must match "Content-Type" header
        }).then(res => {
          if (res.status === 200) window.location.href = `https://codeunity.netlify.app/trader`;
        })
      } catch (error) {
        console.log({ error: error.message });
      }
      fetch(
        `https://data.mongodb-api.com/app/application-0-nfogs/endpoint/getuser?user_id=${user.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUsr(data);
          if (data !== null) { setNotExist(false) }
          else {
            const script = document.createElement('script')
            script.src = 'https://telegram.org/js/telegram-widget.js?19'
            script.setAttribute('data-telegram-login', 'codeunitybot')
            script.setAttribute('data-size', 'large')
            script.setAttribute('data-auth-url', 'https://codeunity.netlify.app/trader')
            script.setAttribute('data-request-access', 'write')
            document.getElementById('widget').appendChild(script)
          }

        });
    }
  }, [user, usr]);
  return (
    <>
      {notexist && (
        <div className="w3-content w3-section" id="widget"></div>
      )}
      {usr && (
        <div className="w3-content w3-section">
          <h3>welcome {usr.first_name} {usr.last_name}</h3>
          <button className="w3-btn w3-blue" onClick={() => { sendMessage() }}>receive message</button>
        </div>
      )}
    </>
  );
}
