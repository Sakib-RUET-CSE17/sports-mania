import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';
import LeagueExplore from './components/LeagueExplore/LeagueExplore';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/league/:id">
          <LeagueExplore />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
