import React, { useEffect, useState } from "react";
import Comments from "./Comments";

const commentList = [
  { title: "commnet1", content: "message1", likes: 1 },
  { title: "commnet2", content: "message2", likes: 1 },
  { title: "commnet3", content: "message3", likes: 1 },
];

function Memo(props) {
  const [comments, setComments] = useState(commentList);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setComments((prevComments) => [
  //       ...prevComments,
  //       {
  //         title: `comment${prevComments.length + 1}`,
  //         content: `message${prevComments.length + 1}`,
  //         likes: 1,
  //       },
  //     ]);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div>
      <Comments commentList={comments} />
    </div>
  );
}

export default Memo;
