import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPost } from '../Apis/posts'
import { useNavigate, useParams } from 'react-router-dom'

const Post = () => {
const {id} = useParams();

  const { isLoading, isError, data:post, error } = useQuery({
    queryKey: ['posts',id],
    queryFn: ()=>fetchPost(id)
  })

  // if (isLoading) return "Loading...";

  // if (isError) return `Error : ${error.message}`;

const navigate = useNavigate()

  return (
    <div>
      <button onClick={()=>navigate('/')}>
        Back
      </button>
      <h2>Post</h2>

      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
    </div>
  )
}

export default Post