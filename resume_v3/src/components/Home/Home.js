import React from 'react';
import './Home.css';
//___________________________

class Home extends React.Component{

  render(){
    return(
      <div>
        <div className="container-fluid"></div>
          <div className="row my-4">
            <div className="col-md-12">
              <div className="media">
                <img src="src/images/Head_Shot.jpeg" className ="mx-auto d-block"/>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-12">
              <i className="fab fa-linkedin-in"></i>
              <a href="www.linkedin.com/in/christabellekozlik"> www.linkedin.com/in/christabellekozlik</a>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-12">
              <i className="fab fa-github-square"></i>
              <a href="https://github.com/Ckozlik"> https://github.com/Ckozlik</a>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;