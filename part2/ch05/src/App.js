import "./App.css";
import { RecoilRoot } from "recoil";
import FontButton from "./components/RecoilExample/tutorial/FontButton";
import Text from "./components/RecoilExample/tutorial/Text";
import CharacterCounter from "./components/RecoilExample/tutorial/CharacterCounter";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <FontButton />
        <Text />
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;
