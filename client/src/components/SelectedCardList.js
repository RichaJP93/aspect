import React, { Component } from 'react'
import GameCard from './GameCard.js';
import './CardList.css'

export default class SelectedCardList extends Component {
  render() {
    return (
      <div className='SelectedCards'>
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    )
  }
}
