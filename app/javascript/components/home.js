import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <NavLink to={`/greeting`}>Get your greeting!</NavLink>
    </div>
  )
}

export default Home;
