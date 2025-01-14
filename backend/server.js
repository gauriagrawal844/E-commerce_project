require('dotenv').config();
require('express-async-errors');    
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('open', () => console.log('Connected to db'));
mongoose.connection.on('error', (err) => {
  console.log(err);
});