export const ADD_MOVIE_FAVORITE="ADD_MOVIE_FAVORITE"
export const REMOVE_MOVIE_FAVORITE="REMOVE_MOVIE_FAVORITE"
export const FILTER="FILTER"
export const ORDER="ORDER"

const initialState = {
    myFavorites:[],
    allCharacter:[],
  };

  function reducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
          ...state, allCharacters: [...state.allCharacters, action.payload], 
        myFavorites: [...state.allCharacters, action.payload]
        }
    }


    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
          ...state,
          myFavorites:state.myFavorites.filter((movie)=>movie.id!==action.payload)
        };
    }

    if(action.type===FILTER){
      return{
        
      }
    }
    return {...state};
  }
  
  export default reducer;
