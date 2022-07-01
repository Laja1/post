import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Post from './Post';
import Addpost from './Addpost';
import Body from './Body';


class Header extends Component {
    state = {  } 
    render() { 
        return (
        <div >
            
  <header class="site-header sticky-top py-1 " >
  <nav class="container d-flex flex-column flex-md-row justify-content-between">
    
    <a class="py-2" href="#" aria-label="Product">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
    </a>
    <Link class="header-color" to='/Body' className='nav-link'>Home</Link>
    <Link class="header-color" to='/Addpost' className='nav-link'>ADD-POST</Link>
    <Link  to='/Post' className='nav-link'>POST</Link>
    
      </nav>
</header>
        </div>);
    }
}
 
export default Header;