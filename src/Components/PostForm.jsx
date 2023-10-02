import React, { useState } from 'react'

const PostForm = ({pageTitle}) => {
  const [post, setPost] = useState({
    title: '', body: ''
  })

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(post)
  }

  const renderField = (label) => (
    <div style={{
      margin: '12px 8px'
    }}>
      <label>{label}</label>
      <br />
      <input
        style={{
          padding: '8px 16px',
          margin: '4px',
          textTransform:'capitalize'
        }}
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
        onChange={handleChange}
      />

    </div>
  )

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto 2rem',
      background: '#ddd',
      width: '100%',
      padding: '2rem'
    }}>
      <h2>{pageTitle}</h2>

      <form onSubmit={handleSubmit}>
        {renderField('Title')}

        {renderField('Body')}

        <button type='submit' style={{
          padding: '8px 16px',
          margin: '14px 8px'
        }}>
          SUBMIT
        </button>

      </form>

    </div>
  )
}

export default PostForm