const express = require('express');
const cors = require('cors');
const commentService = require('./services/commentServices');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const port = 3000;

const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];

app.get('/api/comment/xss', (req, res) => {
    const comments = commentService.getAll();
    return res.status(200).json({ comments })
});

app.post('/api/comment/xss', (req, res) => {
    const comment = req.body;
    console.log(comment)
    commentService.insertComment(comment);
    return res.status(201).json(comment);
});

app.get('/api/user/:id', (req, res) => {
    const user = users.find((user) => user.id == req.params.id);
  
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
  
    return res.send(user);
});
  
app.listen(port, () => {
    console.log(`API on port: ${port}`)
});