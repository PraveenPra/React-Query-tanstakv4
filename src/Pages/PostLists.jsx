import React from 'react'
import AddPost from '../Components/AddPost'
import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import { deletePost, fetchPosts } from '../Apis/posts'

import { useNavigate } from "react-router-dom";

const PostLists = () => {
const navigate = useNavigate()

const queryClient = useQueryClient()

  const { isLoading, isError, data:posts, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })

  // if (isLoading) return "Loading...";

  // if (isError) return `Error : ${error.message}`;

  const {mutate} = useMutation({
    mutationFn: deletePost,
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })

  const handleDeletePost = (id)=>{
mutate(id)
  }

  return (
    <div style={{
      width:'100vw',
      display:'flex',
      // justifyContent:'space-around',
      gap:'20px',
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
          <div key={post.id}  style={{
            width:'100%',
            // cursor:'pointer',
            display:'flex',
            justifyContent:'space-evenly'
          }}>
            <h4 onClick={()=>navigate(`/post/${post.id}`)} 
            style={{color:'blue',cursor:'pointer'}}>{post.id}. {post.title}</h4>

            <button style={{
               cursor:'pointer',
               background:'orange',
               color:'white'
            }} onClick={()=>navigate(`/post/${post.id}/edit`)}
            disabled={isLoading}>Edit</button>
            <br/><br/>
            <button style={{
               cursor:'pointer',
               background:'red',
               color:'white'
            }} onClick={()=>handleDeletePost(post.id)} 
            disabled={isLoading}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostLists