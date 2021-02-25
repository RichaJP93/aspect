import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './GameCard.css'

export default function GameCard(props) {

  const handleClick = ()=> {
    cardSubmit(props.value)
  }
  
  const cardSubmit = (value) => {
    console.log(value)   
  }

  return (
    <Card className="gameCard" variant="outlined" onClick={handleClick}>
      <CardContent className="content">
        <Typography>
          {props.value}
        </Typography>        
      </CardContent>   
    </Card>
  )
}
