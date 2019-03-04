import React, { Component } from 'react';
import Movie from "./Movie";
import Header from "./Header"


class MoviesNowPlaying extends Component {
  render() {
    return (
      <div>
        <Header />
        <Movie />
      </div>
    )
  }
}

export default MoviesNowPlaying;