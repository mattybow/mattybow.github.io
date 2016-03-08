import React, { Component } from 'react';
import ProjectView from '../components/projectView';

export default class EpPage extends Component{
  render(){
    const details = {
      title:"Endorsement Primary",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"react app for tracking endorsements during the 2016 primary election"
    }
    return <ProjectView details={details}
                        imageUrl="/images/endorsement_ortho_sc.png">
      <div>
        <p>
          For a while now, I have been thinking about how to constructively
          contribute to the political system.  We can influence the system
          on a periodic basis through elections, but how does a voter come to a 
          decision on who will represent them best?  A typical voter is either
          subject to deluge of information, as it is with the saturated news
          cycle on the presidential election or a derth of information as is the
          case with smaller, less visible elected offices.with a focus on informing the
          average voter.  The hope would be to influence a person's decision
          using aggregate data to engender further questions about a candidate.
          There are already several niches filled by </p>
      </div>
    </ProjectView>
  }
}
