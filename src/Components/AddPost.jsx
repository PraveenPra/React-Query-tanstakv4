import React from 'react'
import PostForm from './PostForm'
import { useMutation } from '@tanstack/react-query'
import { createPost } from '../Apis/posts'

const AddPost = () => {

  const { mutate } = useMutation({
    mutationFn: createPost
  })

  const handleCreate = (post) =>{
    mutate({
      id:3,
      ...post
    })
  }
  return (
    <div>

      <PostForm pageTitle={'Add post'} onSubmit={handleCreate}/>
    </div>
  )
}

export default AddPost