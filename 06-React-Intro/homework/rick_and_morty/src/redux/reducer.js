import {ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL} from "./actions";

const initialState = {
    myFavorites:[]
  };

  function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
          ...state,
          myFavorites: [...state.myFavorites,action.payload]
        }
    }


    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
          ...state,
          myFavorites:state.myFavorites.filter((movie)=>movie.id!==action.payload)
        };
    }
    return {...state};
  }
  
  export default rootReducer;
