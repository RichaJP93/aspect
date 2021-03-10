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
        this.setCurrentStory(storyList[0]);
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

  setStoryPoints = (points) => {
    this.setState({
      storyPoints: points
    })
  }

  updateStory = async () => {
    try {
      const res = await axios.put(`/api/v1/stories/${this.state.currentStory._id}`, {
        description: this.state.currentStory.description,
        points: this.state.storyPoints
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
      <div className="GameRoom">        
        <h1>Game Room</h1>
        <div className="CurrentStoryContainer">          
          <StoryBox 
            currentStory={this.state.currentStory} 
            storyPoints={this.state.storyPoints} 
            setStoryPoints={this.setStoryPoints}
            updateStory={this.updateStory}
          />          
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