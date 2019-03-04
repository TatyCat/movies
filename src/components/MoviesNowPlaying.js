<<<<<<< HEAD
import React, { Component } from 'react';
import Movie from "./Movie"
=======
import React, { Component } from 'react'
import Movie from './Movie'
import Header from './Header'
import axios from 'axios'
>>>>>>> refs/remotes/origin/master

//API key is: c7519dda6166314cd0297ca58edc6207

class MoviesNowPlaying extends Component {
  render() {
    return (
      <div>
        <Movie />
      </div>
    )
  }
}

export default MoviesNowPlaying
