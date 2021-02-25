import React from 'react';
import Button from '@material-ui/core/Button';

function GenericButton(props) {
  return (    
    <Button type={props.type} variant="contained" color="primary">
      {props.label}
    </Button> 
  )
}

export default GenericButton
