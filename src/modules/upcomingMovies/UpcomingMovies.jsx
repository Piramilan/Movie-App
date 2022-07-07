import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./_UpcomingMovies.scss";
import { useSelector } from "react-redux";
import { getAllUpcomingMovies } from "../../redux/movieSlice";

const UpcomingMovies = () => {
  const [data, setData] = useState();

  const movieData = useSelector(getAllUpcomingMovies);

  useEffect(() => {
    setData(movieData);
    console.log(movieData);
  }, [movieData]);

  return (
    <div className="container">
      <h1 className="heading">Upcoming Movies</h1>
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
              src={`${process.env.REACT_APP_MOVIE_IMAGE_BASE_URL}${item.poster_path}`}
              alt={item.title}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default UpcomingMovies;
