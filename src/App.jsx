import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import PostLists from './Pages/PostLists'
import Post from './Pages/Post'
import EditPosts from './Pages/EditPosts'
import PageNotFound from './Pages/404NotFound'

function App() {

  return (
      <div >
        <Routes>
<Route path='/' element={<PostLists/>}/>
<Route path='/post/:id' element={<Post/>}/>
<Route path='/post/:id/edit' element={<EditPosts/>}/>
<Route path="*" element={<PageNotFound/>} />
          </Routes>
      </div>
  )
}

export default App
