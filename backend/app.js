const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');

// const path = require('path');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config({ path: 'backend/config/config.env' });
}

// Using Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Importing Routes
const post = require('./routes/post');
const user = require('./routes/user');

// Using Routes
app.use('/api/v1', post);
app.use('/api/v1', user);

// Connecting Frontend
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

module.exports = app;
