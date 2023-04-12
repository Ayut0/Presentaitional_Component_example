"use client"; // this is a client component

import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// This is an example that we should not follow

const NonSeparated = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | unknown>(false);

  // Logic part
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const res: AxiosResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data: Post[] = await res.data;
        setPosts(data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Presentation part
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
          {posts?.map((post: Post) => (
            <li key={`item-${post.id}`}>
              <span>{post.title}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span>{JSON.stringify(error)}</span>
      )}
    </>
  );
};

export default NonSeparated;
