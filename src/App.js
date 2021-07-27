import React, { useState } from 'react'
import { Login, Home, Details } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { userInfoContext }  from './store'
import './App.scss'
import Notifications from './pages/Notifications'
import { BarChart } from './components'
import { Header } from "./components";

function App() {
  const [userInfo, setuserInfo] = useState('');
  return (
    <div className="App">/
      <userInfoContext.Provider value={{ userInfo, setuserInfo }}>
        <Router>
          <Route path="/" exact component={Login} />
          <Header />
          <Route path="/accueil" exact component={Home} />
          <Route path="/lieux-commun/:type" exact component={BarChart} />
          <Route path="/details/:node" exact component={Details} />
          <Route path="/notifications" exact component={Notifications} />
        </Router>
      </userInfoContext.Provider>
    </div>
  );
}

export default App;
