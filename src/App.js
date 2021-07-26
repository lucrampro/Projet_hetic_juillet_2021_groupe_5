import { Login, Home, Assistance } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Route path="/connexion" exact component={Login}/>
        <Route path="/accueil" exact component={Home}/> */}
        <Assistance/>
      </Router>
    </div>
  );
}

export default App;
