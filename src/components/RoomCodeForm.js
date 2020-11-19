import React from 'react'
import Button from '@material-ui/core/Button';


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
      <form onSubmit={(e) => { e.preventDefault();}}>
        <p>Have a code already?</p>
        <p>Enter room code here!</p>
        <input type="text" onChange={this.codeChange}/>
        <p>{this.state.roomCode}</p>
        <Button type="submit" variant="contained" color="primary" onClick={this.codeSubmit}>Join Here!</Button>
      </form>      
    )
  }
}

export default RoomCodeForm;