import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MOVIE_IMAGE_BASE_URL } from "../../constants/AppConstants";
import { APP_ROUTES } from "../../constants/AppRoutes";
import { getAllTrendingMovies } from "../../redux/movieSlice";

import "./_Home.scss";

const Home = () => {
  const [data, setData] = useState([]);

  const movieData = useSelector(getAllTrendingMovies);

  useEffect(() => {
    setData(movieData);
  }, [movieData]);

  return (
    <div className="movies">
      <h1 className="heading">Trending Movies</h1>
      <div className="movie_list">
        {console.log(data)}
        {data?.map((item) => (
          <Link
            to={`/${APP_ROUTES.MOVIE}/${item.id}`}
            state={{ data: item }}
            key={item.id}
            className="movie_link"
          >
            <div className="movie_card">
              <img
                src={`${MOVIE_IMAGE_BASE_URL}${item.poster_path}`}
                alt={item.title}
              />
              <h1>{item.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
