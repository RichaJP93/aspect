import React, { Component } from 'react'
import Card from './Card.js';
import './CardList.css'

export default class CardList extends Component {
  constructor(props){
    super(props);
    this.state= {
      cardSequence: ['0','1','2','3','5','8','13','20','40','100']
    };
  }
  render() {
    return (
      <div>
        <ul className='SelectedCards'>
          {this.state.cardSequence.map(cardValue => (<Card key={cardValue} value={cardValue}/>))}                
        </ul>   
      </div>
    )
  }
}
