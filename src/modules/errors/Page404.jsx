import React from 'react'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../constants/AppRoutes';
import "./_Page404.scss"

const Page404 = () => {

  const navigate = useNavigate();

  const changeRoute = (route) => {
    navigate(`/${route}`);
  };

  return (
    <div className='not_found'>
      <h1 className='error'>404</h1>
      <p className='message'>Opps! The Page You Requested was not Found!</p>
      <h4 className="back" onClick={() => changeRoute(APP_ROUTES.HOME)}>Back to Home</h4>
      </div>
  )
}

export default Page404