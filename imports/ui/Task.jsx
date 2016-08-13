import React, { Component, PropTypes } from 'react';

import { Mons } from '../api/mons.js';

// Task component - represents a single todo item
export default class Task extends Component {
  deleteThisTask() {
    Mons.remove(this.props.task._id);
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = 'col-xs-12 col-md-3';

    return (
      <div className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
        <img src={this.props.task.url} />
        <span className="text">{this.props.task.name}</span>
      </div>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
