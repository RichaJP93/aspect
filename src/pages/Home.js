import React from 'react'
import GenericButton from '../components/GenericButton.js';

function Home () {
  return (
    <>
      <h1>Welcome to ASPECT!</h1> 
      <GenericButton label='Create a new room'/>
      <p>
        Have a room code already? <GenericButton label='Join Here!'/>
      </p>   
    </>
  )
}

export default Home;