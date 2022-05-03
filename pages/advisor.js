import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authcontext";
export default function Advisor() {
    const [isSend,setIsSend] = useState(false);
  const [notexist, setNotExist] = useState(true);
  const [usr, setUsr] = useState(null);
  const { user } = useContext(AuthContext);
  const sendMessage = ()=>{
      if (!isSend) {
          fetch(
            `https://api.telegram.org/${process.env.NEXT_PUBLIC_TOKEN}/sendMessage?chat_id=${usr.chat_id}&text=Hello World`
          )
          .then(res=>{
              if (res.status === 200) setIsSend(true)
          })
      }
  }
  useEffect(() => {
    if (user) {
      sessionStorage.setItem('uuid',user.id);
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
            script.setAttribute('data-onauth', 'onTelegramAuth(user)')
            script.setAttribute('data-request-access', 'write')
            document.getElementById('widget').appendChild(script)
            const script_ = document.createElement('script')
            script_.innerText = `function onTelegramAuth(user) { const client = { "first_name":user.first_name, "last_name":user.last_name, "chat_id":user.id.toString(), "user_id":sessionStorage.getItem('uuid'), "role":"advisor" } fetch('https://data.mongodb-api.com/app/application-0-nfogs/endpoint/adduser',{ method: 'POST', // *GET, POST, PUT, DELETE, etc. headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(client) // body data type must match "Content-Type" header }).then(res=>{})`
            }
            document.body.appendChild(script_)
        });
    }
  }, [user,usr]);
  return (
    <>
      {notexist && (
        <div className="w3-content w3-section" id="widget"></div>
      )}
      {usr && (
          <div className="w3-content w3-section">
              <h3>welcome {usr.first_name} {usr.last_name}</h3>
              <button className="w3-btn w3-blue" onClick={()=>{sendMessage()}}>receive message</button>
        </div>
      )}
    </>
  );
}
