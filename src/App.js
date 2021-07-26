import React, { useState } from 'react'
import { Login, Home } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { userInfoContext }  from './store'
import './App.scss'

function App() {
  const [userInfo, setuserInfo] = useState('');
  return (
    <div className="App">
    <userInfoContext.Provider value={{userInfo ,setuserInfo}}>
      <Router>

        <Route path="/" exact component={Login}/>
        <Route path="/accueil" exact component={Home}/>
      </Router>
    </userInfoContext.Provider>
    </div>
  );
}

export default App;
