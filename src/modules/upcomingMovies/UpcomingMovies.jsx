import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getUpComingMovies } from "../../api/MovieApi";
import { MOVIE_IMAGE_BASE_URL } from "../../constants/AppConstants";

import "./_UpcomingMovies.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addUpcomingMovies,
  getAllUpcomingMovies,
} from "../../redux/movieSlice";

const UpcomingMovies = () => {
  const [data, setData] = useState();

  const movieData = useSelector(getAllUpcomingMovies);

  useEffect(() => {
    setData(movieData);
  }, []);

  return (
    <div className="container">
      <h1 className="heading">UpcomingMovies</h1>
      <Carousel
        className="carousel"
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
      >
        {data?.map((item) => (
          <div key={item.id} className="carousel_div">
            {/* <h1>{item.title}</h1> */}

            <img
              className="carousel_image"
              src={`${MOVIE_IMAGE_BASE_URL}${item.poster_path}`}
              alt={item.title}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default UpcomingMovies;
