import React, { Component, PropTypes } from 'react';

import { Mons } from '../api/mons.js';

// Task component - represents a single todo item
export default class Task extends Component {
  deleteThisTask() {
    Mons.remove(this.props.task._id);
  }

  render() {

    return (
      <div className="col s6 m3 l3">
        <div className="card hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.task.url} />
            <span className="card-title black-text">{this.props.task.entry}</span>
          </div>

          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {this.props.task.name}
              <i className="material-icons right">more_vert</i>
            </span>
          </div>

          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {this.props.task.name}
              <i className="material-icons right">close</i>
            </span>

            <a className="btn-floating btn-small red"
              onClick={this.deleteThisTask.bind(this)}>
              <i className="material-icons">delete</i>
            </a>

            <a className="btn-floating btn-small yellow darken-1">
              <i className="material-icons">star</i>
            </a>

            <a className="btn-floating btn-small green">
              <i className="material-icons">functions</i>
            </a>

            <a className="btn-floating btn-small blue">
              <i className="material-icons">memory</i>
            </a>

            <p>Here is some more information about this product that
              is only revealed once clicked on.</p>
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
