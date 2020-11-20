import React, { Component } from 'react'
import Card from './Card.js';
import './CardList.css'

export default class SelectedCardList extends Component {
  render() {
    return (
      <div className='SelectedCards'>
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}
