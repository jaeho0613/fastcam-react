import "./App.css";
import Composition from "./componets/2-4.Props/Composition";
import Extaction from "./componets/2-4.Props/Extraction/Extaction";
import { useEffect, useState } from "react";
import Memo from "./componets/3-8.Memoization/Memo";

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <Memo />
    </div>
  );
};

export default App;
