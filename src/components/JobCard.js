import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styles from '../css/JobCard.css';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemTypes } from '../constants/Constants';

const cardSource = {
  beginDrag(props, monitor, component) {
    return {
      id: props.job.id,
      rank: props.job.rank
    }
  }
}

const dragCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
  }
}

const cardTarget = {
  // hover(props, monitor, component) {
  //   const dragRank = monitor.getItem().rank
  //   const hoverRank = props.job.rank
  //
  //   if (dragRank === hoverRank) {
  //     return
  //   }
  //
  //   // Determine rectangle on screen
  //   const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
  //
  //   // Get vertical middle
  //   const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
  //
  //   // Determine mouse position
  //   const clientOffset = monitor.getClientOffset()
  //
  //   // Get pixels to the top
  //   const hoverClientY = clientOffset.y - hoverBoundingRect.top
  //
  //   // Dragging downwards
	// 	if (dragRank < hoverRank && hoverClientY < hoverMiddleY) {
	// 		return
	// 	}
  //
	// 	// Dragging upwards
	// 	if (dragRank > hoverRank && hoverClientY > hoverMiddleY) {
	// 		return
	// 	}
  //
  //   props.changeJobRank(dragRank, hoverRank, props.job.status)
  //   monitor.getItem().rank = hoverRank
  // },
  canDrop(props, monitor) {
    console.log('canDrop');
    const dragRank = monitor.getItem().rank
    const hoverRank = props.job.rank

    if (dragRank === hoverRank) {
      return false
    } else {
      return true
    }
  },
  drop(props, monitor, component) {
    console.log("drop");
    const dragRank = monitor.getItem().rank
    const hoverRank = props.job.rank

    props.changeJobRank(dragRank, hoverRank, props.job.status)
  }
}

const dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class JobCard extends Component {
  render() {
    const { job, connectDragSource, connectDropTarget } = this.props

    return connectDragSource(
      connectDropTarget(
        <div className={styles.JobCard}>
          <div className={styles.JobCardHeader}>
            <h4>{job.title}</h4>
            <p>{job.company.name}</p>
          </div>
          <center><p>{job.rank}</p></center>
        </div>
      )
    )
  }
}

const dropJobCard = DropTarget(ItemTypes.CARD, cardTarget, dropCollect)(JobCard)
export default DragSource(ItemTypes.CARD, cardSource, dragCollect)(dropJobCard);
