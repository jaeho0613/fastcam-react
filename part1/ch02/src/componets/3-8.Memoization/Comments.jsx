import React, { useCallback } from "react";
import CommentItem from "./CommentItem";

function Comments({ commentList }) {
  const handleClick = useCallback(() => {
    console.log("눌림");
  }, []);

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Comments;
