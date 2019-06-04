import React, {Component} from 'react';
import './App.css';
import TopNav from './components/TopNav'

class App extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return( 
      <div className="App">
        <TopNav/>
      </div>
      
      
    );
  }
}



export default App;
