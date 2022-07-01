import React from 'react'
import {BrowserRouter  as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Post from './components/Post'
import Addpost from './components/Addpost'

function App() {
  return (
     <Router>
    <div className="App bg-dark">
     <Header /> 


    </div> 
  <Switch> 
        <Route path='/Post' component={Post} />
    <Route path='/Addpost' component={Addpost} />
    <Route path='/'  component ={Body} />
    </Switch></Router> 
  );  
}

export default App;
