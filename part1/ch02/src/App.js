import "./App.css";
import { useEffect, useState } from "react";
import Example from "./componets/3-10.Context.js/Example";

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <Example />
      {/*<Memo />*/}
    </div>
  );
};

export default App;
