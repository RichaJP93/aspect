import React from 'react'
import Button from '@material-ui/core/Button';
// import './RoomCodeForm.css';

class RoomCodeForm extends React.Component {
  constructor(props){
    super(props);
    this.state= {roomCode: ''};
  }
  codeChange = (event) => {
    this.setState({roomCode: event.target.value})
  }
  codeSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.roomCode);
  }
  render() {
    return (
      <form className="roomCodeForm" onSubmit={(e) => { e.preventDefault();}}>
        <p>Have a code already?</p>
        <p>Enter room code here!</p>
        <input type="text" onChange={this.codeChange}/>
        <Button type="submit" variant="contained" color="primary" onClick={this.codeSubmit}>Join</Button>
      </form>      
    )
  }
}

export default RoomCodeForm;