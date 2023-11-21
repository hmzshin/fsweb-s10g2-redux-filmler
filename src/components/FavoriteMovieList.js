import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFavorite, toggleFavorites } from "../actions/favoritesActions";

const FavoriteMovieList = (props) => {
  const favorites = useSelector((store) => store.favorite.favorites);
  const dispatch = useDispatch();
  const isShow = useSelector((store) => store.favorite.displayFavorites);

  console.log(isShow);

  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5
        className="font-bold flex justify-between hover:cursor-pointer"
        onClick={() => dispatch(toggleFavorites(isShow ? false : true))}
      >
        Favori Filmler <span>{isShow ? "-" : "+"}</span>
      </h5>

      {isShow && (
        <div className="pt-3 text-sm">
          {favorites.map((movie) => (
            <div key={movie.id} className="flex justify-between items-center">
              <Link
                className="py-1 flex gap-2 justify-between"
                to={`/movies/${movie.id}`}
              >
                {movie.title}
              </Link>
              <span
                className="material-icons hover:text-red-600 text-[18px] hover:cursor-pointer"
                onClick={() => dispatch(removeFavorite(movie.id))}
              >
                remove_circle
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMovieList;
