import Image from "next/image";
import { useContext, useRef } from "react";
import AuthContext from "../stores/authcontext";
import Head from "next/head";
import GetInfo from "../domfunc/GetInfo";
import News from "../domfunc/News";
import Ma from "../domfunc/Ma";
import Pivot from "../domfunc/Pivot";
import Ti from "../domfunc/Ti";
import Ec from "../domfunc/Ec";
// ###############################
export default function Account() {
  const { user, login, logout } = useContext(AuthContext);
  const btn_parent = useRef(null)
  const details = useRef(null);
  const profile = useRef(null);
  const community = useRef(null);
  const show_menu = (ref) => {
      btn_parent.current.className = 'w3-card-4 w3-margin-top w3-padding'
    details.current.className = 'w3-hide';
    profile.current.className = 'w3-hide';
    community.current.className = 'w3-hide';
    switch (ref) {
      case "details":
        details.current.className = 'w3-ul';
        break;
      case "profile":
        profile.current.className = 'w3-ul';
        break;
      case "community":
        community.current.className = 'w3-ul';
        break;
    }
  };
  return (
    <>
      <Head>
        <title>Account</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="w3-content w3-section">
        {/* 1/3 start*/}
        <div className="w3-third">
          {/* profile card start */}
          <div className="w3-card-4">
            <img
              src="https://www.w3schools.com/w3css/img_avatar3.png"
              alt="Alps"
              className="w3-image w3-circle w3-padding"
            />
            <div className="w3-container w3-center">
                {user && <div>{user.user_metadata.full_name}</div>}
                {user && <div>{user.email}</div>}
              <h1 className="w3-third w3-center">
                <i
                  className="fa fa-line-chart"
                  aria-hidden="true"
                  title="details"
                  onClick={()=>{show_menu("details")}}
                ></i>
              </h1>
              <h1 className="w3-third w3-center">
                <i
                  className="fa fa-user-circle"
                  aria-hidden="true"
                  title="profile"
                  onClick={()=>{show_menu("profile")}}
                ></i>
              </h1>
              <h1 className="w3-third w3-center">
                <i
                  className="fa fa-globe"
                  aria-hidden="true"
                  title="community"
                  onClick={()=>{show_menu("community")}}
                ></i>
              </h1>
            </div>
          </div>
          {/* profile card end */}
          {/* card 2 start */}
          <div className="w3-card-4 w3-margin-top w3-padding w3-hide" ref={btn_parent}>
            <ul className="w3-ul w3-hide" ref={details}>
              <li onClick={()=>{
                GetInfo()
              }}>
                GetInfo{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
              <li onClick={()=>{News()}}>
                News{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
              <li onClick={()=>{Ma()}}>
                Moving Avarage{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
              <li onClick={()=>{Pivot()}}>
                Pivot Points{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
              <li onClick={()=>{Ti()}}>
                Technical Indicators{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
              <li onClick={()=>{Ec()}}>
                Economic Calender{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
            </ul>
            <ul className="w3-ul w3-hide" ref={profile}>
              <li>
                Profile{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
              <li>
                My Plans{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
              <li>
                Notification{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
            </ul>
            <ul className="w3-ul w3-hide" ref={community}>
              <li>
                Requests{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
              <li>
                Advisors{" "}
                <i
                  className="fa fa-angle-right w3-right"
                  aria-hidden="true"
                ></i>
              </li>
            </ul>
          </div>
          <br />
        </div>
        {/* 1/3 end and 2/3 start */}
        <div className="w3-twothird w3-padding" id="panel"></div>
        {/* 2/3 end */}
      </div>
    </>
  );
}
