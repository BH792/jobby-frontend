import React, { Component } from  'react';
import JobCard from './JobCard'
import JobColumn from './JobColumn'
import styles from '../css/JobsContainer.css'

class JobsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filteredJobs: {
        watching: [],
        applied: [],
        interviewed: [],
        offer: []
      }
    }
  }

  componentDidMount = () => {
    this.setState({
      filteredJobs: this.separateByJobStatus(this.props.jobs)
    })
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps);
    this.setState({
      filteredJobs: this.separateByJobStatus(nextProps.jobs)
    })
  }

  separateByJobStatus = (jobs) => {
    let filteredJobs = {
      watching: [],
      applied: [],
      interviewed: [],
      offer: []
    }

    jobs.forEach(job => {
      if (job.active && filteredJobs[job.status]) {
        filteredJobs[job.status].push(job)
      }
    })

    return filteredJobs
  }

  render() {
    return (
      <div className={styles.JobsContainer}>
        <div className={styles.JobsGrid}>

          <JobColumn
            changeJobStatus={this.props.changeJobStatus}
            styleClass={'JobsGridWatching'}
            title={'Watching'}
          >
            {this.state.filteredJobs.watching.map(job => {
              return <JobCard job={job} key={job.id}/>
            })}
          </JobColumn>

          <JobColumn
            changeJobStatus={this.props.changeJobStatus}
            styleClass={'JobsGridApplied'}
            title={'Applied'}
          >
            {this.state.filteredJobs.applied.map(job => {
              return <JobCard job={job} key={job.id}/>
            })}
          </JobColumn>

          <JobColumn
            changeJobStatus={this.props.changeJobStatus}
            styleClass={'JobsGridInterviewed'}
            title={'Interviewed'}
          >
            {this.state.filteredJobs.interviewed.map(job => {
              return <JobCard job={job} key={job.id}/>
            })}
          </JobColumn>

          <JobColumn
            changeJobStatus={this.props.changeJobStatus}
            styleClass={'JobsGridOffer'}
            title={'Offer'}
          >
            {this.state.filteredJobs.offer.map(job => {
              return <JobCard job={job} key={job.id}/>
            })}
          </JobColumn>

        </div>
      </div>
    )
  }
}

export default JobsContainer;
