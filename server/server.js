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

app.post('/posts', (req, res) => {
  const newPost = req.body;
  newPost.id = dbData.posts.length + 1;
  dbData.posts.push(newPost);

  // Save the updated data back to db.json
  fs.writeFileSync('./db.json', JSON.stringify(dbData, null, 2));

  res.json(newPost);
});

// Add similar routes for UPDATE and DELETE operations

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
