import React, { Component } from 'react'
import Header from './components/Header'
import MoviesNowPlaying from './components/MoviesNowPlaying'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MoviesNowPlaying />
      </>
    )
  }
}

export default App
