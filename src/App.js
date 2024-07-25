import React from "react";
import RoutesIndex from "./routes";
import "../src/assets/scss/_style.scss";
import "./helpers/axios-middleware";
const App = () => {
  return (
    <div className="App">
      <RoutesIndex />
    </div>
  );
};

export default App;
