import React from 'react'
import GenericButton from '../components/GenericButton.js';
import RoomCodeForm from '../components/RoomCodeForm.js'

function Home () {
  return (
    <>
      <h1>Welcome to ASPECT!</h1> 
      <GenericButton label='Create a new room'/>
      <RoomCodeForm />     
    </>
  )
}

export default Home;