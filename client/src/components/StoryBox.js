import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


export default class StoryBox extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.pointsSubmit = this.pointsSubmit.bind(this);
  }

  handleChange = (event) => {   
    this.props.setStoryPoints(event.target.value)
  }

  pointsSubmit = () => {
    this.props.updateStory();
  }
  
  render() {
    return (
      <div>
        <div>
          <h3>Current Story: </h3>
          <p>{this.props.currentStory.description}</p>
        </div>
        <div>
          <input type="text" onChange={this.handleChange} />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            onClick={this.pointsSubmit}
          >Save
          </Button>
        </div>
      </div>       
    )
  }
}
