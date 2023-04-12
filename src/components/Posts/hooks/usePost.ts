"use client"; // this is a client component

// Container Component

import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Post as PostType } from "../type/post";

export const usePost = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | unknown>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const res: AxiosResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data: PostType[] = await res.data;
        setPosts(data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
    
    return {
        posts, isLoading, error
    }
};
