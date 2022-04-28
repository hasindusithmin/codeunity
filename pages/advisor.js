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
        fetch(
            `https://data.mongodb-api.com/app/application-0-nfogs/endpoint/getuser?user_id=${user.id}`
          )
            .then((res) => res.json())
            .then((data) => {
              setUsr(data);
              setNotExist(false);
            });
    }
  }, [user,usr]);
  return (
    <>
      {notexist && (
        <div className="w3-content w3-section">
          <Link
            href={
              user
                ? `https://hasindusithmin.github.io/telegram-login/#${user.id}`
                : "/"
            }
          >
            <button className="w3-btn w3-blue" >Register</button>
          </Link>
        </div>
      )}
      {!notexist && (
          <div className="w3-content w3-section">
              <h3>welcome {usr.first_name} {usr.last_name}</h3>
              <button className="w3-btn w3-blue" onClick={()=>{sendMessage()}}>receive message</button>
        </div>
      )}
    </>
  );
}
