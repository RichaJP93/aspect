import React, { Component } from 'react'

export default class StoryBox extends Component {
  
  render() {
    return (
      <div>
        <p>{this.props.currentStory}</p>
      </div>
    )
  }
}
