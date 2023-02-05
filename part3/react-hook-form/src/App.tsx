/**
 * @description
 * @author
 * @since 2023-02-5, 일, 16:37
 */
import DefaultUseHookForm from "./componets/00_Introduction/DefaultUseHookForm";
import DepthFormHook from "./componets/00_Introduction/DepthFormHook";
import HookUseForm from "./componets/01_RegisterFields/HookUseForm";
import HookUseForm2 from "./componets/01_RegisterFields/HookUseForm2";

function App() {
  return (
    <>
      <h2>00. Introduction</h2>
      <DefaultUseHookForm />
      <DepthFormHook />

      <hr/>
      <h2>01. RegisterFields</h2>
      <HookUseForm />
      <HookUseForm2 />

    </>
  )
}

export default App;