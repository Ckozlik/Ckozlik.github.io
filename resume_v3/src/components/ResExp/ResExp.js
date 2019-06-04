import React from 'react';
import './ResExp.css';


class ResExp extends React.Component{
  render(){
    return(
      <div>
        <div className="container-fluid ml-2 my-2">
        <div className="row">
          <div className="col-sm-12 lead">
            <div> EXPERIENCE</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <b>Dodge Data & Analytics (Formerly McGraw Hill Financial)</b>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9">
            <i> Product Manager </i>
          </div>
          <div className="col-sm-3">
            <div className="justify-content-end">
              <a>September 2016 - Current</a>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12">
            <lu>
              <li> Manage and establish the strategic roadmap for the Dodge Global Network Platform </li>
              <li> Manage the upstream product development process interfacing with Engineering on requirements and specifications as lead business representative</li>
              <li> Collaborate with UI and Design team to create specifications and interaction models that best suits user needs, and create a compelling visual experience</li>
              <li> Conduct usability testing, collect customer feedback, and leverage market research to support the strategic roadmap</li>
              <li> Conduct Competitive analysis and create support material for marketing and sales enablement </li>
              <li> Worked with a strategic team to assess feature functionalities and determine products moving to EOL</li>
            </lu>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-9">
              <i> Associate Product Manager </i>
            </div>
            <div className="col-sm-3">
              <div className="justify-content-end">
                <a> February 2016 - September 2016</a>
              </div>
            </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12">
            <lu>
              <li> Managed the Business Intelligence Platform (SpecShare, BuildShare, Marketshare) with an ASV of  $13 million </li>
              <li> Delivered first to market construction leads mobile application and established the ongoing strategic roadmap</li>
              <li> Provided daily and weekly project status updates to the executive team and key stakeholders</li>
              <li> Presented new product releases at the Dodge National Sales Conferences</li>
              <li> Gathered and maintained Key Performance Indicators including profit/loss, project profitability, usage, and customer satisfaction for recently released products</li>
              <li> Completed user acceptance testing in development, quality assurance, and production environments</li>
              <li> Developed business plans and execute through full market launch</li>
              <li> Standardized the cross functional communication process; onboarded Product team </li>
            </lu>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-9">
              <i> Business Intelligence Analyst </i>
            </div>
            <div className="col-sm-3">
              <div className="justify-content-end">
                <a> July 2014 - February 2016</a>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-12">
              <lu>
                <li> Responsible for generating reports for regional sales directors to measure the productivity of sales representatives</li>
                <li> Lead role in alleviating technical debt by migrating clients to a new web-based user interface</li>
                <li> Provided clients with business critical information by translating customer’s needs into executable solutions  </li>
                <li> Extract product/brand information from Plan and Specification documents to provide market insight and forecasts</li>
                <li> Performed consultative services using product and market specific insight for potential and existing customers</li>
              </lu>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ResExp;