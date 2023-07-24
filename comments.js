// Create web server with Express
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

// Import comments data
const comments = require('./data/comments');

// Import posts data
const posts = require('./data/posts');

// Import users data
const users = require('./data/users');

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Home route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    posts: posts
  });
});

// About route
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

// Contact route
app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
});

// Comments route
app.get('/comments', (req, res) => {
  res.render('comments', {
    title: 'Comments',
    comments: comments
  });
});

// Add comments route
app.get('/comments/add', (req, res) => {
  res.render('add_comment', {
    title: 'Add Comment'
  });
});

// Add comments submit POST route
app.post('/comments/add', (req, res) => {
  let newComment = {
    name: req.body.name,
    email: req.body.email,
    body: req.body.body
  };

  comments.push(newComment);
  res.redirect('/comments');
});

// Users route
app.get('/users', (req, res) => {
  res.render('users', {
    title: 'Users',
    users: users
  });
});

// Add users route
app.get('/users/add', (req, res) => {
  res.render('add_user', {
    title: 'Add User'
  });
});

// Add users submit POST route
app.post('/users/add', (req, res) => {
  let newUser = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  };

  users.push(newUser);
  res.redirect('/users');
});

// Listen on
