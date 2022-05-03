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
            script.setAttribute('data-auth-url', 'https://codeunity.netlify.app/advisor')
            script.setAttribute('data-request-access', 'write')
            document.getElementById('widget').appendChild(script)
          }
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
