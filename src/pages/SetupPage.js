import React from 'react'
import Button from '@material-ui/core/Button';

class SetupPage extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      storyToAdd: '',
      storyList: []
    };
  }

  storyChange = (event) => {
    this.setState({storyToAdd: event.target.value})
  }

  storySubmit = (event) => {
    // event.preventDefault();
    this.setState(state => {
      const storyList = [...state.storyList, state.storyToAdd];
      return {
        storyList
      }
    })
       
  }

  render() {
    return (
      <div>
        <form className="storyForm" onSubmit={(e) => { e.preventDefault();}}> 
          <h1>Setup Page</h1>  
          <input type="text" onChange={this.storyChange} />
          <Button type="submit" variant="contained" color="primary" onClick={this.storySubmit}>Add</Button>
        </form> 
        <ul>
          {this.state.storyList.map(item => (
            <li key={item}>{item}</li>
          ))}     
        </ul>
      </div>
    )
  }  
}

export default SetupPage;