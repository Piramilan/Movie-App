import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllMoviesGenre } from "../../redux/movieSlice";

import "./_Movie.scss";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [movieGenre, setMovieGenre] = useState([]);
  const location = useLocation();

  const genre = useSelector(getAllMoviesGenre);

  useEffect(() => {
    setMovie(location.state?.data);
    setMovieGenre(genre);
  }, [location, genre]);

  return (
    <div className="container">
      {console.log(movieGenre.genres)}
      <div
        className="bg_image"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMAGE_BASE_URL}${movie?.backdrop_path})`,
        }}
      >
        <img
          className="card_image"
          src={`${process.env.REACT_APP_MOVIE_IMAGE_BASE_URL}${movie?.poster_path}`}
          alt=""
        />
      </div>
      <div className="content">
        <h1 className="title">{movie.title}</h1>
        <span className="release_date">{movie.release_date}</span>
        <p className="overview">{movie.overview}</p>
        <ul className="genre_list">
          {movieGenre.genres?.map((item) =>
            movie.genre_ids.includes(item.id) ? (
              <li className="genre_item" key={item.id}>
                {item.name}
              </li>
            ) : null
          )}
        </ul>
        <span>Vote Average : {movie.vote_average}</span>
      </div>
    </div>
  );
};

export default Movie;
