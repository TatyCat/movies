
import React, { Component } from 'react'
import Movie from './components/Movie'
import Header from './components/Header'


class App extends Component {
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

export default App




// import React, { Component } from 'react'
// import Header from './components/Header'
// import Movie from './components/Movie'
// import MoviesNowPlaying from './components/MoviesNowPlaying'

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Header />
//         <Router>
//           <Switch>
//             <Route exact path="/" component={Movie} />
//             <Route
//               exact
//               path="/:MoviesNowPlaying"
//               component={MoviesNowPlaying}
//             />
//           </Switch>
//         </Router>
//       </>
//     )
//   }
// }

// export default App
