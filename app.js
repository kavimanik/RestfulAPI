const express = require('express')
const app = express()
const mongoose = require('mongoose') 
require('dotenv').config()

var bodyParser = require('body-parser')

const port = 3000

app.use(bodyParser.json())

var postsPage = require('./routes/posts.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/posts', postsPage)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("connected to database")
})

