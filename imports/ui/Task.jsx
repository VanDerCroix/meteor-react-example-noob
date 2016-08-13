import React, { Component, PropTypes } from 'react';

import { Mons } from '../api/mons.js';

// Task component - represents a single todo item
export default class Task extends Component {
  deleteThisTask() {
    Mons.remove(this.props.task._id);
  }

  render() {

    return (	  
      <div className="row">
        <div className="col s12 m2">
          <div className="card">
            <div className="card-image">
              <img src={this.props.task.url} />
            </div>
            <div className="card-content">
              <p>{this.props.task.name}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
