import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../constants/AppRoutes";
import "./_Footer.scss";

const Footer = () => {
  const navigate = useNavigate();

  const changeRoute = (route) => {
    navigate(`/${route}`);
  };

  return (
    <div className="footer">
      <h1 onClick={() => changeRoute(APP_ROUTES.HOME)}>Movie App</h1>
      <p>
        Copyright &copy; 2022 Developed By Milan
      </p>
    </div>
  );
};

export default Footer;
