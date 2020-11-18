import React from 'react';
import Button from '@material-ui/core/Button';

function GenericButton(props) {
  return (
    <div>
      <Button variant="contained" color="primary">
        {props.label}
      </Button>      
    </div>
  )
}

export default GenericButton
