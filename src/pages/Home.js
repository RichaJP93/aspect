import React from 'react';
import Button from '@material-ui/core/Button';
import RoomCodeForm from '../components/RoomCodeForm.js';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Home.css'


function Home () {

  const genRoomCode = () => {
		console.log(uuidv4());
	};

  return (
    <div className="homePage">
      <h1>Welcome to ASPECT!</h1>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={genRoomCode}
      >
        Create a new room
      </Button>
      <RoomCodeForm />  
      <Link to="/lobby">Lobby</Link>        
    </div>
  )
}

export default Home;