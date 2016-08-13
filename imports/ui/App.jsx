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
      <div>
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">Logo</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li className="active"><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  </div>

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
