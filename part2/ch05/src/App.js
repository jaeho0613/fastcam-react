import "./App.css";
import { RecoilRoot } from "recoil";
import FontButton from "./components/RecoilExample/tutorial/FontButton";
import Text from "./components/RecoilExample/tutorial/Text";
import CharacterCounter from "./components/RecoilExample/tutorial/CharacterCounter";
import TodoList from "./components/RecoilExample/todo/TodoList";
import CurrentUserInfo from "./components/RecoilExample/CurrentUserInfo";
import RecoilTest from "./components/RecoilExample/tutorial/RecoilTest";
import ModalProvider from "./components/RecoilExample/contextApi/ModalProvider";
import Modal from "./components/RecoilExample/contextApi/Modal";

function App() {
  return (
    <div className="App">
        {/*<FontButton />*/}
        {/*<Text />*/}
        {/*<CharacterCounter />*/}
      {/*<TodoList />*/}
      {/*<RecoilRoot>*/}
      {/*  <CurrentUserInfo />*/}
      {/*  <RecoilTest />*/}
      {/*</RecoilRoot>*/}

      <ModalProvider>
        <Modal />
      </ModalProvider>
    </div>
  );
}

export default App;
