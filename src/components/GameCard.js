import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './GameCard.css'

export default function GameCard(props) {
  const cardSubmit = (event) => {
    event.preventDefault();
    console.log(props.value);
  }

  return (
    <Card className="gameCard" variant="outlined" onClick={cardSubmit}>
      <CardContent className="content">
        <Typography>
          {props.value}
        </Typography>        
      </CardContent>   
    </Card>
  )
}
