const express = require('express')
const Post = require('../models/post')
const router = express.Router()

router.get('/', async (req,res)=>{
    try{
        const savedPost = await Post.find()
        res.json(savedPost)
    }
    catch(err){
res.json({message:err})
    }
})

router.post('/addpost', async (req,res)=>{
    const post = Post({
        title:req.body.title,
        article:req.body.article,
        authorName:req.body.authorName
    })
try {
    const savedPost = await post.save()
    res.json(savedPost)
}
catch(error){
    res.json({message:error})
}

})

module.exports=router