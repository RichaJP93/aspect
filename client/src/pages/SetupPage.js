import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import axios from 'axios';


class SetupPage extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      roomCode: '',
      storyToAdd: '',
      storyList: []
    };

    this.storyChange = this.storyChange.bind(this);
    this.storySubmit = this.storySubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.sendStoryList = this.sendStoryList.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  componentDidMount(){
    this.setState({
      roomCode: nanoid(6)
    })
  }

  storyChange = (event) => {
    this.setState({storyToAdd: event.target.value})    
  }

  storySubmit = () => {   
    this.setState(state => {
      const storyList = [...state.storyList, state.storyToAdd];
      return {
        storyList
      }
    })
  }

  handleRemove = (currentItem) => {
    const newList = this.state.storyList.filter(item => item !== currentItem);
    this.setState({
      storyList: newList
    })
  }

  sendStoryList = async () => {    
    try {
      const res = await axios.post('/api/v1/stories', {
        roomCode: this.state.roomCode,
        storyList: this.state.storyList
      }).then((res) => {
        console.log(res);
      })
    } 
    catch (err) {
      console.log(err)
    }
  } 

  createRoom = async () => {
    try {
      this.sendStoryList()
      const res = await axios.post('/api/v1/rooms', {
        roomCode: this.state.roomCode,
        isActive: true,
        adminID: 'admin'
      }).then((res) => {
        console.log(res);
      })
    } 
    catch (err) {
      console.log(err)
    }
  }
  

  render() {
    return (
      <div>
        <p>{this.state.roomCode}</p>
        <form className="storyForm" onSubmit={(e) => { e.preventDefault();}}> 
          <h1>Setup Page</h1>  
          <input type="text" onChange={this.storyChange} />
          <Button type="submit" variant="contained" color="primary" onClick={this.storySubmit}>Add Story</Button>
        </form> 
        <h3>Story list:</h3>
        <ul>
          {this.state.storyList.map(item => (
            <li key={item}>{item} 
              <Button 
                type="button" 
                variant="contained" 
                color="secondary" 
                onClick={() => this.handleRemove(item)}
              >X</Button>
            </li>            
          ))}     
        </ul>
        <Link 
          to={{
            pathname: `/lobby/${this.state.roomCode}`,
            state: {
              roomcode: this.state.roomCode,  
              storylist:this.state.storyList}  
          }}
           >
          <Button type="button"
            variant="contained" 
            color="primary" 
            onClick={this.createRoom}       
          >Submit</Button>
        </Link>
      </div>
    )
  }  
}

export default SetupPage;