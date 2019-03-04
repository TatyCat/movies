import React, { Component } from 'react'

class MovieDetails extends Component {
  render() {
    return (

      <section>
        <h2>Trading Paint</h2>

        <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2//yV9G1nO6YxEWzXblqMUFoS19R9v.jpg"></img>
        <h3>Released: Thu Feb 21 2019</h3>
        <h2>Voter Average: 10/10</h2>
        <figcaption> Summary goes here </figcaption>

        <h2>Starring Cast</h2>
        <ul>
          <li>The cast goes here</li>
        </ul>
      </section>

    )
  }
}

export default MovieDetails
