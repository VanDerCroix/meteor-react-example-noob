import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Mons } from '../api/mons.js';

import Task from './Task.jsx';
import AppBar from './AppBar.jsx';

// App component - represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
    <div>
      <AppBar />

      <div className="container">
        <div className="row">
          {this.renderTasks()}
        </div>
      </div>
    </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasks: Mons.find({}).fetch(),
  };
}, App);
