import './sass/main.scss';
import AddTutorial from './pages/addTutorial';
import Home from './pages/Home';
import TutorialDetails from './pages/TutorialDetails';
import ModifyTutorial from './pages/ModifyTutorial'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="container">
      <div className="row">
        <Router>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/add-new-tutorial" exact component={AddTutorial}/>
          <Route path="/tutorial-details" exact component={TutorialDetails}/>
          <Route path="/modify-tutorial" exact component={ModifyTutorial}/>
          </Switch>
        </Router>
      </div>
    
    </div>
  );
}

export default App;
