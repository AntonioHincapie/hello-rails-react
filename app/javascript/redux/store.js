import { greetingsReducer } from "./reducers/greetings";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  }
});

export default store;
