import './App.css';
import { Project } from './components/Projects';

function App() {

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
        <ul>
          <p className="work-text">Works:</p>
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
        </ul>
        <footer className="footer">
        <hr></hr>
          <div class="logo-container">
            <a href ="http://github.com/CardinalSys" target="_blank" rel="noopener noreferrer"> <img src={require("./img/GitHub.png")} class="logo" alt="GitHub logo"></img></a>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=alessandro.benvenuti09@gmail.com&tf=1" target="_blank" rel="noopener noreferrer"> <img src={require("./img/gmail.png")} class="logo" alt="Gmail logo"></img></a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
