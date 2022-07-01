import React, { useState, useEffect} from 'react';
import {Card, Container} from 'react-bootstrap'
import axios from 'axios'

function Post(){
  const[post, setPost]= useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/post').then(res=>{
      setPost(res.data)
    }).catch(err=>{
      console.long(err)
    })
  })
 

        return (<div class="bg-dark">
<Container>
<br /> <br /> <br /> 
{post.map(post=>
<div class="card mb-3 bg-info col-md-14" >
  <div class="row g-0">
   
    <div class="col-md-12">
      <div class="card-body">
        <h5 class="card-title" key={post.id}>{post.title}</h5>
        <p class="card-text" key={post.id}>{post.article}</p>
        <p class="card-text"><small class="text-muted" key={post.id}>{post.authorName}</small></p>
      </div>
    </div>
  </div>
</div>)}


   
 
  </Container> </div>);
    }

 
export default Post;