import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import SaveTheDate from './components/SaveTheDate'
import my404Component from './components/my404Component'
import './App.css'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/save_the_date' component={SaveTheDate}/>
    <Route path="*" component={my404Component} />
  </Switch>
)

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
