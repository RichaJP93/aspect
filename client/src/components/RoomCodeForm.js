import React from 'react'
import Button from '@material-ui/core/Button';
// import './RoomCodeForm.css';
import { withRouter } from "react-router-dom";

class RoomCodeForm extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      roomCode: ''
    };
    this.codeChange = this.codeChange.bind(this);
    this.codeSubmit = this.codeSubmit.bind(this);
  }

  codeChange = (event) => {
    this.setState({roomCode: event.target.value})
  }
  codeSubmit = () => {
    this.props.history.push(`/lobby/${this.state.roomCode}`)
  }

  render() {
    return (
      <div>
        <p>Have a code already?</p>
        <p>Enter the room code here!</p>
        <input type="text" onChange={this.codeChange}/>
        <Button 
          variant="contained" 
          color="primary"
          onClick={this.codeSubmit}
        >Join</Button>
      </div>   
    )
  }
}

export default withRouter(RoomCodeForm);