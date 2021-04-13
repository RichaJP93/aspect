import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
// import './RoomCodeForm.css';
import { withRouter } from "react-router-dom";

const RoomCodeForm = ({history}) => {
  
  const [roomCode, setRoomCode] = useState('')

  const codeChange = (event) => {
    setRoomCode({roomCode: event.target.value})
  }

  const codeSubmit = () => {
    history.push(`/lobby/${roomCode.roomCode}`)
  }

  return (
    <div>
      <p>Have a code already?</p>
      <p>Enter the room code here!</p>
      <input type="text" onChange={codeChange}/>
      <Button 
        variant="contained" 
        color="primary"
        onClick={codeSubmit}
      >Join</Button>
    </div>   
  )

}

export default withRouter(RoomCodeForm);