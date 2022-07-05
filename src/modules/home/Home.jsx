import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../../api/MovieApi";
import { MOVIE_IMAGE_BASE_URL } from "../../constants/AppConstants";
import { APP_ROUTES } from "../../constants/AppRoutes";

import "./_Home.scss";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrendingMovies();
      setData(data);
      return;
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="movies">
      <h1 className="heading">Trending Movies</h1>
      <div className="movie_list">
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
