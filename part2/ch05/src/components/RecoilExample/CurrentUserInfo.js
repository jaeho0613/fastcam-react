import React, {useState} from "react";
import {atom, selectorFamily, useRecoilState, useRecoilValue, useRecoilValueLoadable} from "recoil";
import axios from "axios";
import {currentUserIDState} from "./recoilStore";

// const currentUserIDState = atom({
//   key: "CurrentUserID",
//   default: 2,
// });
//
// const tableOfUsers = [{ name: "jimy" }, { name: "choi" }];

// const currentUserNameState = selector({
//   key: "CurrentUserName",
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

const currentUserNameQuery = selectorFamily({
  key: "CurrentUserName",
  get: (id) => async () => {
    const response = await axios.get(`/api/user-name?id=${id}`);
    return response.data.name;
  },
  // cachePolicy_UNSTABLE: {eviction: "most-recent"} // 캐싱 처리를 하지 않고 계속 해서 refresh
});

function CurrentUser(props) {
  // const userName = useRecoilValue(currentUserNameQuery(1));
  const id = useRecoilValue(currentUserIDState);
  // return <div>{userName}
  //     {/*<input type={"text"} onChange={(e) => { setId(e.target.value) }}/>*/}
  //   </div>
  // ;


  const userName = useRecoilValueLoadable(currentUserNameQuery(id));
  if (userName.state === 'loading') {
    return <div style={{background: "red"}}>로딩중</div>
  }

  if (userName.state === 'hasError') {
    return <div style={{background: "blue"}}>에러</div>
  }

  return <div>{userName.contents}</div>
}

// export default CurrentUserInfo;

export default function CurrentUserInfo() {
  const [id, setId] = useRecoilState(currentUserIDState);
  return (
    // <ErrorBoundary>
    //   <React.Suspense fallback={<div>Loading...</div>}>
    <>
      <CurrentUser/>
      <input type={"text"} onChange={(e) => { setId(e.target.value)}}/>
    </>
    // </React.Suspense>
    // </ErrorBoundary>
  );
}
