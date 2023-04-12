"use client"; // this is a client component

import React from 'react'
import Posts from './Posts'
import { usePost } from './hooks/usePost';


const PresentationPost = () => {
    const { posts } = usePost();
  return (
   <Posts posts={posts} />
  )
}

export default PresentationPost