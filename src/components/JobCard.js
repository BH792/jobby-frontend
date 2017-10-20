import React, { Component } from 'react';
import styles from '../css/JobCard.css'

class JobCard extends Component {
  render() {
    return (
      <div className={styles.JobCard}>
        <div className={styles.JobCardHeader}>
          <h4>{this.props.job.title}</h4>
          <p>{this.props.job.company.name}</p>
        </div>
        <p>{this.props.job.status}</p>
        <p>Contacts:</p>
        <ul>
          {this.props.job.contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default JobCard;
