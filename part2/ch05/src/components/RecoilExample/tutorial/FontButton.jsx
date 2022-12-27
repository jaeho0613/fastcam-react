import { useRecoilState, useRecoilValue } from "recoil";
import { fontSizeLabelState, fontSizeState } from "./store";
import { textState } from "./CounterStore";

function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  const [text, setText] = useRecoilState(textState);

  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>

      <button
        onClick={() => setFontSize((size) => size + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge ${text}
      </button>
    </>
  );
}

export default FontButton;
