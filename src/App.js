import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import SetupPage from './pages/SetupPage.js'
import GameRoom from './pages/GameRoom.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
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

export default App;
