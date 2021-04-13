import React, { useState } from 'react'
import GameCard from './GameCard.js';
import './CardList.css'

const CardList = () => {

  const [cardSequence, setCardSequence] = useState(['0','1','2','3','5','8','13','20','40','100'])
  
  return (
    <div>
      <ul className='SelectedCards'>
        {cardSequence.map(
          cardValue => (
            <GameCard 
              key={cardValue} 
              value={cardValue}
            />
          )
        )}                
      </ul>   
    </div>
  )  
}

export default CardList;