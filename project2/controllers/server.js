const express = require('express');
// const morgan = require('morgan');
const app = express();
const path = require('path');
const candyData = require('./db/candies');
const PORT = process.env.PORT || 3000;
// const candy = require('./candy');
const candyRoutes = require('candyRoutes');

app.listen(PORT, (req,res)=> {
  console.log(`hello TJ I'm listening on port ${PORT} would you like some coffee? Or a cookie? I'm here for you. I am your server so I am here to serve you. Please TJ let me serve you! `);
})
app.get('/', (req,res)=>{
  res.send('hello')
})
// app.use(morgan('dev'));




app.get('*', (req,res)=>{
  res.status(404).send('man you are dumb');
})
