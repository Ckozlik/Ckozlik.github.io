import React from 'react';
import './TopNav.css';
//___________________________

class TopNav extends React.Component{
 
  render(){
    return(
      <div>
      <nav className="navbar sticky-top bg-dark navbar-dark navbar-expand-sm justify-content-end">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/myNav">
        <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="myNav">
          <ul className="navbar-nav"/>
            <li className="nav-item"/>
              <a className="nav-link" href="/">Home</a>
            <li className="nav-item"/>
              <a href="/" className="nav-link">Resume</a>
            <li className="nav-item dropdown"/>
              <a href="/" className="nav-link dropdown-toggle">Portfolio</a>
        </div>  
        </nav>
          <link rel="stylesheet" type="text/css" href="styles/style.css"/>

          </div>  

      
    );
  }
}

export default TopNav;