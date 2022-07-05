import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../constants/AppRoutes";
import "./_Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const changeRoute = (route) => {
    navigate(`/${route}`);
  };

  return (
    <header>
      <div className="header_nav">
        <div className="logo">
          <h1 onClick={() => changeRoute(APP_ROUTES.HOME)}>Movie App</h1>
        </div>
        <div className="nav_links">
          <ul className="nav_list">
            <li onClick={() => changeRoute(APP_ROUTES.HOME)}>Home</li>
            <li onClick={() => changeRoute(APP_ROUTES.UPCOMING_MOVIES)}>
              UpComing Movies
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
