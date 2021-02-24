import React from 'react'
import StoryBox from '../components/StoryBox.js'
import UserList from '../components/UserList.js'
import StoryList from '../components/StoryList.js'
import CardList from '../components/CardList.js'
import SelectedCardList from '../components/SelectedCardList.js'
import './GameRoom.css'


class GameRoom extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      storyPoints: '',
      currentStory: ''
    };
  }  
  
  componentDidMount(){
    this.setCurrentStory(this.props.location.state.storylist[0])
  }

  setCurrentStory = (story) => {
    this.setState({
      currentStory: story
    })
  }

  
  
  render() {
    const data = this.props.location.state
    return (
      <div className="GameRoom">        
        <h1>Game Room</h1>
        <StoryBox currentStory={this.state.currentStory}/>
        <div className="GameRoomDisplayContainer">
          <div className="UserList" >
            <UserList />
          </div>
          <div className="SelectedCardList">
            <SelectedCardList />
          </div>  
          <div className="StoryList">
            <StoryList storylist={data.storylist}/>
          </div>     
        </div>
        <CardList />
      </div>
    )
  }  
}

export default GameRoom;