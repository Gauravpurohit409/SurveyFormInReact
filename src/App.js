import logo1 from './tigerClaw.png';
import './App.css';
import CreateSurvey from './components/CreateSurvey';
import TakeSurvey from './components/TakeSurvey';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useRef, useState } from 'react';

function App() {
  const [clicked,setClicked] = useState(false);
  const [moveTo,setMoveTo] = useState("");
  const handleClick = (e)=>{
      setClicked(true);
      console.log(e.target.innerHTML);
      setMoveTo(e.target.innerHTML);
  }
  return (

    <div id ="container">
      <h2><img src ={logo1} />Survey Tiger</h2>

        {clicked ?
          (moveTo === "Create Survey")
          ?
            <CreateSurvey />
          :
           <TakeSurvey />
        :        <div className = "buttonGrp">
        <div className="buttons" onClick = {handleClick} >Create Survey</div>
         <div className="buttons" onClick = {handleClick}>Take Survey</div>
    </div>

        }
    </div>
    
  );
}

export default App;
