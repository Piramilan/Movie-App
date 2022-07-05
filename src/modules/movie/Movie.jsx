import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setMovie(location.state?.data);
  }, [location]);

  return (
    <div>
      <div>
        <img src="#" alt="" />
      </div>
      <div>
        <h1>{movie.title}</h1>
        <span>{movie.release_date}</span>
        <p>{movie.overview}</p>
        <ul>
          {movie.genre_ids?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movie;
