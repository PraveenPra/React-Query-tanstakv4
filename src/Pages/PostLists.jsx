import React from 'react'
import AddPost from '../Components/AddPost'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../Apis/posts'

import { useNavigate } from "react-router-dom";

const PostLists = () => {
const navigate = useNavigate()
  const { isLoading, isError, data:posts, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })

  if (isLoading) return "Loading...";

  if (isError) return `Error : ${error.message}`;

  return (
    <div style={{
      width:'100vw',
      display:'flex',
      justifyContent:'space-around',
      flexWrap:'wrap',
      alignItems:'center',
      // flexDirection:'column',
      border:'1px solid red'
    }}>
      <AddPost />

     

      <div style={{
        background:'#ddd',
        padding:'2rem',
      }}>
      <h3><u>Posts</u></h3>
        {posts?.map((post) => (
          <div key={post.id} onClick={()=>navigate(`/post/${post.id}`)} style={{
            cursor:'pointer'
          }}>
            <h4>{post.id}. {post.title}</h4>

            <button>Edit</button>
            <br/><br/>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostLists