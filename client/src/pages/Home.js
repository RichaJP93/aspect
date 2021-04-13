import React from 'react';
import Button from '@material-ui/core/Button';
import RoomCodeForm from '../components/RoomCodeForm.js';
import { Link } from "react-router-dom";
import './Home.css'


const Home = () => {  

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
    </div>
  )
}

export default Home;