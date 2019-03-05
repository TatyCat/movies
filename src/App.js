import React, { Component } from 'react'
import MovieData from './components/MovieData'
// import MovieDetails from '.components/MovieDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={MovieData} />
            {/* <Route exact path="/:movie" component={MovieDetails} /> */}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
