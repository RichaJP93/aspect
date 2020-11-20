import React, { Component } from 'react'
import Card from './Card.js';
import './CardList.css'

export default class CardList extends Component {
  render() {
    return (
      <div>
        <ul className='SelectedCards'>
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    )
  }
}
