import React, { Component } from 'react';
import {Form, Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Addpost extends Component {
  constructor(){ 
    super() 
  this.state = { 
      title:"",
      article:"",
      authorName:""
     } 
    this.changeTitle=this.changeTitle.bind(this)
     this.changeArticle=this.changeArticle.bind(this)     
     this.changeName=this.changeName.bind(this)
     this.onSubmit=this.onSubmit.bind(this)
    }

changeArticle(e){
this.setState({article:e.target.value})
}
changeTitle(e){
this.setState({title:e.target.value})
}
changeName(e){
this.setState({authorName:e.target.value})
}
    onSubmit(e){
      e.preventDefault()
const post ={
        title: this.state.title,
        article: this.state.article,
        authorName: this.state.authorName
      }
  axios.post('http://localhost:4000/post/Addpost', post).then(data=>{
      console.log(data)

      this.setState({
      article:"",  
      title:"",
      authorName:""
      })})
}

    render() { 
        return ( <div class="bg-dark"><Container>
<br /> <br /><br /><br /><br /><br />
<div class="bg-dark" style={{marginLeft:'38%', backgroundColor:'#212529'}}>
<h1 style={{color:"white"}}>Create a Post</h1>

  <form class="col-md-6" onSubmit={this.onSubmit}>
  <div >
    <label for="inputTitle" class="form-label">Title</label>
    <input type="Title" class="form-control" id="inputTitle" placeholder="Title" onChange={this.changeTitle} value={this.state.title}/>
  </div>

  <div class="col-md-14">
  <label for="exampleFormControlTextarea1" class="form-label" >Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write a story...." onChange={this.changeArticle} value={this.state.article}></textarea>
</div>

    <div >
    <label for="inputTitle" class="form-label">Title</label>
    <input type="Name" class="form-control" id="inputName" placeholder="Author's Name" onChange={this.changeName} value={this.state.authorName}/>
  </div>
  <hr />
   <div class="col-auto">
 <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
</form>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /></div>
  </Container>
          </div>);
    }
}
 
export default Addpost;