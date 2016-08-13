import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Mons } from '../api/mons.js';

import Task from './Task.jsx';

// App component - represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>PokeMierdas List</h1>
        </header>

        <div>
          {this.renderTasks()}
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
