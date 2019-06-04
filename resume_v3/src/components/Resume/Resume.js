import React from 'react';
import './Resume.css';
import ResJumbo from '../ResJumbo';
import Qualification from '../ResQualifications';
import ResTechnical from '../ResTechnical/ResTechnical';
import ResExp from './ResExp';
//___________________________

class Resume extends React.Component{

  render(){
    return(
    <div>
      <ResJumbo/>
      <Qualification/>
      <ResTechnical/>
      <ResExp/>
      

      //----Experience---->
      
      
      //----Education---->      
      <div className="container-fluid ml-2 my-2">
          <div className="row">
            <div className="col-sm-12 lead">
              <div> EDUCATION</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <b> Clark University</b>
            </div>
            <div className="col-sm-3">
              <div className="justify-content-end">
                <a>Worcester, MA</a>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-sm-9">
                <a> Bachelor of Arts, Management and Economics</a>
              </div>
              <div className="col-sm-3">
                <div className="justify-content-end">
                  <a>May 2014</a>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-9">
                <b> University of Montana</b>
              </div>
              <div className="col-sm-3">
                <div className="justify-content-end">
                  <a>Missoula, MT</a>
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-sm-9">
                  <a> Masters of Science, Business Analytics</a>
                </div>
                <div className="col-sm-3">
                  <div className="justify-content-end">
                    <a>December 2018</a>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-9">
                  <a> Masters of Arts, Business Administration</a>
                </div>
                <div className="col-sm-3">
                  <div className="justify-content-end">
                    <a>Expected May 2020</a>
                  </div>
                </div>
            </div>
      </div> 
      </div>
    );
  }
}

export default Resume;