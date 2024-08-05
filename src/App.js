import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Webrouter } from "./router";


const App = () => {
  return (
    <BrowserRouter>
      <Webrouter />
    </BrowserRouter>
  );
};
export default App;
