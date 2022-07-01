const express = require('express')
const cors = require('cors')
const app = express()
const postRoute = require('./routes/route')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


mongoose.connect('mongodb+srv://Laja:ifeoluwa@cluster0.y4q4b.mongodb.net/post?retryWrites=true&w=majority')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/post', postRoute)
app.listen(4000)