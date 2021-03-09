import React, { Component } from 'react'

export default class StoryList extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item){    
    this.props.setCurrentStory(item.description)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.storyList.map(story => <li key= {story._id} onClick={() =>this.handleClick(story)}>{story.description}</li>)}
        </ul>
      </div>
    )
  }
}
