import logo from "../logo/logo.png";
import Video from "./Video";
import "./Main.css";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MESUREMENTID,
};
// console.log(process.env.REACT_APP_API_KEY)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const VideoPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const loadServices = () => {
    localStorage.getItem("services");
  };
  const checkServices = () => {
    const loginApp = document.querySelector(".loginApp");
    loginApp.style.display = "block";
  };

  console.log(isSignedIn);
  const checkSignin = () => {
    const email = document.querySelector("#emailInput");
    const password = document.querySelector("#passwordInput");
    const status = document.querySelectorAll(".status");

    if (!email.value || !password.value) {
      setIsSignedIn(false);
      let services = { Auth: false };
      localStorage.setItem("services", JSON.stringify(services));
      email.classList.add("error");
      password.classList.add("error");
      for (let i = 0; i < status.length; i++) {
        const element = status[i];
        element.innerHTML = "Please enter your email and password";
        element.style.color = "red";
      }
    } else {
      email.classList.remove("error");
      password.classList.remove("error");
      validate();
    }
  };
  function validate() {
    const email = document.querySelector("#emailInput");
    const password = document.querySelector("#passwordInput");
    const status1 = document.querySelector("#status1");
    const status2 = document.querySelector("#status2");
    const videos_container = document.querySelector(".videos_container");
    const Main = document.querySelector(".Main");
    // email regex validation
    let mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(mailformat)) {
      // alert("You have entered an invalid email address!");
      status1.innerHTML = "You have entered an invalid email address!";
      email.focus(); // set focus to email input
      status1.style.color = "red";
      email.classList.add("error");
    } else {
      status1.innerHTML = "";
      email.blur(); // remove focus from email input
      email.classList.remove("error");
      email.classList.add("success");
    }
    if (password.value.length < 6) {
      // alert("Password should be minimum of 6 characters");
      status2.innerHTML = "Password should be minimum of 6 characters";
      email.focus(); // set focus to email input
      status2.style.color = "red";
      password.classList.add("error");
    } else {
      status2.innerHTML = "";
      email.blur(); // remove focus from email input
      password.classList.remove("error");
      password.classList.add("success");
    }
    if (
      email.classList.contains("success") &&
      password.classList.contains("success")
    ) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setIsSignedIn(true);
          videos_container.classList.add('show');
          Main.classList.remove('show');
          Main.classList.add('hide');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
          status1.innerHTML = errorCode;
          status1.style.color = "red";
          videos_container.classList.remove('show');
          Main.classList.remove('hide');
          Main.classList.add('show');
        });
    }
  }
  if (isSignedIn === true) { // if user is signed in
    const loginApp = document.querySelector(".loginApp");
    let services = { Auth: true };
    localStorage.setItem("services", JSON.stringify(services));
    loginApp.style.display = "none";
  }
  console.log(isSignedIn);
  return (
    <>
      <Video />
    <div className="Main" onLoad={loadServices}>
      <div className="navbar">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
            <div className="logo_text">ResFeed</div>
          </div>
          <div className="nav-links">
            <a href="/">Log in</a>
          </div>
        </nav>
        <div className="banner">
          <div className="content">
            <div className="text">
              <h1>ResFeed</h1>
              <p>
                No limitation to education. Enjoy the world of education,
                entertainment, and much more with ResFeed.
              </p>
              {/*  */}
              <div className="button">
                <button onClick={checkServices}>Try Now</button>
              </div>
            </div>
          </div>
          {/* <video src=""></video> */}
        </div>
      </div>
      <div className="loginApp">
        <div className="login-content">
          <div className="login-form">
            <div className="login-form-header">
              <h1>Log in</h1>
              <p>Login to use our Service.</p>
            </div>
            <div className="login-form-body">
              <div className="login-form-input">
                <input type="text" placeholder="Email" id="emailInput" />
                <p className="status" id="status1"></p>
              </div>
              <div className="login-form-input">
                <input
                  type="password"
                  placeholder="Password"
                  id="passwordInput"
                />
                <p className="status" id="status2"></p>
              </div>
              <div className="login-form-button">
                <button onClick={checkSignin}>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default VideoPage;
