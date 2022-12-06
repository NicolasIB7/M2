export const ADD_MOVIE_FAVORITE="ADD_MOVIE_FAVORITE"
export const REMOVE_MOVIE_FAVORITE="REMOVE_MOVIE_FAVORITE"


const apikey= "6fd09f9a"


export function addMovieFavorite(id) {
    return { type: ADD_MOVIE_FAVORITE, payload:id };
  }

  export function removeMovieFavorite(id) {
    return { type: REMOVE_MOVIE_FAVORITE, payload:id };
  }
  