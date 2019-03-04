
import React, { Component } from 'react'
import MovieData from './components/MovieData'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Switch>
          <Route exact path="/" component={MovieData}/>
     </Switch>
     </Router>
      </>
    )
  }
}

export default App
