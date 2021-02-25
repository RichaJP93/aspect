import React from 'react';
import Button from '@material-ui/core/Button';
import RoomCodeForm from '../components/RoomCodeForm.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Home.css'


function Home () {  

  return (
    <div className="homePage">
      <h1>Welcome to ASPECT!</h1>      
      <Link to="/setup">
        <Button 
          variant="contained" 
          color="primary" 
        >
          Create a new room
        </Button>
      </Link>  
      <RoomCodeForm />  
      <Link to="/lobby">Lobby</Link>        
    </div>
  )
}

export default Home;