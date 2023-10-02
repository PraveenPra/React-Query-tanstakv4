import React from 'react'
import PostForm from '../Components/PostForm'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchPost, updatePost } from '../Apis/posts'
import { useNavigate, useParams } from 'react-router-dom'

const EditPosts = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { id } = useParams();

  const { isLoading, isError, data: post, error } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id)
  })

  const { mutate } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      navigate('/')
    }
  })

  const handleSubmit = (updatedPost) => {
    mutate({
      id: 3,
      ...updatedPost
    })
  }

  return (
    <div>
      <PostForm initialValue={post} pageTitle={'Edit post'} onSubmit={handleSubmit} />
    </div>
  )
}

export default EditPosts