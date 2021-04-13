import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './GameCard.css'

const GameCard = ({value}) => {

  const handleClick = ()=> {
    cardSubmit(value)
  }
  
  const cardSubmit = (value) => {
    console.log(value)   
  }

  return (
    <Card className="gameCard" variant="outlined" onClick={handleClick}>
      <CardContent className="content">
        <Typography>
          {value}
        </Typography>        
      </CardContent>   
    </Card>
  )
}

export default GameCard;