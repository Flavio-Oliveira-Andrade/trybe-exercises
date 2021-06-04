import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    const { categories } = this.props;
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
                        onClick={ () => {}}
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

export default SideBar;
