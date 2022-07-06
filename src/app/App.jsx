import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { APP_ROUTES } from "../constants/AppRoutes";
import Home from "../modules/home/Home";
import UpcomingMovies from "../modules/upcomingMovies/UpcomingMovies";
import Page404 from "../modules/errors/Page404";
import DefaultLayout from "../shared/DefaultLayout";
import "./App.scss";
import Movie from "../modules/movie/Movie";
import {
  getMoviesGenre,
  getTrendingMovies,
  getUpComingMovies,
} from "../api/MovieApi";
import { useDispatch } from "react-redux";
import {
  addMoviesGenre,
  addTrendingMovies,
  addUpcomingMovies,
} from "../redux/movieSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const trendingMovies = await getTrendingMovies();
      const genre = await getMoviesGenre();
      const upcomingMovies = await getUpComingMovies();
      dispatch(addTrendingMovies(trendingMovies));
      dispatch(addMoviesGenre(genre));
      dispatch(addUpcomingMovies(upcomingMovies));

      return;
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="app">
      <DefaultLayout>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/${APP_ROUTES.HOME}`} replace={true} />}
          />
          <Route path={`/${APP_ROUTES.HOME}`} element={<Home />} />
          <Route path={`${APP_ROUTES.MOVIE}/:id`} element={<Movie />} />
          <Route
            path={`/${APP_ROUTES.UPCOMING_MOVIES}`}
            element={<UpcomingMovies />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
