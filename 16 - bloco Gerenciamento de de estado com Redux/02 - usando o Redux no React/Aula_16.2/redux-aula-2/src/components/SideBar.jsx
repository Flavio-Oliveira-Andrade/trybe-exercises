import React, { Component } from 'react'
import { connect } from 'react-redux';
import movieActions from '../redux/actions/movieActions'

class SideBar extends Component {
  render() {
    const { categories, selectMovie } = this.props;
    return (
      <aside>
        {
          categories.map((category) => (
            <div key={category.id }>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map((movie) => (
                    <li key={movie.id }>
                      {movie.title}
                      {' '}
                      was release in
                      {' '}
                      {movie.released}
                      <button
                        type="button"
                        onClick={ () => selectMovie(category, movie) }
                      >
                        select
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.movies.categories,

})

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (category, movie) => dispatch(
    movieActions(movie, category),
  )

})
export default connect(mapStateToProps, mapDispatchToProps) (SideBar);
