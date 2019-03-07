import React, { Component } from 'react'

class MovieDetails extends Component {
  // const castMembers = castList.map((castMember) =><li>{castMember}</li>)
  render() {
    return (
      <>
        <h2>Trading Paint</h2>
        {/* <h2>{this.props.title}</h2> */}

        <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2//yV9G1nO6YxEWzXblqMUFoS19R9v.jpg" />
        {/* <img src={this.props.urlImg} alt="" /> */}

        <p>Released: Thu Feb 21 2019</p>
        {/* <h3>{this.props.dateMovie}</h3> */}

        <p>Voter Average: 10/10</p>
        {/* <p>{this.props.rating}</p> */}

        <p>
          {' '}
          When Alita awakens with no memory of who she is in a future world she
          does not recognize, she is taken in by Ido, a compassionate doctor who
          realizes that somewhere in this abandoned cyborg shell is the heart
          and soul of a young woman with an extraordinary past.{' '}
        </p>
        {/* <p>{this.props.details}</p> */}

        <p>Starring Cast</p>
        {/* <ul>{castMembers}</ul> */}
        <ul>
          <li>Cast Members</li>
        </ul>
      </>
    )
  }
}

export default MovieDetails
