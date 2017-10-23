import React, { Component } from 'react';
import styles from '../css/JobCard.css';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../constants/Constants';

const cardSource = {
  beginDrag(props, monitor, component) {
    return { id: props.job.id }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  }
}

class JobCard extends Component {
  render() {
    const { job, connectDragSource } = this.props

    return connectDragSource(
      <div className={styles.JobCard}>
        <div className={styles.JobCardHeader}>
          <h4>{job.title}</h4>
          <p>{job.company.name}</p>
        </div>
        <center><p>{job.status}</p></center>
        {/* <p>Contacts:</p>
        <ul>
          {job.contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
        </ul> */}
      </div>
    )
  }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(JobCard);
