
import React, { Component } from 'react'

//API key is: c7519dda6166314cd0297ca58edc6207

class Movie extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.props.urlImg}`}></img>
        <p>Released: {this.props.dateMovie}</p>
        <p>Voter Average: {this.props.rating}/10</p>
        <p>{this.props.detail}</p>
        <a href="#">More Information</a>
      </article>
    )
  }
}

export default Movie
