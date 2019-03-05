import React, { Component } from 'react'

class MovieDetails extends Component {
  render() {
    return (
      <section>
        <h2>Trading Paint</h2>
        {/* <h2>{this.props.title}</h2> */}

        <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2//yV9G1nO6YxEWzXblqMUFoS19R9v.jpg" />
        {/* <img src={this.props.urlImg} alt="" /> */}

        <h3>Released: Thu Feb 21 2019</h3>
        {/* <h3>{this.props.dateMovie}</h3> */}

        <h2>Voter Average: 10/10</h2>
        {/* <h2>{this.props.rating}</h2> */}

        <figcaption>
          {' '}
          When Alita awakens with no memory of who she is in a future world she
          does not recognize, she is taken in by Ido, a compassionate doctor who
          realizes that somewhere in this abandoned cyborg shell is the heart
          and soul of a young woman with an extraordinary past.{' '}
        </figcaption>
        {/* <figcaption>{this.props.details}</figcaption> */}

        <h2>Starring Cast</h2>
        <ul>
          <li>The cast goes here</li>
        </ul>
      </section>
    )
  }
}

export default MovieDetails
