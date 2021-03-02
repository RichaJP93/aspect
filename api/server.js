const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const rooms = require('./routes/rooms');
const stories = require('./routes/stories');
const users = require('./routes/users');

const app = express();

app.use(express.json())
app.use(express.urlencoded())

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

app.use('/api/v1/rooms', rooms);
app.use('/api/v1/stories', stories);
app.use('/api/v1/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));