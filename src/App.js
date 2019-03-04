import React, { Component } from 'react'
import Header from './components/Header'
import Movie from './components/Movie'
import MoviesNowPlaying from './components/MoviesNowPlaying'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Movie} />
            <Route
              exact
              path="/:MoviesNowPlaying"
              component={MoviesNowPlaying}
            />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
