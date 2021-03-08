import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import SetupPage from './pages/SetupPage.js'
import GameRoom from './pages/GameRoom.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from 'react';


class App extends Component {
  state = {
    data: null
  };

  // componentDidMount() {
  //   this.callAPI()
  //     .then(res => console.log(res.express))
  //     .catch(err => console.log(err));
  // }

  // callAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // }

  render(){
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>  
            <Route path="/setup" component={SetupPage}/>
            <Route path="/lobby" component={GameRoom}/>
          </Switch>
        </Router>
      </>
    );
  }
  
}

export default App;
