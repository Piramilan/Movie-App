import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getUpComingMovies } from "../../api/MovieApi";
import { MOVIE_IMAGE_BASE_URL } from "../../constants/AppConstants";

const UpcomingMovies = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUpComingMovies();
      setData(data);
      return;
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <h1>UpcomingMovies Page</h1>
      <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
        {data?.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>

            {/* <img
              src={`${MOVIE_IMAGE_BASE_URL}${item.poster_path}`}
              alt={item.title}
            /> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default UpcomingMovies;
