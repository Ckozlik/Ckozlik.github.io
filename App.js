import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Footer from './components/Footer';

//------------------------------------------------



class App extends Component{

  render(){
    return(
      <Router>
        <div className='App'>
          <TopNav/>
          <div className="contentArea">
            <Route exact path='/' component ={Home}/>
          </div>
          <Footer/>
      </Router>

      </div>
    );
  }
}