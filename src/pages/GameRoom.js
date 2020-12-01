import React from 'react'
import StoryBox from '../components/StoryBox.js'
import UserList from '../components/UserList.js'
import StoryList from '../components/StoryList.js'
import CardList from '../components/CardList.js'
import SelectedCardList from '../components/SelectedCardList.js'
import './GameRoom.css'


export default function GameRoom() {
  return (
    <div className="GameRoom">
      <h1>Game Room</h1>
      <StoryBox />
      <div className="GameRoomDisplayContainer">
        <div className="UserList" >
          <UserList />
        </div>
        <div className="SelectedCardList">
          <SelectedCardList />
        </div>  
        <div className="StoryList">
          <StoryList />
        </div>     
      </div>
      <CardList />
    </div>
  )
}
