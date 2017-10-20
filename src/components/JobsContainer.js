import React, { Component } from  'react';
import JobCard from './JobCard'
import styles from '../css/JobsContainer.css'


class JobsContainer extends Component {
  componentDidMount() {
    fetch('https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13', {
    	method: "POST",
    	headers: {
    		"Content-Type": "text/plain",
        'Authorization': 'Basic ' + btoa('285b8d9a-f82f-40b4-823f-a357dcc43a18:bepXm5OmNx5a'),
        },
    	body: "TESTING TESTING TESTING"
    })
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return (
      <div className={styles.JobsContainer}>
        {this.props.jobs.map(job => <JobCard key={job.id} job={job}/>)}
      </div>
    )
  }
}

export default JobsContainer;
