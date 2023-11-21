import { combineReducers, legacy_createStore as createStore } from "redux";

import movieReducer from "../store/reducers/movieReducer";
import favoriteReducer from "./reducers/favoriteReducer";

const reducers = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer,
});

export const store = createStore(reducers);
