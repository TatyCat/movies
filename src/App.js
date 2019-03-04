import React, { Component } from 'react'
import Header from './components/Header'
import MoviesNowPlaying from './components/MoviesNowPlaying'
import Movie from './components/Movie'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={MoviesNowPlaying} />
            <Route exact path="/:movie" component={Movie} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
