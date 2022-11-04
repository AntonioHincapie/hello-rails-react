import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { getGreetings } from "../redux/reducers/greetings";

const Greetings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);
  console.log(greeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return (
    <div>
      <h1>
        {greeting}
      </h1>
      <NavLink to={`/`}>Back</NavLink>
    </div>
  )
};

export default Greetings;
