import React from 'react'

const StoryList = ({setCurrentStory, storyList}) => {
  
  const handleClick = (item) => {    
    setCurrentStory(item)
  }

  return (
    <div>
      <ul>
        {storyList.map(story => <li key= {story._id} onClick={() => handleClick(story)}>{story.description}</li>)}
      </ul>
    </div>
  )  
}

export default StoryList;