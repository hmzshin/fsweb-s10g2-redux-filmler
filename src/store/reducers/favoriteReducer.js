import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../../actions/favoritesActions.js";

const initialState = { favorites: [], displayFavorites: false };

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    // case REMOVE_FAVORITE:
    //   return {
    //     ...state,
    //     movies: state.movies.filter((item) => action.payload !== item.id),
    //   };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default favoriteReducer;
