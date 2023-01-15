import React from 'react';
import {RecoilRoot} from "recoil";
import Calendar from "./componenets/Calendar";

function App() {
  return (
    <RecoilRoot>
      <Calendar/>
    </RecoilRoot>
  );
}

export default App;
