import React, { Component } from 'react'
import Movie from '../components/Movie'
import Header from '../components/Header'
import RandomMovie from '../components/RandomMovie'

//API key is: c7519dda6166314cd0297ca58edc6207

class MovieData extends Component {
  state = {
    moviesdata: []
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=c7519dda6166314cd0297ca58edc6207'
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          moviesdata: data.results
        })
      })
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <RandomMovie />

          {this.state.moviesdata
            .sort(
              (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
            )
            .map(movie => {
              return (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  dateMovie={new Date(movie.release_date).toDateString()}
                  detail={movie.overview}
                  urlImg={movie.poster_path}
                  rating={movie.vote_average}
                />
              )
            })}
        </main>
      </>
    )
  }
}

export default MovieData;