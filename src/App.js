import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/"  component={Home}/>  
          {/* <Route path="/setup" component={Setup}/> */}
          {/* <Route path="/lobby" component={Lobby}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
