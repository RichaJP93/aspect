import React from 'react';
import Button from '@material-ui/core/Button';

const GenericButton = ({type, label}) => (    
  <Button type={type} variant="contained" color="primary">
    {label}
  </Button> 
)


export default GenericButton
