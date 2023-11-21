import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../../actions/favoritesActions.js";

const initialState = { favorites: [], displayFavorites: false };

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITE:
      return {
        ...state,
        movies: state.favorites.filter((item) => action.payload !== item.id),
      };
    case ADD_FAVORITE:

    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: action.payload,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
