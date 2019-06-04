import React from 'react';
import './Resume.css';
import ResJumbo from '../ResJumbo';
import Qualification from '../ResQualifications';
import ResTechnical from '../ResTechnical/ResTechnical';
import Experience from '../Experience';
import Education from '../Education';

//___________________________

class Resume extends React.Component{

  render(){
    return(
    <div>
      <ResJumbo/>
      <Qualification/>
      <ResTechnical/>
      <Experience/>
      <Education/>    
      </div>
    );
  }
}

export default Resume;