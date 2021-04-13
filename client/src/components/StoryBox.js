import React from 'react';
import Button from '@material-ui/core/Button';


const StoryBox = ({storyPoints, setStoryPoints, updateStory, currentStory}) => {
  
  const handleChange = (event) => {   
    setStoryPoints(event.target.value)
  }

  const pointsSubmit = () => {
    updateStory();
  }
  
  return (
    <div>
      <div>
        <h3>Current Story: </h3>
        <p>{currentStory.description}</p>
      </div>
      <div>
        <input type="text" onChange={handleChange} />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          onClick={pointsSubmit}
        >Save
        </Button>
      </div>
    </div>       
  )
}

export default StoryBox;