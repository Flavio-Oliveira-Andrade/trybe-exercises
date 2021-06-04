import React, { Component } from 'react'

class Player extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h1>
          { movie.title }
        </h1>
        <h3>
          {/* { selectCategory } */}
          {' '}
          -
          {' '}
          {movie.release}
        </h3>
        <section>
          <iframe
            title='trailers'
            width='420'
            height='315'
            src={ movie.link }
          />
        </section>
      </div>
    )
  }
}
export default Player;
