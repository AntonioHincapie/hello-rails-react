import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getGreetings } from "../redux/reducers/greetings";

const Home = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings);
  console.log(greeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return (
    <div>
      <h1>Welcome!</h1>
      <NavLink to={`/greeting`}>Get your greeting!</NavLink>
    </div>
  )
}

export default Home;
