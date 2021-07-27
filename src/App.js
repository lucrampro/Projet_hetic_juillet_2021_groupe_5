import React, { useState } from 'react'
import { Login, Home, Details } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { userInfoContext }  from './store'
import './App.scss'
import Notifications from './pages/Notifications'

function App() {
  const [userInfo, setuserInfo] = useState('');
  return (
    <div className="App">
      <userInfoContext.Provider value={{ userInfo, setuserInfo }}>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/accueil" exact component={Home} />
          <Route path="/details/:node" exact component={Details} />
          <Route path="/notifications" exact component={Notifications} />
        </Router>
      </userInfoContext.Provider>
    </div>
  );
}

export default App;
