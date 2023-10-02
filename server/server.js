const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

app.use(bodyParser.json());

// Load your JSON data
const dbData = require('./db.json');

app.use(cors());
// Define routes to perform operations
app.get('/posts', (req, res) => {
  res.json(dbData.posts);
});

app.get('/post/:id', (req, res) => {
    const id = req.params.id;
    const post = dbData.posts.find((post) => post.id === parseInt(id));

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
  
    res.json(post);
  });

app.post('/create-post', (req, res) => {
  const newPost = req.body;
  newPost.id = dbData.posts.length + 1;
  dbData.posts.push(newPost);

  // Save the updated data back to db.json
  fs.writeFileSync('./db.json', JSON.stringify(dbData, null, 2));

  res.json(newPost);
});

app.put('/update-post/:id', (req, res) => {
    const id = req.params.id; // Retrieve the value of 'id' from the route parameters
    const updatedPostData = req.body; // Assuming the updated data is sent in the request body
  
    // Find the post with the specified 'id'
    const postIndex = dbData.posts.findIndex((post) => post.id === parseInt(id));
  
    if (postIndex === -1) {
      return res.status(404).json({ message: 'Post not found' });
    }
  
    // Update the post with the new data
    dbData.posts[postIndex] = { ...dbData.posts[postIndex], ...updatedPostData };
  
    // Save the updated data back to db.json (you may need to write this to a file)
     fs.writeFileSync('./db.json', JSON.stringify(dbData, null, 2));
  
    res.json(dbData.posts[postIndex]);
  });
  
  app.delete('/destroy-post/:id', (req, res) => {
    const id = req.params.id; // Retrieve the value of 'id' from the route parameters
  
    // Find the post with the specified 'id'
    const postIndex = dbData.posts.findIndex((post) => post.id === parseInt(id));
  
    if (postIndex === -1) {
      return res.status(404).json({ message: 'Post not found' });
    }
  
    // Remove the post from the array
    dbData.posts.splice(postIndex, 1);
  
    // Save the updated data back to db.json (you may need to write this to a file)
     fs.writeFileSync('./db.json', JSON.stringify(dbData, null, 2));
  
    res.json({ message: 'Post deleted successfully' });
  });
  
// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
