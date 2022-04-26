import './App.css';
import { useState } from 'react'
// import dotenv from  'dotenv'
import VideoPage from './pages/Main'
import logo from './logo/logo.png';
import social_image from './source/social media.jpg'
import graphics from './source/line.png'
import portfolio from './source/my_portfolio.jpg'
import computer_secure from './source/computer secure.jpg';
import consultation from './source/consultation.jpg';
import digital from './source/digital_marketing.jpg';
// import '../.env.local';
function App() {
  const [show, setShow] = useState();
  const linkToMainPage = () => {
    const Main = document.querySelector('.Main');
    const App = document.querySelector('.App');
    setShow(!show + Main.classList.add('show'));
    setShow(!show + (App.style.display = 'none'));
    // console.log(process.env.REACT_APP_API_KEY);
  }
  // require('dotenv').config()
  // const config = dotenv.parse(buf)
  return (
    <div className='First'>
      <VideoPage />
    <div className="App">
      <div className="container">
        <div className="content">
            <div className="img">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav">
              <div className="list">
                <div className="list-item">
                  <p id='home'>Home</p>
                  <p id='about'>About</p>
                  <p id='offer'>Offer</p>
                  <p id='contact'>Contact</p>
                </div>
              </div>
            </div>
          <div className="flex">
            <div className="col-right">
              <div className="fields">
                <div className="large_text">Educate yourself now based on Interests</div>
                <p>ResFeed</p>
                <div className="btn_div">
                  <div className="button" onClick={linkToMainPage}>Join Us</div>
                </div>
              </div>
            </div>
            <div className="col-left">
              <div className="image">
                <img src={social_image} alt="image_of_person_with_phone" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs">
        <div className="content">
          <div className="text">About the Company</div>
          <div className="pref">
          Res Feed is a video streaming and learning web app founded by Treasure. Res Feed gives you results based on your search result and interest, Res Feed packs content and resources from their database and gives you what you're looking for. The company TrailMedia took it within themselves to start a company that educates people based on their interests, and searches and gives the user a reasonable result.
          </div>
          <div className="grp">
            <img src={graphics} alt="" />
          </div>
        </div>
      </div>
      <div className="aboutMe">
        <div className="content">
          <div className="abx">
            <div className="image">
              <img src={portfolio} alt="" />
            </div>
            <div className="ab_box">
              <div className="ab_text">About Me</div>
              <div className="ab_pref">
                <p>
                Hello, I'm Treasure, I'm a web developer, and a web app developer. I'm a Full Stack Developer. I'm a student, pursuing my degree in CSSE. I've worked as a Web Developer with over 3+years of experience. I've worked on many client projects, and some personal projects of my own, Learning is a part of my life and I believe in helping people with my knowledge.
                </p>
              </div>
              <div className="button">
                <div className="btn">Work with me</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offer">
        <div className="content">
          <div className="header">What we offer</div>
          <div className="box_content">
            <div className="box">
              <div className="image">
                <img src={computer_secure} alt="" />
              </div>
              <div className="dwn">
                <div className="big">Fast Results</div>
                <p className='small'>
                ResFeed offers fast results this means, that you don't have to think of what you want all you need is to add your interest first and we will give you what you're looking for, also we will collect a small amount of data to make sure you get the best out of our app.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src={consultation} alt="" />
              </div>
              <div className="dwn">
                <div className="big">Consultations</div>
                <p className='small'>
                Our Team is ready to speak to you concerning any issues you have with the app and our services, we promise to help you with any problem conspiring with our app as soon as possible.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src={digital} alt="" />
              </div>
              <div className="dwn">
                <div className="big">Encryption</div>
                <p className='small last'>
                We at TrailMedia offer end to end encryption we don't keep track of the data you have we only collect a small amount of information from you and that is your interest and your email address, we promise to try our best to keep your accounts safe & secure, we don't also store cookies in your browser, we only give the data you input back to you and nothing more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collab">
        <div className="content">
          <div className="left">
             <div className="header">Let's collaborate.</div>
          </div>
          <div className="right">
            <div className="ptext">Visit my socials</div>
            <div className="social">
              <div className="social_icon">
                <i className="fa-brands fa-facebook-square"></i>
              </div>
              <div className="social_icon">
              <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="social_icon">
              <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
            <div className="connect">
              <div className="email">
                <div className="text">Email Me</div>
                <div className="email_info">treasureedesemhen500@gmail.com</div>
              </div>
              <div className="call">
                <div className="text">Give me a Call</div>
                <div className="call_info">(123) 456 7886</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        All rights reserved &copy; 2020 - TrailMedia Ltd.
      </footer>
    </div>
    </div>
  );
}

export default App;
