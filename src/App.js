import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import SaveTheDate from './components/SaveTheDate'
import './App.css'
import PropTypes from 'prop-types'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/save_the_date' component={SaveTheDate}/>
  </Switch>
)

class App extends Component {

  render() {
    return (
      // <div className="container">
      //   <Router history={browserHistory}>
      //     <Route path="/" component={Login}/>
      //     <Route path="/save_the_date" component={SaveTheDate}/>
      //   </Router>
      // </div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }

  static propTypes = {

  }
}

export default App;
