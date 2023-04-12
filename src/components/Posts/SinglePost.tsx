import React from "react";
import { Post as PostType } from "./type/post";

const SinglePost = (props: { singlePost: PostType }) => {
  return (
    <li>
      <span>{props.singlePost.title}</span>
    </li>
  );
};

export default SinglePost;
