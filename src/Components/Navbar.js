import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
      <div> 
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
   <Link to="/"><a class="navbar-brand" href="#">Orcus</a></Link> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
          <Link to='./front'><a class="nav-link" href="#">Front</a></Link>
          </li>
          <li class="nav-item">
           <Link to="/"><a class="nav-link active" aria-current="page">Home</a></Link>  
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
              </li>
             <Link to='/cart'><button type="button" class="btn btn-light">
                <img src={props.kart} className="kart" /> <span class="badge badge-light"><div className='number'>{props.count}</div></span>
</button></Link>
        </ul>
      </div>
        </div>
       
  </nav>
      </div>
  )
}

export default Navbar



