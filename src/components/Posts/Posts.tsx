"use client"; // this is a client component

// Presentational Component

import React from "react";
import { usePost } from "./hooks/usePost";
import { Post as PostType } from "./type/post";
import SinglePost from "./SinglePost";

const Posts = (props: { posts: PostType[] | null }) => {
  const { posts, isLoading, error } = usePost();
  return (
    <>
      {isLoading ? (
        <span>Loading.....</span>
      ) : { posts } ? (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {props.posts?.map((post: PostType) => (
            <SinglePost singlePost={post} key={`item-${post.id}`} />
          ))}
        </ul>
      ) : (
        <span>{JSON.stringify(error)}</span>
      )}
    </>
  );
};

export default Posts;
