import React, { Component } from 'react'

export default class StoryList extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item){    
    this.props.setCurrentStory(item)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.storylist.map(item => (
            <li key={item} onClick={() =>this.handleClick(item)}>{item}</li>            
          ))}     
        </ul>
      </div>
    )
  }
}
