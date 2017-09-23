import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TransitionGroup from "react-transition-group/TransitionGroup";
import Login from './components/Login'
import SaveTheDate from './components/SaveTheDate'
import './App.css'
import PropTypes from 'prop-types'

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

const Main = () => (
  <Switch>
    <Route exact path="/" children={({ match, ...rest }) => (
      <TransitionGroup component={firstChild}>
        {match && <Login {...rest} />}
      </TransitionGroup>
    )}/>
    <Route exact path="/save_the_date" children={({ match, ...rest }) => (
      <TransitionGroup component={firstChild}>
        {match && <SaveTheDate {...rest} />}
      </TransitionGroup>
    )}/>
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

  static propTypes = {

  }
}

export default App;
