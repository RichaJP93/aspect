import React from 'react'
import StoryBox from '../components/StoryBox.js'
import UserList from '../components/UserList.js'
import StoryList from '../components/StoryList.js'
import CardList from '../components/CardList.js'
import SelectedCardList from '../components/SelectedCardList.js'
import './GameRoom.css'
import axios from 'axios';


class GameRoom extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      storyList: [],
      storyPoints: '',
      currentStory: ''
    };
  }  
  
  componentDidMount(){
    axios.get(`/api/v1/stories/${this.props.location.state.roomcode}`)
      .then(response => {
        const storyList = response.data.storyList;
        this.setStoryList(storyList);
        this.setCurrentStory(storyList[0].description);
      })
    
  }

  setCurrentStory = (story) => {
    this.setState({
      currentStory: story
    })
  }

  setStoryList = (storyList) => {
    this.setState({
      storyList: storyList
    })
  } 
  
  render() {
    return (
      <div className="GameRoom">        
        <h1>Game Room</h1>
        <div className="CurrentStoryContainer">
          <h3>Current Story: </h3>
          <StoryBox currentStory={this.state.currentStory}/>
        </div>        
        <div className="GameRoomDisplayContainer">
          <div className="UserList" >
            <UserList />
          </div>
          <div className="SelectedCardList">
            <SelectedCardList />
          </div>  
          <div className="StoryList">
            <StoryList storyList={this.state.storyList} setCurrentStory={this.setCurrentStory}/>
          </div>     
        </div>
        <CardList />
      </div>
    )
  }  
}

export default GameRoom;