import React from 'react';
import './ResJumbo.css';



class ResJumbo extends React.Component{
  render(){
    return(
      <div>
        <div className="container-fluid">
        <div className="jumbotron">
          <div className="container text-center">
            <div className="h2">Christabelle Kozlik</div>
            <div className="row my-3">
              <div className="col-lg-4">
                <i className="fas fa-envelope-open-text"></i>
                <a> christabellekozlik@gmail.com</a>
              </div>
              <div className="col-lg-4">
                <i className="fas fa-mobile-alt"></i>
                <a> 406.223.7702</a>
              </div>
              <div className="col-lg-4">
                <i className="far fa-address-card"></i>
                <a> 516 Valley Dr. Bozeman, MT 59817</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    );
  }
}

export default ResJumbo;