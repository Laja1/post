import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Post from './Post';
import Addpost from './Addpost';

class Body extends Component {
  state = {}
  render() {
    return (
      <div>
        <body class="d-flex h-100 text-center text-white bg-dark" >

          <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <main class="px-3">
              <h1>BLOG</h1>
              <p class="lead">Create Your Post, Create Your Story</p>
              <p class="lead">

              </p>
            </main>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <br /><br />      <br />
            <footer class="mt-auto text-white-50">
              <p>Author:  <a href="https://www.instagram.com/laja.xo/" class="text-white">Samuel Adelaja</a></p>
            </footer>
          </div>





        </body>
      </div>
    );
  }
}

export default Body;