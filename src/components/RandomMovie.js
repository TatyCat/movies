import React, { Component } from 'react';

class randomMovie extends Component {
  render() {
    return (
      <div className="random-movie">
        <section>
          <h2>Have You Seen This Yet?</h2>
          <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/hXgmWPd1SuujRZ4QnKLzrj79PAw.jpg" />

          <h2>Cold Pursuit</h2>
          <p>83%</p>
          <p>Feburary 8, 2019</p>
          <p>
            Nels Coxman's quiet life comes crashing down when his beloved
            son dies under mysterious circumstances. His search for the
            truth soon becomes a quest for revenge as he seeks coldblooded
            justice against a drug lord…
          </p>
          <a href="#">More Information</a>
        </section>
      </div>
    )
  }
}

export default randomMovie;