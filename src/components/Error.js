import React from 'react'
import { useRouteError } from 'react-router';


const ErrorPage = () => {


  const {status,statusText} = useRouteError();


  return (
    <div className='error-container'>
      <h1>{status}</h1>
      <h2>Oops... page not found</h2>
      <h3>We dont know how you ended up here, but you should go away</h3>
    </div>
  )
}

export default ErrorPage;
