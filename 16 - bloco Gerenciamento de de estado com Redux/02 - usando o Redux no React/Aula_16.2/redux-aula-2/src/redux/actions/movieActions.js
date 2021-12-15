import SELECT_MOVIE from '../actions'

function selectMovie(movie, category){
  return{
    type: SELECT_MOVIE,
    payload:{
      selectedMovie: movie,
      selectedCategory: category,
    },
  }

}
export default selectMovie;