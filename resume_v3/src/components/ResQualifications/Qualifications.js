import React from 'react';
import './Qualifications.css';

class Qualifications extends React.Component{
  render(){
    return(
      <div>
        <div className="container my-2">
        <div className="row">
          <div className="col-sm-12 lead">
            <div> QUALIFICATION SUMMARY</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <a> Analytical, organized, team-oriented individual prepared to excel in the field of Business
              Analytics. Detail oriented, and resourceful in completing projects; able to effectively multi-task. </a>
          </div>
        </div>
        <div className="row my-3 ml-5">
          <div className="col-md-4">
            <lu>
              <li>Strong data mining skills</li>
              <li>Experience with Agile development (SCRUM)</li>
              <li>Competent with User Acceptance Testing</li>
            </lu>
          </div>
          <div className="col-md-4">
            <lu>
              <li>Go-to-Market strategies</li>
              <li>Direct interactions with sales managers and directors </li>
              <li>Planning and priorization of SaaS roadmaps</li>
            </lu>
          </div>
          <div className="col-md-4">
            <lu>
              <li>Excellent communication skills </li>
              <li>Exceptional time management </li>
              <li>Consultative abilities</li>
            </lu>
          </div>
        </div>
      </div>
      </div>
    )
  }
} 

export default Qualifications;