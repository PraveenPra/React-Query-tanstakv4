import React from 'react'
import PostForm from './PostForm'
import { useMutation ,useQueryClient} from '@tanstack/react-query'
import { createPost } from '../Apis/posts'

const AddPost = () => {
const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess:()=>{
queryClient.invalidateQueries({queryKey:['posts']})
    }
  })

  const handleCreate = (post) =>{
    mutate({
      id:3,//just a dummy number here, server will assign ids
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