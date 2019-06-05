import React, {Component} from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Resume from './components/Resume';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PopperJs from 'popper.js';
import jquery from 'jquery';
import Bootstrap from 'bootstrap';




class App extends Component{
  render(){
    return( 
      <Router>
        <div className="App">
          <TopNav/>
          <div className="contentArea">
            <Route exact path ='/'component = {Home} />
            <Route exact path ='/'component = {Resume} />
          </div>
          <Footer/>
        </div>
      </Router>
      
    );
  }
}



export default App;
