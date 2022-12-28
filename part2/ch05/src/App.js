import "./App.css";
import { RecoilRoot } from "recoil";
import FontButton from "./components/RecoilExample/tutorial/FontButton";
import Text from "./components/RecoilExample/tutorial/Text";
import CharacterCounter from "./components/RecoilExample/tutorial/CharacterCounter";
import TodoList from "./components/RecoilExample/todo/TodoList";
import CurrentUserInfo from "./components/RecoilExample/CurrentUserInfo";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        {/*<FontButton />*/}
        {/*<Text />*/}
        {/*<CharacterCounter />*/}
        <TodoList />
        <CurrentUserInfo />
      </RecoilRoot>
    </div>
  );
}

export default App;
