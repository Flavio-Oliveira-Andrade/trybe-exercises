import categoriesData from '../../data'
import SELECT_MOVIE from '../actions' ;

const INITIAL_STATE = {
  selectedMovies: {},
  selectedCategory: {},
  categories: categoriesData,
}



function movieReducer(state = INITIAL_STATE, action){
  switch(action.type) {
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovies: action.payload.selectedMovies,
        selectedCategory: action.payload.selectedCategory,
      };
    default:
      return state;

  }
}

export default movieReducer;
