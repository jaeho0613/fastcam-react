import React, {useState} from 'react';
import {useRecoilValue} from "recoil";
import {currentUserIDState} from "../recoilStore";

function RecoilTest(props) {
  // const id = useRecoilValue(currentUserIDState);
  const [id, setId] = useState("test");
  return (
    <div>{id}</div>
  );
}

export default RecoilTest;