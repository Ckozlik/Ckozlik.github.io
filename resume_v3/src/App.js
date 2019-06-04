import React, {Component} from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Resume from './components/Resume';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component{
  constructor(props){
    super(props);

  }
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
