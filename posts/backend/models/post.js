const express = require('express')
const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const postSchema=({
    title:String,
    article:String,
    authorName:String
})

module.exports= mongoose.model('Post', postSchema)