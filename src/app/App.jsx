import { Routes, Route, Navigate } from "react-router-dom";
import { APP_ROUTES } from "../constants/AppRoutes";
import Home from "../modules/home/Home";
import UpcomingMovies from "../modules/upcomingMovies/UpcomingMovies";
import Page404 from "../modules/errors/Page404";
import DefaultLayout from "../shared/DefaultLayout";
import "./App.scss";
import Movie from "../modules/movie/Movie";

function App() {
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
