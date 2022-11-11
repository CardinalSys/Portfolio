import React,{ useState } from 'react';
import './App.css';
import { Project } from './components/Projects';


function App() {
  const [softShow, setSoftShow] = useState(true);
  const [gameShow, setGameShow] = useState(true);
  function softClick() {
    setSoftShow(true);
    setGameShow(false);
    document.getElementsByClassName("SoftwareBtn").item(0).style.backgroundColor= "#2b2b46";
    document.getElementsByClassName("GameBtn").item(0).style.backgroundColor= "#09090e";
  }
  function gameClick() {
    document.getElementsByClassName("GameBtn").item(0).style.backgroundColor= "#2b2b46";
    document.getElementsByClassName("SoftwareBtn").item(0).style.backgroundColor= "#09090e";
    setSoftShow(false);
    setGameShow(true);
  }
  return (
    <div className="App">
      <div className="box">
        <div className="header">
          <img src={require("./img/pika.png")} className="my-logo" alt="logo"></img>
          <div className="heading-text">
            <p className="my-name">Cardinal</p>
            <p className="hire">AVAILABLE TO HIRE</p>
          </div>
        </div>

        <div className="about">
          <hr></hr>
          <p className='about-header'>About me:</p>
          <div className="about-text">
            <p>Hi, I'm Cardinal and my skills are: <strong>C# & C++</strong> program developer, game developer on <strong>Unity</strong> and <strong>Unreal Engine</strong>, <strong>Frontend</strong> and <strong>Reverse Engineering</strong> games. Contact me by email for:</p>
            <p>-As a freelancer for web or software development.</p>
            <p>-Full time as a game developer.</p>
            <p>My email and github are on the footer.</p>   
          </div>   
        </div>
        <hr></hr>
        <div className="bar">
          <ul className="button-list">
            <button type="button" className="SoftwareBtn" onClick={softClick}>Softwares</button>
            <button type="button" className="GameBtn"onClick={gameClick}>Games</button>
          </ul>
        </div>
        <ul>
          <p className="work-text">Works:</p>
          {
            softShow && <div className="SoftwareWorks">
              <Project 
                projectName = "R6 Tracker"
                imageUrl = "R6Tracker"
                link = "https://github.com/CardinalSys/R6TrackerV2"
                projectDesc = "R6 Tracker, designed for TinoRed (Cuba intranet) is a program for check your statistics in Rainbow Six Siege LAN mode by reading the game's RAM in real time."
              />
                <Project 
                projectName = "Nauta Manager"
                imageUrl = "NautaManager"
                link = "https://github.com/CardinalSys/NautaManager"
                projectDesc = "Nauta Manager is a program to connect to Nauta Hogar without using the web, with a tool to schedule the disconnection, a connection quality checker and an option to disable the automatic disconnection every 12 hours."
              />
            </div>
          }
          {
            gameShow && <div className="GameWorks">
              <Project 
                  projectName = "Space War"
                  imageUrl = "SpaceWar"
                  link = "https://cardinalsys.itch.io/spacewar"
                  projectDesc = "SpaceWar is a simple 2D Space Shooter Game made with GitHubCopilot in Unity."
                />
            </div>
          }
        </ul>
        <footer className="footer">
        <hr></hr>
          <div class="logo-container">
            <a href ="http://github.com/CardinalSys" target="_blank" rel="noopener noreferrer"> <img src={require("./img/GitHub.png")} class="logo" alt="GitHub logo"></img></a>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=cardinalsys00@gmail.com&tf=1" target="_blank" rel="noopener noreferrer"> <img src={require("./img/gmail.png")} class="logo" alt="Gmail logo"></img></a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
